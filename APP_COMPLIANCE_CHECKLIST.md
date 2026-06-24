# LESRA Future Apps — App Compliance & Policy Checklist

Use this checklist whenever onboarding a new app or reviewing existing legal documents to ensure compliance with Google Play policies, privacy regulations, and LESRA Future Apps standards.

---

# 🔍 Compliance Review Scope (Token-Efficient)

## Goal

Gather only the information necessary to create accurate legal documents and maintain compliance.

Do NOT perform repository-wide scans unless absolutely necessary.

---

## Priority 1 — Always Review

Review these files first:

* README.md
* AndroidManifest.xml
* privacy-policy.html
* terms-of-service.html
* app compliance checklist.md
* Store listing metadata (if available)

Purpose:

* Identify app functionality
* Identify permissions
* Identify target audience
* Identify monetization
* Identify legal disclosures already present

---

## Priority 2 — Review Only If Present

Review only when these files exist:

* app/build.gradle
* app/build.gradle.kts
* project build.gradle
* gradle/libs.versions.toml
* google-services.json
* Firebase configuration files
* AdMob configuration files
* Billing configuration files

Purpose:

* Detect Firebase usage
* Detect AdMob usage
* Detect Google Play Billing
* Detect analytics SDKs
* Detect third-party services

---

## Priority 3 — Review Source Code Only If Needed

Inspect source code only when required information cannot be determined from:

* README
* Manifest
* Gradle dependencies
* Existing legal documents

When source inspection is required, search only for:

* Permissions
* AdMob
* Firebase
* Billing
* Authentication
* Analytics
* Notifications
* AI services
* Cloud storage
* Location access
* Camera access
* Microphone access

Do not inspect unrelated application logic.

---

## Files To Ignore

Unless specifically requested, do NOT inspect:

* node_modules/
* build/
* dist/
* .gradle/
* .idea/
* .git/
* generated code
* assets/
* screenshots/
* icons/
* images/
* localization files
* theme files
* animation files
* test files
* CI/CD files

---

## Early Exit Rule

If README, Manifest, Gradle dependencies, and existing legal documents provide sufficient information:

* Stop searching.
* Do not inspect additional files.
* Proceed with compliance review and policy updates.

---

# 📋 Pre-Onboarding App Profile

Before editing any policy files, answer these questions:

1. Target Audience:

   * Children (under 13)
   * General Audience
   * Adults Only

2. Monetization:

   * Ads (AdMob)
   * Premium Upgrade
   * Subscription
   * Paid App
   * No Monetization

3. Data Collection:

   * Account Required
   * Anonymous Usage
   * Local Storage Only
   * Cloud Storage
   * Personal Data Collection

4. Permissions Used:

   * Internet
   * Notifications
   * Camera
   * Microphone
   * Location
   * Storage
   * Other

5. Third-Party Services:

   * Google AdMob
   * Firebase Analytics
   * Firebase Crashlytics
   * Google Play Billing
   * Google Sign-In
   * AI APIs
   * Other Services

---

# 🛠️ Checklist 1 — Privacy Policy (privacy-policy.html)

## 1. Header & Metadata

* [ ] Header format is correct:

  * Privacy Policy
  * [App Emoji] [App Name]
  * by LESRA Future Apps
  * Last Updated and Effective Date

* [ ] Includes back button:

```html
<a href="../index.html" class="back-button">&#8592; Back to Legal Documents</a>
```

* [ ] Styling matches LESRA legal page standards.

---

## 2. Accuracy Verification

* [ ] Policy reflects actual app behavior.
* [ ] No generic placeholder content.
* [ ] No assumptions about features.
* [ ] All statements verified through reviewed files.

---

## 3. Advertising Disclosures

Required when ads are present.

* [ ] AdMob disclosed in Information Collected Automatically.
* [ ] AdMob disclosed in Third-Party Services.
* [ ] Summary section mentions advertising.
* [ ] Child-directed ad settings disclosed if applicable.

---

## 4. Subscriptions & Payments

Required when Billing is present.

* [ ] Google Play Billing disclosed.
* [ ] Purchase verification disclosed.
* [ ] Subscription disclosures included.
* [ ] Premium features accurately described.

---

## 5. Data Collection

* [ ] Personal information disclosures accurate.
* [ ] Local storage usage disclosed.
* [ ] Cloud storage usage disclosed.
* [ ] Analytics disclosures accurate.
* [ ] Authentication disclosures accurate.

---

## 6. Children's Privacy

If child-directed or family-friendly:

* [ ] COPPA disclosures included.
* [ ] GDPR-K considerations included.
* [ ] No knowingly collected child data.
* [ ] Age gate disclosed if used.
* [ ] No account requirement for core functionality unless necessary.

---

## 7. User Rights

* [ ] Access
* [ ] Correction
* [ ] Deletion
* [ ] Data Portability
* [ ] Withdrawal of Consent

---

## 8. Contact Information

