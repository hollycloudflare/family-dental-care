# Cloudflare Pages Deployment Guide

## 🚀 Deploy Your Next.js Dental Website to Cloudflare Pages

---

## Step 1: Push to GitHub

### Option A: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if you haven't (Mac)
brew install gh

# Login to GitHub
gh auth login

# Create repository and push
gh repo create family-dental-care --public --source=. --remote=origin --push
```

### Option B: Manual GitHub Setup

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `family-dental-care`
   - Description: "Professional family dentist landing page"
   - Choose: **Public** or **Private**
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

2. **Push Your Code**
   ```bash
   # Add remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/family-dental-care.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy to Cloudflare Pages

### Prerequisites
- Cloudflare account (free at https://dash.cloudflare.com/sign-up)
- GitHub repository created (from Step 1)

### Deployment Steps

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Log in or create account

2. **Navigate to Pages**
   - Click "Workers & Pages" in left sidebar
   - Click "Create application"
   - Click "Pages" tab
   - Click "Connect to Git"

3. **Connect GitHub**
   - Click "Connect GitHub"
   - Authorize Cloudflare Pages
   - Select your repository: `family-dental-care`
   - Click "Begin setup"

4. **Configure Build Settings**
   
   **Project name**: `family-dental-care` (or your choice)
   
   **Production branch**: `main`
   
   **Framework preset**: `Next.js`
   
   **Build command**: 
   ```
   npm run build
   ```
   
   **Build output directory**: 
   ```
   .next
   ```
   
   **Root directory**: `/` (leave empty)

5. **Environment Variables**
   
   Click "Add variable" for each:
   
   | Variable Name | Value |
   |--------------|-------|
   | `RESEND_API_KEY` | `re_MnTMetkt_Bf4CSqPiQSruhLYMWSSNoGvS` |
   | `RESEND_FROM_EMAIL` | `onboarding@resend.dev` |
   | `RESEND_TO_EMAIL` | `holly@cloudflare.com` |
   | `NODE_VERSION` | `18` |

6. **Deploy**
   - Click "Save and Deploy"
   - Wait 2-5 minutes for build to complete
   - You'll get a URL like: `family-dental-care.pages.dev`

---

## Step 3: Configure Custom Domain (Optional)

### If you want to use hollycsup.xyz:

1. **In Cloudflare Pages Dashboard**
   - Go to your project
   - Click "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `dental.hollycsup.xyz` (or subdomain of your choice)
   - Click "Continue"

2. **DNS Configuration**
   - Cloudflare will automatically configure DNS if your domain is on Cloudflare
   - If not, add the CNAME record it provides

3. **SSL Certificate**
   - Cloudflare automatically provisions SSL
   - Your site will be HTTPS within minutes

---

## Important: Next.js Compatibility with Cloudflare Pages

### ⚠️ Current Limitations

Cloudflare Pages has **limited support** for Next.js features:

**✅ Supported:**
- Static pages
- Client-side rendering
- API routes (with limitations)
- Image optimization (basic)

**❌ Not Fully Supported:**
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Some Next.js middleware features

### 🔧 Solution: Use Vercel Instead (Recommended)

Since your site uses Next.js 14 with App Router and API routes, **Vercel is the better choice**:

**Why Vercel?**
- ✅ Built by Next.js creators
- ✅ Full Next.js support
- ✅ Automatic deployments
- ✅ Free tier (generous)
- ✅ Edge functions
- ✅ Perfect for your use case

---

## Alternative: Deploy to Vercel (Recommended)

### Quick Vercel Deployment

1. **Go to Vercel**
   - Visit: https://vercel.com/signup
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select `family-dental-care` repository
   - Click "Import"

3. **Configure**
   - Framework: Next.js (auto-detected)
   - Build command: `next build` (auto-filled)
   - Output directory: `.next` (auto-filled)

4. **Environment Variables**
   Add these three variables:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get URL: `family-dental-care.vercel.app`

6. **Custom Domain**
   - Go to Project Settings → Domains
   - Add: `dental.hollycsup.xyz`
   - Update DNS (CNAME to `cname.vercel-dns.com`)

---

## Comparison: Cloudflare Pages vs Vercel

| Feature | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| Next.js Support | Limited | Full ✅ |
| API Routes | Basic | Full ✅ |
| SSR | No | Yes ✅ |
| Free Tier | Unlimited | Generous ✅ |
| Custom Domain | Yes | Yes |
| Build Time | Fast | Fast |
| **Recommendation** | ⚠️ Limited | ✅ **Best Choice** |

---

## My Recommendation

### For Your Dental Website:

**Use Vercel** because:
1. ✅ Your site uses Next.js API routes (for form submission)
2. ✅ Full Next.js 14 support
3. ✅ Better for your use case
4. ✅ Easier setup
5. ✅ Free tier is perfect for your needs

**Use Cloudflare Pages** only if:
- You convert to a fully static site
- You remove API routes
- You don't need SSR features

---

## Quick Deploy Commands

### For Vercel (Recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: family-dental-care
# - Directory: ./
# - Override settings? No

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add RESEND_TO_EMAIL

# Deploy to production
vercel --prod
```

### For Cloudflare Pages:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npx @cloudflare/next-on-pages@1

# Note: This may have compatibility issues with your current setup
```

---

## Post-Deployment Checklist

After deploying to either platform:

- [ ] Website loads correctly
- [ ] All images display
- [ ] Navigation works
- [ ] Form submission works
- [ ] Emails are received
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Test on multiple devices

---

## Troubleshooting

### Build Fails on Cloudflare Pages

**Error**: "API routes not supported"
**Solution**: Use Vercel instead or convert to static site

### Environment Variables Not Working

**Solution**: 
1. Check spelling matches exactly
2. Redeploy after adding variables
3. Check they're set for "Production" environment

### Images Not Loading

**Solution**:
1. Verify images are in `public/` folder
2. Check paths start with `/`
3. Clear cache and redeploy

### Form Not Sending Emails

**Solution**:
1. Verify Resend API key is correct
2. Check environment variables are set
3. Test Resend API key in Resend dashboard
4. Check email quota (100/day free tier)

---

## Support Resources

**Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Cloudflare Pages:**
- Docs: https://developers.cloudflare.com/pages
- Community: https://community.cloudflare.com

**Next.js:**
- Docs: https://nextjs.org/docs
- Deployment: https://nextjs.org/docs/deployment

---

## Final Recommendation

🎯 **Deploy to Vercel** for the best experience with your Next.js dental website!

It's specifically designed for Next.js and will work perfectly with all your features including the appointment form and email integration.

---

**Need help?** Check the DEPLOYMENT.md file for more detailed Vercel instructions!
