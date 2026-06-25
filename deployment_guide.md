# Deployment Guide for Suhani Industries Next.js

This guide explains how to deploy your Next.js project to **GitHub Pages** (using automatic GitHub Actions) or **Vercel** for a live, public view of your website.

---

## 🛠️ What We Already Set Up For You

To make deployment seamless, we completed the following steps:
1. **Configured Git**: Moved the `.git` files from the cloned subfolder `Shuhani_Industries_Next_js` into the main project directory. This links your actual code directly to your GitHub repository: [https://github.com/Go-Online-Studio/Shuhani_Industries_Next_js](https://github.com/Go-Online-Studio/Shuhani_Industries_Next_js).
2. **Updated Configs**: Updated [next.config.ts](file:///c:/Users/Admin/Desktop/Suhani%20Industries%20Next.js/next.config.ts) to dynamically set the `basePath` to `/Shuhani_Industries_Next_js` only when building on GitHub Actions. This keeps your local development URL clean while ensuring images and links resolve correctly on GitHub Pages.
3. **Created CI/CD Pipeline**: Added a GitHub Actions workflow file at [.github/workflows/deploy.yml](file:///c:/Users/Admin/Desktop/Suhani%20Industries%20Next.js/.github/workflows/deploy.yml) that will automatically build and publish your Next.js static site to GitHub Pages whenever you push code.

---

## 🚀 Option 1: Deploying to GitHub Pages (Recommended)

GitHub Pages hosts your website statically at `https://go-online-studio.github.io/Shuhani_Industries_Next_js/`.

### Step 1: Push the Code to GitHub

Open a terminal in the root project folder (`c:\Users\Admin\Desktop\Suhani Industries Next.js`) and run these Git commands:

```bash
# Add all files to staging
git add .

# Create a commit
git commit -m "Configure automatic GitHub Pages deployment"

# Push to the main branch on GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages via GitHub Actions

1. Go to your GitHub Repository: [https://github.com/Go-Online-Studio/Shuhani_Industries_Next_js](https://github.com/Go-Online-Studio/Shuhani_Industries_Next_js)
2. Click on the ⚙️ **Settings** tab.
3. In the left-hand sidebar, scroll down to the **Code and automation** section and click **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu (instead of "Deploy from a branch").
5. Once selected, GitHub will automatically trigger the deployment workflow we created.

### Step 3: Monitor and View the Site

1. Click on the **Actions** tab at the top of your GitHub repository.
2. You will see a workflow run named `Deploy Next.js site to Pages` starting.
3. Once the workflow turns green (completed), click on the build logs to find your live URL, which will look like:
   👉 **`https://go-online-studio.github.io/Shuhani_Industries_Next_js/`**

---

## ⚡ Option 2: Deploying to Vercel (Alternative)

If you prefer a clean root URL without subpaths (e.g., `https://shuhani-industries-next-js.vercel.app`), Vercel is the official Next.js cloud hosting provider and is completely free.

### Step 1: Push Code to GitHub
Ensure your latest local changes are pushed to GitHub (same as Step 1 above).

### Step 2: Import to Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign up or log in using your GitHub account.
2. Click the **Add New...** button and select **Project**.
3. Under **Import Git Repository**, locate `Shuhani_Industries_Next_js` and click **Import**.
4. Vercel will auto-detect Next.js. Leave all settings at their defaults and click **Deploy**.
5. Within 1 minute, your site will be live at a custom `.vercel.app` domain!
