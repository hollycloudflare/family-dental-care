# Deployment Guide - Family Dental Care Website

This guide will walk you through deploying your Family Dental Care website to production using GitHub and Vercel.

## 📋 Pre-Deployment Checklist

- [ ] All images are in the `public` folder
- [ ] Dependencies are installed (`npm install`)
- [ ] Website tested locally (`npm run dev`)
- [ ] Environment variables configured
- [ ] Resend API key obtained
- [ ] Content reviewed and finalized

## 🔑 Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Verify your email address
3. In the Resend dashboard, click "API Keys"
4. Click "Create API Key"
5. Give it a name (e.g., "Family Dental Care Production")
6. Copy the API key (you'll need this for Vercel)

**Note**: The free tier includes 100 emails/day, which should be sufficient for a dental practice website.

## 📝 Step 2: Create Environment Variables File

Create a `.env.local` file in the project root with:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your_practice_email@example.com
```

**Important**: Never commit `.env.local` to GitHub (it's already in `.gitignore`)

## 🐙 Step 3: Push to GitHub

### Initialize Git Repository

```bash
cd "/Users/holly/Udemy/Udemy - Vibe Coding with Windsurf/Dentist Project"

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Family Dental Care landing page"
```

### Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `family-dental-care-website`
5. Keep it **Private** (recommended)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/family-dental-care-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🚀 Step 4: Deploy to Vercel

### Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Import Project

1. Click "Add New..." → "Project"
2. Find your `family-dental-care-website` repository
3. Click "Import"

### Configure Project

1. **Framework Preset**: Next.js (should be auto-detected)
2. **Root Directory**: `./` (leave as default)
3. **Build Command**: `next build` (default)
4. **Output Directory**: `.next` (default)

### Add Environment Variables

Click "Environment Variables" and add:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | Your Resend API key (from Step 1) |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` |
| `RESEND_TO_EMAIL` | Your practice email address |

**Important**: Make sure to add these for all environments (Production, Preview, Development)

### Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. You'll see a success message with your deployment URL

## 🌐 Step 5: Configure Custom Domain (Optional)

### Add Domain in Vercel

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `familydentalcare.ro`)
4. Click "Add"

### Update DNS Records

Vercel will provide DNS records. Add these to your domain registrar:

**For root domain (familydentalcare.ro):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Note**: DNS changes can take 24-48 hours to propagate.

## ✅ Step 6: Test Production Deployment

### Test the Website

1. Visit your Vercel URL (e.g., `family-dental-care-website.vercel.app`)
2. Check all sections load correctly
3. Test the appointment form
4. Verify images display properly
5. Test on mobile devices

### Test Email Functionality

1. Fill out the appointment form
2. Submit the form
3. Check that you receive the email at `RESEND_TO_EMAIL`
4. Check that the patient receives a confirmation email

### Test Navigation

- [ ] All menu items scroll to correct sections
- [ ] Sticky bottom bar is visible
- [ ] Phone numbers are clickable
- [ ] Social media links work
- [ ] Map loads correctly

## 🔄 Step 7: Making Updates

### Update Content

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. Vercel automatically deploys the changes

### Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

## 🛡️ Security Best Practices

### Protect Sensitive Data

- ✅ Never commit `.env.local` to GitHub
- ✅ Use environment variables for API keys
- ✅ Keep your Resend API key secret
- ✅ Use HTTPS (Vercel provides this automatically)

### Monitor Email Usage

1. Check Resend dashboard regularly
2. Monitor for spam submissions
3. Consider adding CAPTCHA if needed

## 📊 Analytics (Optional)

### Add Vercel Analytics

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Click "Enable Analytics"
4. Free tier includes basic metrics

### Add Google Analytics

1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`:
   ```tsx
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
   ```

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Solution**: Run `npm install` and commit `package-lock.json`

**Error**: "Environment variable missing"
- **Solution**: Add environment variables in Vercel settings

### Email Not Sending

**Problem**: Form submits but no email received
- Check Resend API key is correct
- Verify `RESEND_TO_EMAIL` is correct
- Check Resend dashboard for error logs
- Ensure you haven't exceeded free tier limits

### Images Not Loading

**Problem**: Images show broken
- Verify images are in `public` folder
- Check image paths start with `/` (e.g., `/image.jpg`)
- Clear browser cache

### Map Not Loading

**Problem**: Google Maps shows error
- Check internet connection
- Verify map embed URL is correct
- Try different browser

## 📞 Support Resources

### Vercel
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)

### Resend
- Documentation: [resend.com/docs](https://resend.com/docs)
- Support: support@resend.com

### Next.js
- Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

## 🎉 Post-Deployment

### Share Your Website

Once deployed, share your website:
- Update social media profiles with the URL
- Add to Google My Business
- Update business cards and marketing materials
- Submit to search engines

### Monitor Performance

- Check Vercel Analytics weekly
- Monitor email submissions
- Track appointment conversions
- Gather patient feedback

### Regular Maintenance

- Update content quarterly
- Check for broken links monthly
- Review and respond to form submissions daily
- Keep dependencies updated

## 📈 Next Steps

After successful deployment:

1. **SEO Optimization**
   - Add meta descriptions
   - Submit sitemap to Google
   - Set up Google Search Console

2. **Performance Monitoring**
   - Set up uptime monitoring
   - Track page load speeds
   - Monitor Core Web Vitals

3. **Marketing**
   - Set up Google Ads
   - Create social media campaigns
   - Email marketing integration

4. **Features to Add**
   - Online appointment scheduling
   - Patient portal
   - Blog section
   - Live chat support

---

**Congratulations! Your Family Dental Care website is now live! 🎊**

For questions or issues, refer to the README.md or contact your developer.
