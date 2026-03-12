# GitHub Pages Deployment Guide for ToolNova

## Pre-deployment Checklist

- [ ] All tools are working correctly
- [ ] Links are not broken (test all navigation)
- [ ] Responsive design verified on mobile
- [ ] Color scheme is consistent
- [ ] No console errors (F12 to check)

## Step 1: Prepare Your GitHub Repository

### Option A: Create New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and log in
2. Click "+" → "New repository"
3. Name it: `toolnova` (or any name you prefer)
4. Add description: "Free online tools running in the browser"
5. Choose "Public" (required for free GitHub Pages)
6. Check "Add a README file" (optional, will overwrite ours)
7. Click "Create repository"

### Option B: Using Existing Repository

Just skip to Step 2 with your existing repo

## Step 2: Upload Project Files

### Method A: Using GitHub Web Interface

1. Click "Upload files" button in your repository
2. Drag and drop all ToolNova files (or click "choose your files")
3. Select all files from your toolnova folder
4. Add commit message: "Initial commit: Add ToolNova"
5. Click "Commit changes"

### Method B: Using Git Command Line

```bash
# Navigate to ToolNova directory
cd /path/to/toolnova

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Add ToolNova - Free Online Tools"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/toolnova.git

# Rename branch to main (if using older git)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Method C: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository → Select toolnova folder
3. "Create a Repository" (fill in details)
4. Check "Publish this repository"
5. Ensure it's Public, then "Publish"

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Scroll to "Pages" section in left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)` or `/docs` (depending on your setup)
5. Click "Save"
6. Wait 1-2 minutes for deployment

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/toolnova
```

## Step 4: Verify Deployment

1. Visit your GitHub Pages URL (from above)
2. Test each tool to ensure they work
3. Check the console for any errors (F12)
4. Test on mobile devices
5. Share your link! 🎉

## Troubleshooting

### Site not appearing

- Wait a few minutes after pushing
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Pages settings are enabled
- Ensure repository is public
- Check Actions tab for any errors

### Tools not working

- Verify all files were uploaded correctly
- Check file paths are correct in HTML files
- Ensure CSS and JS files are linked properly
- Check browser console (F12) for errors

### Wrong file structure

Make sure files are in the root directory:
```
/index.html
/css/style.css
/js/script.js
/tools/password-generator.html
/tools/word-counter.html
/etc...
```

## Update Your Site

To make changes after deployment:

```bash
# Make your changes locally
# Edit files as needed

# Commit and push to GitHub
git add .
git commit -m "Update: [describe changes]"
git push
```

Changes usually appear within seconds to a couple minutes.

## Custom Domain (Optional)

To use your own domain:

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Click "Save"
4. GitHub will show you DNS configuration steps
5. Update your domain's DNS records accordingly
6. Wait for DNS to propagate (can take 24 hours)

## Performance Tips

1. **Minify CSS and JS** (optional, for production)
2. **Enable gzip compression** (GitHub does this automatically)
3. **Use CDN for external resources** (already done for QRCode.js)
4. **Cache busting** if updating frequently:
   - Add `?v=2` to CSS and JS link: `<link rel="stylesheet" href="css/style.css?v=2">`

## Keep Your Repository Updated

```bash
# Pull latest changes
git pull

# Make updates
# ...

# Push changes
git add .
git commit -m "Description of changes"
git push
```

## Privacy Settings

Since this is a public repository:
- Anyone can see your code ✓
- Anyone can fork your project ✓
- You can make it private (requires GitHub Pro for Pages)

## Free Resources

- **Hosting**: GitHub Pages (free)
- **Domain**: Free `.github.io` subdomain (or use custom domain)
- **CDN**: GitHub Pages uses Fastly (included)
- **Uptime**: 99.9% SLA by GitHub

## Monetization Ideas

Once live, you could:
- Add voluntary "Buy me a coffee" link
- Create a patreon page
- Offer premium versions (with localStorage sync, etc.)
- Create browser extension version

## Version Control Best Practices

```bash
# Before making changes, create a branch
git checkout -b feature/new-tool

# Make changes
# ...

# Commit with clear messages
git commit -m "Add: New color picker tool"

# Push branch
git push -u origin feature/new-tool

# Create Pull Request on GitHub
# (for larger projects)
```

## Advanced: GitHub Actions

You can automate builds with GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Pages
        uses: actions/upload-artifact@v2
```

## Support & Resources

- [GitHub Pages Documentation](https://pages.github.com)
- [How to Use GitHub](https://guides.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

**You're ready to deploy! 🚀**

Once live, share your ToolNova with the world!