* [ ] Developer Email:
  [jdronquillo16@gmail.com](mailto:jdronquillo16@gmail.com)

* [ ] Privacy Email:
  [jdronquillo46@gmail.com](mailto:jdronquillo46@gmail.com)

---

# ⚖️ Checklist 2 — Terms of Service (terms-of-service.html)

## 1. Header & Metadata

* [ ] Header format is correct.
* [ ] Back button included.
* [ ] Styling matches LESRA legal standards.

---

## 2. License Terms

* [ ] Limited license granted.
* [ ] Android use specified.
* [ ] Non-exclusive license.
* [ ] Revocable license.

---

## 3. Premium Features

If billing exists:

* [ ] Premium access terms included.
* [ ] Subscription terms included.
* [ ] Billing terms included.
* [ ] Anti-circumvention language included.

---

## 4. Legal Disclaimers

* [ ] AS IS disclaimer included.
* [ ] AS AVAILABLE disclaimer included.
* [ ] Warning box styling used.

---

## 5. Limitation of Liability

* [ ] Liability limitation included.
* [ ] Warning box styling used.
* [ ] Liability cap clearly stated.

---

# 🎨 Checklist 3 — Legal Page Design Consistency

Review only legal documents.

Compare:

* privacy-policy.html
* terms-of-service.html
* legal index page
* other legal pages

---

## Theme Consistency

* [ ] Same color palette.
* [ ] Same gradients.
* [ ] Same shadows.
* [ ] Same borders.
* [ ] Same hover effects.

---

## Typography Consistency

* [ ] Same font family.
* [ ] Same heading styles.
* [ ] Same paragraph styles.
* [ ] Same font sizes.
* [ ] Same spacing.

---

## Layout Consistency

* [ ] Same container width.
* [ ] Same card styles.
* [ ] Same section spacing.
* [ ] Same responsive breakpoints.

---

## Component Consistency

* [ ] Same back button style.
* [ ] Same warning box style.
* [ ] Same info box style.
* [ ] Same footer style.
* [ ] Same link style.

---

## Responsive Design

* [ ] Mobile friendly.
* [ ] Tablet friendly.
* [ ] Desktop friendly.
* [ ] No horizontal scrolling.

---

# 🚀 Checklist 4 — Repository Integration

## Main Index (index.html)

* [ ] App section added.
* [ ] Uses app-section class.
* [ ] Uses app-title class.
* [ ] Correct emoji used.
* [ ] Description added.
* [ ] Privacy Policy link added.
* [ ] Terms of Service link added.

---

## README.md

* [ ] App added to app list.
* [ ] Description updated if required.

---

## app-ads.txt

* [ ] AdMob configuration verified.
* [ ] Developer information verified.

---

# 🛡️ Final Compliance Validation

Before final approval:

* [ ] Privacy Policy matches implementation.
* [ ] Terms of Service matches implementation.
* [ ] No contradictory statements.
* [ ] No placeholder content.
* [ ] Google Play compliant.
* [ ] User Data Policy compliant.
* [ ] Families Policy compliant if applicable.
* [ ] COPPA compliant if applicable.
* [ ] GDPR considerations reviewed.
* [ ] CCPA considerations reviewed.
* [ ] AdMob disclosures verified.
* [ ] Billing disclosures verified.
* [ ] Permissions disclosed where necessary.
* [ ] Third-party services disclosed accurately.
* [ ] Legal pages share the same design system.
* [ ] Legal pages share the same fonts.
* [ ] Legal pages share the same layout standards.
* [ ] HTML is responsive and production-ready.

# 📑 Legal Document Completeness Verification

Before approving any Privacy Policy or Terms of Service document:

## Contact Information

* [ ] Developer name is present.
* [ ] Developer name matches repository standards.
* [ ] Developer email is present.
* [ ] Privacy/support email is present.
* [ ] Contact information is consistent across all legal documents.

Example:

Developer: LESRA Future Apps

Support Email: jdronquillo46@gmail.com


---

## App Identification

* [ ] App name appears in all legal documents.

* [ ] App name exactly matches:

  * Google Play listing
  * README.md
  * Repository documentation
  * Legal documents

* [ ] No outdated app names remain.

Example:

App: [App Name]

---

## Acknowledgment Section

Terms of Service should include a final acknowledgment section.

* [ ] Acknowledgment section exists.
* [ ] References the Terms of Service.
* [ ] References the Privacy Policy.
* [ ] Includes parent/guardian acceptance language when the app targets children or families.

Recommended Format:

"By downloading, installing, or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and the Privacy Policy."

For child-directed or family apps:

"If you are a parent or guardian, you additionally agree to these Terms on behalf of the child using the App."

---

## Final Legal Review

* [ ] Terms contain an acknowledgment section.
* [ ] Privacy Policy and Terms reference each other where appropriate.
* [ ] App name is consistent throughout all documents.
* [ ] Developer information is consistent throughout all documents.
* [ ] Contact information is consistent throughout all documents.
