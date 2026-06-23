#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const APPS = fs.readdirSync(REPO_ROOT).filter(name => {
  const full = path.join(REPO_ROOT, name);
  return fs.statSync(full).isDirectory() && !['assets','.git'].includes(name);
});

const REQUIRED_EMAILS = ['jdronquillo46@gmail.com','jdronquillo16@gmail.com'];
function checkFileContains(filePath, patterns){
  try{
    const text = fs.readFileSync(filePath,'utf8').toLowerCase();
    return patterns.some(p => text.includes(p.toLowerCase()));
  }catch(e){
    return false;
  }
}

function readFileText(filePath){
  try{ return fs.readFileSync(filePath,'utf8').toLowerCase(); }catch(e){ return '' }
}

let issues = [];
console.log('Scanning', APPS.length, 'folders...');
APPS.forEach(app=>{
  const appDir = path.join(REPO_ROOT, app);
  const priv = path.join(appDir,'privacy-policy.html');
  const terms = path.join(appDir,'terms-of-service.html');
  const appIssues = [];
  if(!fs.existsSync(priv)) appIssues.push('missing privacy-policy.html');
  if(!fs.existsSync(terms)) appIssues.push('missing terms-of-service.html');
  if(fs.existsSync(priv)){
    const text = readFileText(priv);
    // check for AdMob mention
    const hasAdmob = /admob|ads|advert/i.test(text);
    if(!hasAdmob) appIssues.push('privacy: no AdMob/ads mention');
    else {
      // if AdMob present, require explicit non-personalized wording when serving non-personalized ads
      const hasNonPersonal = /non[- ]?personalized|nonpersonalized|non[- ]?personalised/i.test(text);
      if(!hasNonPersonal) appIssues.push('privacy: AdMob mentioned but missing explicit "non-personalized" ads disclosure');
    }
    // check for billing mention
    if(!/google play|play billing|google play billing|subscription/i.test(text)) appIssues.push('privacy: no Google Play Billing / subscription mention');
    // header check
    const headerOk = /privacy policy/.test(text) && /by lesra future apps/.test(text);
    if(!headerOk) appIssues.push('privacy: header format may be incorrect');
    // contact email
    if(!checkFileContains(priv,REQUIRED_EMAILS)) appIssues.push('privacy: missing standard contact email');

    // COPPA / children's privacy checks
    const mentionsChildren = /child|children|kids|kid|coppa|child-directed|family-friendly/i.test(text);
    if(mentionsChildren){
      const hasCoppaStmt = /do not knowingly collect personal information from children under 13|we do not knowingly collect personal information from children|coppa/i.test(text);
      if(!hasCoppaStmt) appIssues.push('privacy: mentions children but missing COPPA / "do not knowingly collect" statement');
      const hasAgeGate = /age gate|age-gate|age verification|age check|age gate on first launch/i.test(text);
      if(!hasAgeGate) appIssues.push('privacy: mentions children but missing an age-gate / age verification statement');
    }
  }
  if(fs.existsSync(terms)){
    if(!checkFileContains(terms,['google play','play billing','subscription']) ) appIssues.push('terms: no Google Play Billing / subscription mention');
    if(!checkFileContains(terms,['as is','limitation of liability','liability'])) appIssues.push('terms: missing key legal disclaimers');
    if(!checkFileContains(terms,REQUIRED_EMAILS)) appIssues.push('terms: missing standard contact email');
  }
  if(appIssues.length) issues.push({app,issues:appIssues});
});

if(issues.length===0){
  console.log('\nNo issues found. All apps pass the basic checks.');
  process.exit(0);
} else {
  console.log('\nFound issues:');
  issues.forEach(i=>{
    console.log('\n- ' + i.app + ':');
    i.issues.forEach(it=> console.log('   • ' + it));
  });
  process.exit(2);
}
