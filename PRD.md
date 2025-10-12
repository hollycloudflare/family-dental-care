# Product Requirements Document (PRD)
## Family Dentist Landing Page

**Project Name:** Family Dentist Landing Page  
**Version:** 1.0  
**Date:** October 12, 2025  
**Status:** In Development

---

## 1. Project Overview

### 1.1 Objective
Create a professional, elegant landing page for a family dentist practice using Next.js and Tailwind CSS. The website should showcase services, pricing, and facilitate appointment bookings.

### 1.2 Target Audience
- Families seeking dental services
- New patients looking for a dentist in București
- Existing patients wanting to book appointments

### 1.3 Key Goals
- Generate appointment bookings through online form
- Showcase services and pricing clearly
- Build trust through testimonials
- Provide easy contact methods (phone, form, location)

---

## 2. Technical Stack

### 2.1 Core Technologies
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Email Service:** Resend API
- **Deployment:** Vercel
- **Version Control:** GitHub

### 2.2 Dependencies
- React 18+
- Tailwind CSS 3+
- Resend SDK
- Lucide React (icons)
- React Hook Form (form validation)

---

## 3. Design Requirements

### 3.1 Color Scheme
- **Primary:** Blue (#0066CC, #1E40AF)
- **Secondary:** White (#FFFFFF)
- **Accent:** Light Blue (#DBEAFE, #93C5FD)
- **Text:** Dark Gray (#1F2937), Medium Gray (#6B7280)

### 3.2 Typography
- Professional, clean, and readable fonts
- Hierarchy: H1 > H2 > H3 > Body > Small

### 3.3 Design Style
- Professional and elegant
- Clean, modern layout
- Trust-building elements
- Mobile-first responsive design

---

## 4. Feature Requirements

### 4.1 Top Bar (Header)
**Priority:** High  
**Status:** Pending

**Requirements:**
- Display social media profile links (Facebook, Instagram, LinkedIn)
- Show phone number: 0820.123.123
- Display address: Strada Maria Rosetti 26A, București 020487
- Sticky/fixed positioning on scroll
- Responsive design (collapse on mobile)

### 4.2 Navigation Menu
**Priority:** High  
**Status:** Pending

**Requirements:**
- Text-based logo (practice name)
- Navigation links: Home, Services, Testimonials, Contact
- Smooth scroll to respective sections
- Sticky navigation
- Mobile hamburger menu

### 4.3 Hero Section with Appointment Form
**Priority:** High  
**Status:** Pending

**Requirements:**
- Eye-catching hero image (from provided images)
- Prominent headline and subheadline
- Appointment form with fields:
  - Name (required)
  - Phone (required)
  - Email (required)
  - Message (optional)
  - Send button
- Form validation
- Success/error messages
- Responsive layout (form beside or below hero content)

### 4.4 Services Section
**Priority:** High  
**Status:** Pending

**Requirements:**
- Display 6-8 dental services
- Each service includes:
  - Service name
  - Brief description
  - Price
  - Icon or image
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Professional presentation

**Suggested Services:**
- General Checkup & Cleaning
- Teeth Whitening
- Dental Implants
- Root Canal Treatment
- Orthodontics (Braces)
- Cosmetic Dentistry
- Pediatric Dentistry
- Emergency Dental Care

### 4.5 Testimonials Section
**Priority:** High  
**Status:** Pending

**Requirements:**
- Display 3-4 patient testimonials
- Each testimonial includes:
  - Patient photo (from Review folder)
  - Patient name
  - Rating (5 stars)
  - Testimonial text
- Carousel or grid layout
- Professional styling

### 4.6 Location Section with Map
**Priority:** High  
**Status:** Pending

**Requirements:**
- Embedded Google Map
- Address: Strada Maria Rosetti 26A, București 020487
- Map should be interactive
- Display practice hours
- Contact information

### 4.7 Sticky Bottom Bar
**Priority:** High  
**Status:** Pending

**Requirements:**
- Fixed to bottom of viewport
- Display: "Call to make an appointment"
- Phone number: 0820.123.123 (clickable tel: link)
- Call-to-action button styling
- Visible on all pages/sections
- Responsive design

### 4.8 Footer
**Priority:** Medium  
**Status:** Pending

**Requirements:**
- Practice name and logo
- Quick links (navigation)
- Contact information
- Social media links
- Copyright notice
- Privacy policy link (optional)

---

## 5. Functional Requirements

### 5.1 Form Submission (Resend Integration)
**Priority:** High  
**Status:** Pending

**Requirements:**
- Integrate Resend API for email delivery
- Send appointment request to practice email
- Include all form data in email
- Auto-reply confirmation to patient
- Handle errors gracefully
- Loading state during submission
- Success message after submission

**API Endpoint:** `/api/send-appointment`

### 5.2 Smooth Scrolling
**Priority:** Medium  
**Status:** Pending

**Requirements:**
- Navigation links scroll smoothly to sections
- Offset for fixed header
- Smooth scroll behavior

### 5.3 Responsive Design
**Priority:** High  
**Status:** Pending

**Requirements:**
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly buttons and links
- Optimized images for different screen sizes

### 5.4 Performance Optimization
**Priority:** Medium  
**Status:** Pending

**Requirements:**
- Image optimization (Next.js Image component)
- Lazy loading for images
- Minimize bundle size
- Fast page load (<3 seconds)

---

## 6. Content Requirements

### 6.1 Images
**Source:** `/Users/holly/Udemy/Udemy - Vibe Coding with Windsurf/Dentist Project`

**Available Images:**
- `atikah-akhtar-XJptUS8nbhs-unsplash.jpg`
- `candid-WFsNCIn8OF4-unsplash.jpg`
- `caroline-lm--m-4tYmtLlI-unsplash.jpg`
- `caroline-lm-8BkF0sTC6Uo-unsplash.jpg`

**Review Images:**
- `filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg`
- `jonathan-borba-hl6uG9cHW5A-unsplash.jpg`

### 6.2 Copy/Text Content
- Practice name: "Family Dental Care" (placeholder)
- Tagline: Professional, caring dental services for the whole family
- Service descriptions
- Testimonial content
- Contact information

---

## 7. Deployment Requirements

### 7.1 GitHub Repository
**Priority:** High  
**Status:** Pending

**Requirements:**
- Initialize Git repository
- Create `.gitignore` for Next.js
- Commit all project files
- Push to GitHub
- Include README.md with setup instructions

### 7.2 Vercel Deployment
**Priority:** High  
**Status:** Pending

**Requirements:**
- Connect GitHub repository to Vercel
- Configure environment variables (RESEND_API_KEY)
- Set up automatic deployments
- Configure custom domain (if needed)
- Enable analytics

### 7.3 Environment Variables
**Required:**
- `RESEND_API_KEY` - Resend API key for email sending
- `RESEND_FROM_EMAIL` - Sender email address
- `RESEND_TO_EMAIL` - Practice email to receive appointments

---

## 8. Development Phases

### Phase 1: Setup & Structure ✅
- [x] Create PRD
- [ ] Initialize Next.js project
- [ ] Set up Tailwind CSS
- [ ] Create folder structure
- [ ] Install dependencies

### Phase 2: Layout & Navigation
- [ ] Create top bar component
- [ ] Create navigation component
- [ ] Create sticky bottom bar
- [ ] Create footer component
- [ ] Implement smooth scrolling

### Phase 3: Hero & Form
- [ ] Design hero section
- [ ] Create appointment form component
- [ ] Add form validation
- [ ] Style form elements

### Phase 4: Content Sections
- [ ] Create services section
- [ ] Add pricing display
- [ ] Create testimonials section
- [ ] Add images and styling

### Phase 5: Map & Contact
- [ ] Integrate Google Maps
- [ ] Create contact section
- [ ] Add location information

### Phase 6: API Integration
- [ ] Set up Resend API
- [ ] Create API route for form submission
- [ ] Test email delivery
- [ ] Add error handling

### Phase 7: Polish & Optimization
- [ ] Responsive design testing
- [ ] Image optimization
- [ ] Performance testing
- [ ] Cross-browser testing
- [ ] Accessibility improvements

### Phase 8: Deployment
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Test production deployment

---

## 9. Success Metrics

### 9.1 Performance
- Page load time < 3 seconds
- Lighthouse score > 90
- Mobile-friendly test pass

### 9.2 User Engagement
- Form submission rate
- Phone call clicks
- Time on page
- Bounce rate

### 9.3 Technical
- Zero console errors
- All forms functional
- Responsive on all devices
- Email delivery success rate > 95%

---

## 10. Future Enhancements (Post-Launch)

- Online appointment scheduling system
- Patient portal
- Blog section for dental tips
- Multi-language support (Romanian/English)
- Live chat integration
- Insurance information section
- Before/after gallery
- FAQ section
- Newsletter signup

---

## 11. Notes & Considerations

- Ensure GDPR compliance for form data
- Add loading states for better UX
- Consider adding animations (subtle, professional)
- Test email delivery thoroughly before launch
- Optimize images before deployment
- Consider adding schema markup for SEO
- Add meta tags for social sharing

---

## 12. Contact & Resources

**Developer:** Holly  
**Project Location:** `/Users/holly/Udemy/Udemy - Vibe Coding with Windsurf/Dentist Project`  
**Deployment Platform:** Vercel  
**Repository:** GitHub (TBD)

---

**Document Version History:**
- v1.0 - October 12, 2025 - Initial PRD created
