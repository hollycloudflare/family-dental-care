# Project Structure - Family Dental Care Website

## 📁 Complete File Structure

```
Dentist Project/
│
├── 📄 Configuration Files
│   ├── package.json                    # Dependencies and scripts
│   ├── tsconfig.json                   # TypeScript configuration
│   ├── tailwind.config.ts              # Tailwind CSS settings
│   ├── postcss.config.js               # PostCSS configuration
│   ├── next.config.js                  # Next.js configuration
│   ├── .gitignore                      # Git ignore rules
│   ├── .env.example                    # Environment variables template
│   └── .env.local                      # Your environment variables (create this)
│
├── 📱 App Directory (Next.js 14 App Router)
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Main landing page
│   ├── globals.css                     # Global styles + Tailwind
│   │
│   └── api/                            # API Routes
│       └── send-appointment/
│           └── route.ts                # Form submission endpoint
│
├── 🧩 Components Directory
│   ├── TopBar.tsx                      # Top contact bar
│   ├── Navigation.tsx                  # Main navigation menu
│   ├── HeroSection.tsx                 # Hero + appointment form
│   ├── ServicesSection.tsx             # Services showcase
│   ├── TestimonialsSection.tsx         # Patient testimonials
│   ├── ContactSection.tsx              # Contact info + map
│   ├── Footer.tsx                      # Footer section
│   └── StickyBottomBar.tsx             # Bottom CTA bar
│
├── 🖼️ Public Directory (Static Assets)
│   ├── atikah-akhtar-XJptUS8nbhs-unsplash.jpg
│   ├── candid-WFsNCIn8OF4-unsplash.jpg
│   ├── caroline-lm--m-4tYmtLlI-unsplash.jpg
│   ├── caroline-lm-8BkF0sTC6Uo-unsplash.jpg
│   ├── filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg
│   └── jonathan-borba-hl6uG9cHW5A-unsplash.jpg
│
└── 📚 Documentation
    ├── README.md                       # Main documentation
    ├── PRD.md                          # Product requirements
    ├── DEPLOYMENT.md                   # Deployment guide
    ├── QUICKSTART.md                   # Quick start guide
    ├── CHECKLIST.md                    # Pre-launch checklist
    ├── GETTING_STARTED.md              # Simple setup guide
    ├── PROJECT_SUMMARY.md              # Project overview
    └── PROJECT_STRUCTURE.md            # This file
```

---

## 🗂️ Directory Breakdown

### `/app` - Application Core
The heart of your Next.js application using the App Router.

**layout.tsx**
- Root layout component
- Includes metadata (title, description)
- Wraps all pages
- Imports global CSS

**page.tsx**
- Main landing page
- Imports and renders all components
- Single-page application structure

**globals.css**
- Tailwind CSS imports
- Global styles
- Custom CSS utilities

**api/send-appointment/route.ts**
- API endpoint for form submission
- Handles POST requests
- Integrates with Resend
- Sends two emails (to practice and patient)

### `/components` - React Components
Reusable UI components that make up the website.

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **TopBar** | Top contact bar | Phone, address, social media |
| **Navigation** | Main menu | Smooth scroll, mobile menu, sticky |
| **HeroSection** | Hero + form | Appointment form, validation |
| **ServicesSection** | Services list | 8 services with pricing |
| **TestimonialsSection** | Reviews | Patient testimonials with photos |
| **ContactSection** | Contact info | Address, hours, Google Maps |
| **Footer** | Footer | Links, contact, copyright |
| **StickyBottomBar** | Bottom CTA | Always visible, phone number |

### `/public` - Static Assets
Images and static files accessible from the root URL.

**Images** (6 total)
- 4 dental/clinic images for hero and backgrounds
- 2 patient/testimonial images

**Access in code**: `/image-name.jpg`

### Configuration Files

**package.json**
- Lists all dependencies
- Defines npm scripts (dev, build, start)
- Project metadata

**tsconfig.json**
- TypeScript compiler options
- Path aliases (@/ for root)
- Strict type checking

**tailwind.config.ts**
- Custom color scheme (blue/white)
- Breakpoints
- Theme extensions

**next.config.js**
- Next.js settings
- Image optimization
- Remote image patterns

**.gitignore**
- Excludes node_modules
- Excludes .env files
- Excludes build files

**.env.example**
- Template for environment variables
- Shows required variables
- Safe to commit to Git

**.env.local** (you create this)
- Your actual environment variables
- Contains API keys
- Never commit to Git

---

## 🔄 Data Flow

### Page Load Flow
```
User visits website
    ↓
app/layout.tsx (loads metadata, global styles)
    ↓
app/page.tsx (main page)
    ↓
Renders components in order:
    1. TopBar
    2. Navigation
    3. HeroSection
    4. ServicesSection
    5. TestimonialsSection
    6. ContactSection
    7. Footer
    8. StickyBottomBar
```

### Form Submission Flow
```
User fills form in HeroSection
    ↓
User clicks "Send Request"
    ↓
Form validation (client-side)
    ↓
POST request to /api/send-appointment
    ↓
API route processes request
    ↓
Resend API sends emails:
    - Email to practice (appointment details)
    - Email to patient (confirmation)
    ↓
Success/error response
    ↓
User sees success/error message
```

