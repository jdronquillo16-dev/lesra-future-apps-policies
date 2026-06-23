# LESRA Future Apps &mdash; App Compliance & Policy Checklist

Use this checklist whenever onboarding a new app or reviewing existing legal documents to ensure full compliance with Google Play Store policies, COPPA, GDPR, and LESRA developer standards.

---

## 📋 Pre-Onboarding App Profile
Before editing any policy files, answer these questions about the new app:
1. **Target Audience:** Is this app directed at children (under 13), a general audience, or adults only?
2. **Monetization:** Does it show ads? (If yes, we use Google AdMob). Does it offer premium upgrades/subscriptions? (If yes, we use Google Play Billing).
3. **Data Collection:** Does it require user sign-in/accounts? Does it collect any personal info (email, name, location)? Or is all data stored locally on-device?

---

## 🛠️ Checklist 1 — Privacy Policy (`privacy-policy.html`)

### 1. Header & Metadata
* [ ] **Exact Header Format:** Matches the standard 4-line opening block exactly:
  - Line 1: `Privacy Policy`
  - Line 2: `[App Emoji] [App Name]`
  - Line 3: `by LESRA Future Apps`
  - Line 4: `Last Updated: [Month DD, YYYY] | Effective Date: [Month DD, YYYY]`
* [ ] **Back Link:** Includes `<a href="../index.html" class="back-button">&#8592; Back to Legal Documents</a>` right below the header.
* [ ] **CSS Styling:** Embedded `<style>` block matches standard dark blue header gradient (`#0B1428` to `#1A2A44`) and clean modern layout.

### 2. Advertising Disclosures (AdMob) &mdash; *Mandatory for 99% of apps*
* [ ] **Automatic Collection:** Discloses that non-personalized advertising data is collected by Google AdMob under **Section 2.1 (Information Collected Automatically)**.
* [ ] **Third-Party Disclosures:** Google AdMob is listed as a service provider under **Section 4 (Sharing and Disclosure)**.
* [ ] **Quick Summary:** Summary section explicitly mentions using Google AdMob for ads.

### 3. Subscription & Payments (Google Play Billing)
* [ ] **Receipt Verification:** If premium billing is planned, Section 2 discloses purchase receipt processing via Google Play Billing.
* [ ] **Third-Party Payments:** Google Play Billing is listed as a service provider under Section 4.
* [ ] **Summary Box:** Quick Summary mentions optional premium subscriptions.

### 4. Children's Privacy (COPPA & GDPR-K Compliance)
* [ ] **Child-Directed Settings:** If the app targets children or is family-friendly:
  - Discloses child-directed settings are active for AdMob (no personalized ads served to children).
  - Explicitly states we do not knowingly collect personal information from children under 13.
  - Mentions the presence of an **age gate** on first launch if the app serves mixed audiences.
  - States that core functionality does not require account creation.

### 5. Data Subject Rights & Contact Details
* [ ] **GDPR Rights:** Includes Section 6 (Your Rights and Choices) detailing the rights of users (Access, Rectification, Deletion, Erasure, Data Portability).
* [ ] **Correct Contact Emails:** 
  - Developer Email: `jdronquillo16@gmail.com`
  - Support/Privacy Email: `jdronquillo46@gmail.com`

---

## ⚖️ Checklist 2 — Terms of Service (`terms-of-service.html`)

### 1. Header & Metadata
* [ ] **Exact Header Format:** Matches the standard 4-line opening block exactly:
  - Line 1: `Terms of Service`
  - Line 2: `[App Emoji] [App Name]`
  - ... (rest of metadata)
* [ ] **Back Link:** Includes back link button matching the standard styling.

### 2. Licenses & Prohibitions
* [ ] **Use License:** Grants a limited, non-exclusive, revocable license for personal, non-commercial use on Android.
* [ ] **Premium Term:** If subscription-enabled, license includes terms for purchasing premium features through Google Play Billing.
* [ ] **Prohibition of Circumvention:** Explicitly prohibits trying to bypass subscription or billing verification.

### 3. Legal Disclaimers (Strictly Enforced)
* [ ] **As-Is Warranty Disclaimer:** Includes a prominent `warning-box` styled container highlighting that the App is provided "AS IS" and "AS AVAILABLE".
* [ ] **Limitation of Liability:** Includes a prominent `warning-box` styled container capping liability at a maximum of $100.00.

---

## 🚀 Checklist 3 — Repository Integration

* [ ] **Main Index (`index.html`):**
  - Section added right before `</main>` and after the last existing `<section class="app-section">`.
  - Class name is `<section class="app-section">`.
  - Header has class `class="app-title"` and includes the correct app emoji.
  - Features a clear one-line description of the app.
  - Links to both `[foldername]/privacy-policy.html` and `[foldername]/terms-of-service.html`.
* [ ] **Readme Document (`README.md`):**
  - App name added to the lists under `## Apps`.
* [ ] **Store Listing / AdMob verification (`app-ads.txt`):**
  - Ensure the developer domain registration matches your AdMob setup.
