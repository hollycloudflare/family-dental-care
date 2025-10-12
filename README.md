# Family Dental Care - Landing Page

A professional, elegant landing page for a family dentist practice built with Next.js 14, TypeScript, and Tailwind CSS.

## 🦷 Features

- **Modern Design**: Clean, professional blue and white color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Appointment Form**: Integrated booking form with Resend email service
- **Services Showcase**: Comprehensive display of dental services with pricing
- **Patient Testimonials**: Build trust with real patient reviews
- **Interactive Map**: Google Maps integration for easy location finding
- **Sticky Navigation**: Easy access to all sections
- **Call-to-Action Bar**: Persistent bottom bar for quick appointment booking
- **Social Media Integration**: Links to Facebook, Instagram, and LinkedIn

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for email functionality)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "/Users/holly/Udemy/Udemy - Vibe Coding with Windsurf/Dentist Project"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=your_practice_email@example.com
   ```

   To get a Resend API key:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key in your dashboard
   - Add your verified domain or use the default onboarding email

4. **Move images to public folder**
   
   The images need to be in the `public` folder to be accessible:
   ```bash
   # Create public folder if it doesn't exist
   mkdir -p public
   
   # Copy images
   cp atikah-akhtar-XJptUS8nbhs-unsplash.jpg public/
   cp candid-WFsNCIn8OF4-unsplash.jpg public/
   cp caroline-lm--m-4tYmtLlI-unsplash.jpg public/
   cp caroline-lm-8BkF0sTC6Uo-unsplash.jpg public/
   cp Review/filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg public/
   cp Review/jonathan-borba-hl6uG9cHW5A-unsplash.jpg public/
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Dentist Project/
├── app/
│   ├── api/
│   │   └── send-appointment/
│   │       └── route.ts          # Resend API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── TopBar.tsx                # Top bar with contact info
│   ├── Navigation.tsx            # Main navigation menu
│   ├── HeroSection.tsx           # Hero with appointment form
│   ├── ServicesSection.tsx       # Services and pricing
│   ├── TestimonialsSection.tsx   # Patient testimonials
│   ├── ContactSection.tsx        # Contact info and map
│   ├── Footer.tsx                # Footer component
│   └── StickyBottomBar.tsx       # Bottom call-to-action bar
├── public/                       # Static assets (images)
├── .env.local                    # Environment variables (create this)
├── .env.example                  # Environment variables template
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── PRD.md                        # Product Requirements Document
└── README.md                     # This file
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#1E40AF',  // Main blue
    light: '#3B82F6',
    dark: '#1E3A8A',
  },
  // ... more colors
}
```

### Content

- **Practice Name**: Update in `components/Navigation.tsx` and `components/Footer.tsx`
- **Services**: Edit the `services` array in `components/ServicesSection.tsx`
- **Testimonials**: Update the `testimonials` array in `components/TestimonialsSection.tsx`
- **Contact Info**: Modify in `components/ContactSection.tsx` and `components/TopBar.tsx`

### Images

Replace the images in the `public` folder with your own. Maintain the same filenames or update the references in the components.

## 📧 Email Configuration

The appointment form uses Resend to send emails. Configure these environment variables:

- `RESEND_API_KEY`: Your Resend API key
- `RESEND_FROM_EMAIL`: The email address to send from (must be verified in Resend)
- `RESEND_TO_EMAIL`: The practice email address to receive appointment requests

The system sends two emails:
1. Notification to the practice with appointment details
2. Confirmation to the patient

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `RESEND_API_KEY`
     - `RESEND_FROM_EMAIL`
     - `RESEND_TO_EMAIL`
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

### Alternative Deployment Options

- **Netlify**: Similar process to Vercel
- **AWS Amplify**: Connect GitHub and deploy
- **Self-hosted**: Build with `npm run build` and serve the `.next` folder

## 🔧 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📱 Features Breakdown

### Top Bar
- Phone number with click-to-call
- Address display
- Social media links (Facebook, Instagram, LinkedIn)

### Navigation
- Sticky navigation that stays visible on scroll
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Logo/practice name

### Hero Section
- Eye-catching headline
- Trust indicators (years of experience, happy patients)
- Appointment booking form with validation
- Real-time form submission with loading states

### Services Section
- 8 dental services with icons
- Service descriptions
- Pricing information
- Call-to-action button

### Testimonials Section
- 4 patient testimonials
- Patient photos
- 5-star ratings
- Trust statistics

### Contact Section
- Full contact information
- Opening hours
- Emergency care information
- Interactive Google Maps

### Footer
- Quick links navigation
- Contact information
- Social media links
- Copyright information

### Sticky Bottom Bar
- Always visible call-to-action
- Click-to-call phone number
- Encourages appointment booking

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Resend**: Email delivery service
- **Lucide React**: Icon library
- **Google Maps**: Location integration

## 📊 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle
- Fast page loads (<3 seconds)

## 🔒 Security

- Environment variables for sensitive data
- HTTPS recommended for production
- Form validation on client and server
- No hardcoded credentials

## 📝 License

This project is private and proprietary.

## 🤝 Support

For questions or issues:
- Email: contact@familydentalcare.ro
- Phone: 0820.123.123

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Move images to public folder
4. ✅ Test locally
5. ⏳ Push to GitHub
6. ⏳ Deploy to Vercel
7. ⏳ Configure custom domain
8. ⏳ Test email functionality in production

---

**Built with ❤️ for Family Dental Care**
