# Security Policy

## Purpose of This Repository

This repository contains **ONLY legal documents and policies** for LESRA Future Apps. 

⚠️ **NEVER commit application source code, API keys, credentials, or configuration files here.**

## What Should Be Here

✅ Privacy policies  
✅ Terms of service  
✅ Legal documents  
✅ Public-facing documentation  

## What Should NOT Be Here

❌ Application source code  
❌ API keys or secrets  
❌ Firebase configuration files  
❌ Google Services JSON files  
❌ Private credentials  
❌ Environment variables  
❌ Any sensitive configuration  

## If You Accidentally Committed Secrets

If you've accidentally committed API keys or other secrets to this repository:

### 1. Revoke the Exposed Credentials Immediately

**For Google/Firebase API Keys:**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Navigate to "APIs & Services" > "Credentials"
- Delete or regenerate the exposed key
- Create a new key and update your application

**For Other Services:**
- Access the service's credential management
- Revoke/delete the exposed credential
- Generate new credentials

### 2. Remove from Git History

Simply deleting a file in a new commit does NOT remove it from git history. Security scanners will still detect it.

**To completely remove secrets from git history:**

```bash
# Option 1: Using git filter-repo (recommended)
# Install: pip install git-filter-repo
git filter-repo --path-glob '*secret-file*' --invert-paths

# Option 2: Using BFG Repo-Cleaner
# Download from: https://rtyley.github.io/bfg-repo-cleaner/
java -jar bfg.jar --delete-files secret-file.json

# After cleaning, force push
git push origin --force --all
```

⚠️ **Warning:** Rewriting history affects all collaborators. Coordinate with your team.

### 3. Notify Affected Parties

If the exposed secret could have been accessed:
- Notify your security team
- Review access logs for unauthorized use
- Consider additional security measures

## Prevention

### Use .gitignore

This repository includes a `.gitignore` file that blocks common secret patterns. Make sure it's always up to date.

### Pre-commit Hooks

Consider using tools like:
- [git-secrets](https://github.com/awslabs/git-secrets)
- [detect-secrets](https://github.com/Yelp/detect-secrets)
- [gitleaks](https://github.com/gitleaks/gitleaks)

### Separate Repositories

Keep application code and configuration in private repositories. This public repository is for legal documents only.

## Reporting a Security Vulnerability

If you discover a security vulnerability in this repository:

1. **Do NOT** create a public issue
2. Contact: jdronquillo16@gmail.com
3. Include details about the exposure
4. We will respond within 48 hours

## GitHub Secret Scanning

GitHub automatically scans for known secret patterns. If you receive a secret scanning alert:

1. Take it seriously - the secret may have been exposed
2. Follow the remediation steps above
3. Close the alert only after the secret is revoked AND removed from history

## Questions?

Contact: jdronquillo16@gmail.com