### Navigation Flow
```
User clicks menu item
    ↓
JavaScript scrolls to section ID
    ↓
Smooth scroll animation
    ↓
Section comes into view
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",              // UI library
  "react-dom": "^18.3.1",          // React DOM renderer
  "next": "^14.2.0",               // React framework
  "resend": "^3.2.0",              // Email service
  "lucide-react": "^0.344.0",      // Icon library
  "react-hook-form": "^7.51.0"     // Form handling
}
```

### Development Dependencies
```json
{
  "typescript": "^5.3.0",          // TypeScript compiler
  "tailwindcss": "^3.4.0",         // CSS framework
  "@types/react": "^18.2.0",       // React types
  "@types/node": "^20.11.0",       // Node types
  "eslint": "^8.56.0",             // Code linting
  "postcss": "^8.4.0",             // CSS processing
  "autoprefixer": "^10.4.0"        // CSS vendor prefixes
}
```

---

## 🎨 Component Architecture

### Component Hierarchy
```
page.tsx
├── TopBar
├── Navigation
├── HeroSection
│   └── Appointment Form
├── ServicesSection
│   └── Service Cards (x8)
├── TestimonialsSection
│   └── Testimonial Cards (x4)
├── ContactSection
│   ├── Contact Info
│   └── Google Maps
├── Footer
│   ├── About
│   ├── Quick Links
│   ├── Services List
│   └── Contact Info
└── StickyBottomBar
```

### Component Types

**Layout Components**
- TopBar
- Navigation
- Footer
- StickyBottomBar

**Content Components**
- HeroSection
- ServicesSection
- TestimonialsSection
- ContactSection

**Interactive Components**
- Navigation (smooth scroll, mobile menu)
- HeroSection (form with validation)
- StickyBottomBar (click-to-call)

---

## 🎯 Key Files to Customize

### Before Launch - Must Update

1. **components/Navigation.tsx** (Line 44)
   - Change practice name

2. **components/TopBar.tsx** (Lines 10-15)
   - Update phone number
   - Update address
   - Update social media links

3. **components/StickyBottomBar.tsx** (Line 14)
   - Update phone number

4. **components/ContactSection.tsx** (Lines 30-50)
   - Update address
   - Update phone number
   - Update email
   - Update opening hours

5. **components/ServicesSection.tsx** (Lines 5-60)
   - Update services list
   - Update prices

6. **components/TestimonialsSection.tsx** (Lines 5-40)
   - Update testimonials
   - Update patient names

7. **.env.local**
   - Add real Resend API key
   - Add practice email

### Optional Customization

8. **tailwind.config.ts**
   - Change color scheme

9. **app/layout.tsx**
   - Update metadata (title, description)

10. **components/Footer.tsx**
    - Update copyright year
    - Update links

---

## 🔐 Environment Variables

### Required Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `RESEND_API_KEY` | Resend API authentication | `re_123abc...` |
| `RESEND_FROM_EMAIL` | Sender email address | `onboarding@resend.dev` |
| `RESEND_TO_EMAIL` | Practice email (receives appointments) | `practice@example.com` |

### Where to Set

**Development** (local)
- File: `.env.local`
- Location: Project root
- Not committed to Git

**Production** (Vercel)
- Vercel dashboard
- Project Settings → Environment Variables
- Set for all environments

---

## 🚀 Build Output

### Development Build
```bash
npm run dev
```
- Fast refresh enabled
- Source maps included
- Detailed error messages
- Runs on http://localhost:3000

### Production Build
```bash
npm run build
```
Creates:
- `.next/` folder with optimized files
- Static HTML pages
- Optimized JavaScript bundles
- Optimized CSS
- Compressed images

### Production Server
```bash
npm start
```
- Serves production build
- Optimized performance
- No hot reload

---

## 📊 File Sizes (Approximate)

| Category | Files | Total Size |
|----------|-------|------------|
| Components | 8 | ~35 KB |
| App files | 4 | ~10 KB |
| Config files | 7 | ~5 KB |
| Images | 6 | ~11 MB |
| Documentation | 8 | ~60 KB |
| **Total** | **33** | **~11.1 MB** |

After `npm install`:
- node_modules: ~400 MB
- Total project: ~411 MB

After `npm run build`:
- .next folder: ~50 MB
- Total with build: ~461 MB

---

## 🔍 Finding Things

### Need to change phone number?
Search for: `0820.123.123`

### Need to change address?
Search for: `Strada Maria Rosetti`

### Need to change practice name?
Search for: `Family Dental Care`

### Need to change colors?
File: `tailwind.config.ts`

### Need to change services?
File: `components/ServicesSection.tsx`

### Need to change testimonials?
File: `components/TestimonialsSection.tsx`

---

## 📝 Notes

- All components are TypeScript (.tsx)
- All components use 'use client' directive (client components)
- Images are in public folder (accessible via /)
- API route uses Next.js 14 route handlers
- Styling uses Tailwind CSS utility classes
- Icons from Lucide React library
- Form uses controlled components (React state)

---

## 🎓 Learning Resources

**Next.js 14**
- Docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app

**Tailwind CSS**
- Docs: https://tailwindcss.com/docs
- Cheatsheet: https://nerdcave.com/tailwind-cheat-sheet

**TypeScript**
- Docs: https://www.typescriptlang.org/docs
- React + TS: https://react-typescript-cheatsheet.netlify.app

**Resend**
- Docs: https://resend.com/docs
- API Reference: https://resend.com/docs/api-reference

---

**This structure is designed for easy navigation and maintenance. Everything has its place! 🎯**
