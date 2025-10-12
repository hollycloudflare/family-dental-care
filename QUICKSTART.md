# Quick Start Guide - Family Dental Care Website

Get your website running in 5 minutes! 🚀

## Step 1: Install Dependencies (2 minutes)

Open your terminal and run:

```bash
cd "/Users/holly/Udemy/Udemy - Vibe Coding with Windsurf/Dentist Project"
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Resend, etc.)

## Step 2: Set Up Environment Variables (1 minute)

Create a file named `.env.local` in the project root:

```bash
# Create the file
touch .env.local
```

Add these lines to `.env.local`:

```env
RESEND_API_KEY=re_123456789_your_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your_email@example.com
```

**Note**: Replace `your_email@example.com` with the email where you want to receive appointment requests.

For now, you can use placeholder values to test the website. Get a real Resend API key later from [resend.com](https://resend.com) (free account).

## Step 3: Start Development Server (30 seconds)

```bash
npm run dev
```

You should see:

```
✓ Ready in 2.5s
○ Local:        http://localhost:3000
```

## Step 4: Open in Browser (30 seconds)

Open your browser and go to:

**http://localhost:3000**

You should see your beautiful dental website! 🦷

## Step 5: Test the Website (1 minute)

### Check These Features:

- ✅ **Top Bar**: Shows phone number, address, and social media icons
- ✅ **Navigation**: Click menu items to scroll to sections
- ✅ **Hero Section**: See the appointment form
- ✅ **Services**: View 8 dental services with prices
- ✅ **Testimonials**: See patient reviews with photos
- ✅ **Contact**: Interactive Google Map
- ✅ **Sticky Bottom Bar**: Always visible at the bottom
- ✅ **Mobile Responsive**: Resize browser to test mobile view

### Test the Form:

1. Scroll to the top (Hero section)
2. Fill out the appointment form:
   - Name: Test Patient
   - Phone: 0720 123 456
   - Email: test@example.com
   - Message: Test appointment
3. Click "Send Request"

**Note**: The form won't actually send emails until you add a real Resend API key.

## 🎨 Quick Customization

### Change Practice Name

Edit `components/Navigation.tsx` (line 44):

```tsx
Family Dental Care  // Change this to your practice name
```

Also update in `components/Footer.tsx` (line 32)

### Change Phone Number

Find and replace `0820.123.123` with your actual phone number in:
- `components/TopBar.tsx`
- `components/StickyBottomBar.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`

### Change Address

Find and replace the address in:
- `components/TopBar.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`

### Update Services & Prices

Edit `components/ServicesSection.tsx` - modify the `services` array (starting at line 5)

### Update Testimonials

Edit `components/TestimonialsSection.tsx` - modify the `testimonials` array (starting at line 5)

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Images Not Loading

Make sure all images are in the `public` folder:

```bash
ls -la public/
```

You should see:
- atikah-akhtar-XJptUS8nbhs-unsplash.jpg
- candid-WFsNCIn8OF4-unsplash.jpg
- caroline-lm--m-4tYmtLlI-unsplash.jpg
- caroline-lm-8BkF0sTC6Uo-unsplash.jpg
- filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg
- jonathan-borba-hl6uG9cHW5A-unsplash.jpg

### Module Not Found Error

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Restart the dev server
# Press Ctrl+C to stop, then:
npm run dev
```

## 📱 Test on Mobile

### Option 1: Responsive Mode in Browser

1. Open Chrome DevTools (F12)
2. Click the device toggle icon (Ctrl+Shift+M)
3. Select different devices (iPhone, iPad, etc.)

### Option 2: Test on Your Phone

1. Find your computer's IP address:
   ```bash
   # On Mac:
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # On Windows:
   ipconfig
   ```

2. On your phone's browser, go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

3. Make sure your phone and computer are on the same WiFi network

## ✅ Next Steps

Once you're happy with the local version:

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Update `.env.local` with the real key

2. **Test Email Functionality**
   - Fill out the form
   - Check your email
   - Verify both emails arrive (to practice and to patient)

3. **Deploy to Production**
   - Follow the `DEPLOYMENT.md` guide
   - Push to GitHub
   - Deploy to Vercel

4. **Customize Content**
   - Update all placeholder text
   - Replace with your actual services and prices
   - Add real patient testimonials
   - Update social media links

## 🎯 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint
```

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Product Requirements**: See `PRD.md`

## 💡 Tips

1. **Save Often**: Changes auto-reload in development mode
2. **Check Console**: Open browser console (F12) for errors
3. **Test Forms**: Always test form submission before deploying
4. **Mobile First**: Always check mobile view
5. **Performance**: Keep images optimized (use WebP format if possible)

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment issues
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**You're all set! Happy coding! 🎉**

Your website is ready to customize and deploy. Make it your own!
