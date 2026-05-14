# Stitch Design to React Code Integration Guide

## Overview

This guide covers the production-ready React/Next.js components generated from Stitch design project **7211438719497548628**. The components are fully typed with TypeScript and use Tailwind CSS for styling, matching the existing project architecture.

## Project Structure

All generated components follow the existing Codewinglet architecture in `/src/modules/Home/`:

```
src/modules/Home/
├── HeroSection/
│   ├── HeroSection.new.tsx          # Hero component with CTA and image
│   ├── herosection.css              # Original (can be deprecated)
│   └── utils.tsx                    # Shared utilities
├── AboutUs/
│   ├── AboutUs.new.tsx              # About section with stats
│   └── components/
│       └── StatCard.tsx             # Stat display component
├── OurServices/
│   ├── OurServices.new.tsx          # Services grid layout
│   ├── constants.ts                 # Service data
│   └── components/
│       └── ServiceCard.tsx          # Individual service card
├── Technology/
│   ├── Technology.new.tsx           # Tech stack with tabs
│   └── TechnologyTab.tsx            # Tab navigation
├── Industries/
│   ├── Industries.new.tsx           # Industry pills/badges
│   └── components/
├── OurWorkProcess/
│   ├── OurWorkProcess.new.tsx       # Process steps timeline
│   └── scss/process.css             # Original styles
├── ContactUs/
│   ├── ContactUs.new.tsx            # Contact form section
│   ├── Form.tsx                     # Form component
│   └── Form/
│       ├── StitchTextField.tsx
│       └── StitchTextarea.tsx
└── index.tsx                        # Module export

src/types/
└── home-sections.ts                 # All TypeScript interfaces
```

## Generated Components

### 1. HeroSection (`HeroSection.new.tsx`)

**Features:**
- Responsive gradient background with blur elements
- Animated badge
- Gradient text effect on title
- Dual CTA buttons (primary + secondary)
- Glassmorphic stat card
- Next.js Image optimization

**Props Interface:**
```typescript
interface HeroSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
  statLabel?: string;
  statValue?: string;
  imageSrc?: string;
  imageAlt?: string;
}
```

**Responsive Breakpoints:**
- Mobile: Single column, full-width
- Tablet (md): Two columns, gap-12
- Desktop (lg): Two columns with image visible

**Tailwind Classes Used:**
- `pt-40`, `pb-24`, `md:pt-48`, `md:pb-40` - Padding
- `bg-gradient-to-br` - Background gradients
- `text-h1`, `text-h3` - Typography
- `rounded-full`, `rounded-2xl` - Border radius
- `shadow-lg`, `shadow-2xl` - Shadows

### 2. AboutUs (`AboutUs.new.tsx`)

**Features:**
- Two-column layout
- Text content section
- Stats grid (2x2)
- Stat cards with gradient numbers
- Hover effects on cards

**Props Interface:**
```typescript
interface AboutUsProps {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

interface StatItem {
  number: number;
  label: string;
}
```

**Default Stats:**
- 50+ Team Members
- 10+ Years Experience
- 200+ Projects Completed
- 150+ Clients Served

**Responsive Design:**
- Mobile: Single column
- Tablet+: Two columns
- Stats: Always 2x2 grid

### 3. OurServices (`OurServices.new.tsx`)

**Features:**
- Bento-style grid layout
- Service cards with icons
- Hover border color change
- Icon background color variation
- Description text

**Props Interface:**
```typescript
interface OurServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

interface Service {
  id: string;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}
```

**Default Services:**
- Web Development
- Mobile Apps
- Cloud Solutions
- AI/ML
- DevOps
- Digital Marketing

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

### 4. Technology (`Technology.new.tsx`)

**Features:**
- Tabbed interface for categories
- Tech stack with logos
- Category switching
- Opacity hover effects
- Glass card design

**Props Interface:**
```typescript
interface TechnologyProps {
  title?: string;
  categories?: TechCategory[];
}

interface TechCategory {
  id: string;
  name: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  logo: string;
}
```

**Default Categories:**
- Frontend (React, TypeScript, Tailwind, Next.js)
- Backend (Node.js, Python, Go)
- Cloud (AWS, Azure, GCP)
- Mobile (React Native, Flutter)

**State Management:**
- Uses `useState` for active category
- Filters items based on selection
- Smooth transitions

### 5. Industries (`Industries.new.tsx`)

**Features:**
- Flexbox pill layout
- Icon + text badges
- Hover effects
- Centered layout

**Props Interface:**
```typescript
interface IndustriesProps {
  title?: string;
  industries?: Industry[];
}

interface Industry {
  id: string;
  name: string;
  icon: string;
}
```

**Default Industries:**
- FinTech
- Healthcare
- E-commerce
- SaaS
- Enterprise

### 6. OurWorkProcess (`OurWorkProcess.new.tsx`)

**Features:**
- 5-step process visualization
- Connecting line (desktop only)
- Gradient circle for first step
- Bordered circles for remaining steps
- Timeline layout

**Props Interface:**
```typescript
interface OurWorkProcessProps {
  title?: string;
  steps?: ProcessStep[];
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
```

**Default Steps:**
1. Discovery
2. Planning
3. Development
4. Testing
5. Deployment

**Responsive:**
- Mobile: Vertical stack, no connecting line
- Desktop: Horizontal with connecting line

### 7. ContactUs (`ContactUs.new.tsx`)

**Features:**
- Gradient background (purple)
- Glassmorphic form
- Two-column layout
- Form validation states
- Loading state handling
- TypeScript form typing

**Props Interface:**
```typescript
interface ContactUsProps {
  title?: string;
  description?: string;
  placeholders?: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  submitButtonText?: string;
  onSubmit?: (formData: ContactFormData) => void | Promise<void>;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
```

**Form Fields:**
- First Name (text input)
- Last Name (text input)
- Email (email input, required)
- Message (textarea, multiline)
- Submit button with loading state

**Validation:**
- HTML5 validation
- Required fields
- Email format validation
- Loading state during submission

## Installation & Migration Steps

### Step 1: Review New Components

```bash
# View generated components
ls -la src/modules/Home/*/

# Check new component files
cat src/modules/Home/HeroSection/HeroSection.new.tsx
```

### Step 2: Backup Existing Components

```bash
# Create backup branch
git checkout -b backup/home-sections-original

# Backup original files
git add -A
git commit -m "backup: original home sections before Stitch integration"
```

### Step 3: Replace Components

**Option A: Direct Replacement (One at a Time)**

```bash
# Replace Hero Section
mv src/modules/Home/HeroSection/HeroSection.tsx src/modules/Home/HeroSection/HeroSection.old.tsx
mv src/modules/Home/HeroSection/HeroSection.new.tsx src/modules/Home/HeroSection/HeroSection.tsx

# Replace About Us
mv src/modules/Home/AboutUs/AboutUs.tsx src/modules/Home/AboutUs/AboutUs.old.tsx
mv src/modules/Home/AboutUs/AboutUs.new.tsx src/modules/Home/AboutUs/AboutUs.tsx

# ... repeat for other sections
```

**Option B: Gradual Testing**

Keep `.new.tsx` files and test with a feature flag:

```typescript
// In index.tsx
import HeroSectionOld from './HeroSection/HeroSection.old';
import HeroSectionNew from './HeroSection/HeroSection.new';

const useNewDesigns = process.env.NEXT_PUBLIC_USE_STITCH_DESIGNS === 'true';

export const HeroSection = useNewDesigns ? HeroSectionNew : HeroSectionOld;
```

### Step 4: Update Imports

Update the Home module index:

```typescript
// src/modules/Home/index.tsx
export { default as HeroSection } from './HeroSection/HeroSection';
export { default as AboutUs } from './AboutUs/AboutUs';
export { default as OurServices } from './OurServices/OurServices';
export { default as Technology } from './Technology/Technology';
export { default as Industries } from './Industries/Industries';
export { default as OurWorkProcess } from './OurWorkProcess/OurWorkProcess';
export { default as ContactUs } from './ContactUs/ContactUs';
```

### Step 5: Update Home Page

```typescript
// src/app/(public)/page.tsx
import {
  HeroSection,
  AboutUs,
  OurServices,
  Technology,
  Industries,
  OurWorkProcess,
  ContactUs,
} from '@codewinglet/modules/Home';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Technology />
      <Industries />
      <OurWorkProcess />
      <ContactUs />
    </>
  );
}
```

### Step 6: Test Responsive Design

```bash
# Start development server
npm run dev

# Test at different breakpoints
# - Mobile: 375px
# - Tablet: 768px
# - Desktop: 1024px+

# Check for layout issues, text overflow, image scaling
```

### Step 7: Run Linting & Build

```bash
# Check TypeScript
npx tsc --noEmit

# Run ESLint
npm run lint
npm run lint:fix

# Build project
npm run build

# Run Storybook for component testing
npm run storybook
```

## Customization Guide

### Modifying Colors

Update Tailwind classes in components:

```typescript
// Change purple to blue
className='bg-purple-600' // change to bg-blue-600
className='text-purple-600' // change to text-blue-600
className='border-purple-600' // change to border-blue-600
```

Or update `tailwind.config.ts` for global color changes.

### Customizing Text Content

Pass props to override defaults:

```typescript
<HeroSection
  badge="CUSTOM BADGE"
  title="Your Custom Title"
  description="Your custom description"
/>
```

### Changing Images

Update `imageSrc` prop:

```typescript
<HeroSection
  imageSrc="/path/to/your/image.jpg"
  imageAlt="Your image alt text"
/>
```

### Modifying Services List

```typescript
<OurServices
  services={[
    {
      id: '1',
      icon: '🎨',
      iconBg: 'bg-blue-100',
      title: 'UI/UX Design',
      description: 'Beautiful and functional designs...',
    },
    // ... more services
  ]}
/>
```

### Form Submission Handler

```typescript
<ContactUs
  onSubmit={async (formData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    return response.json();
  }}
/>
```

## Type Safety

All components use TypeScript interfaces with proper typing:

```typescript
import type {
  HeroSectionProps,
  AboutUsProps,
  OurServicesProps,
  TechnologyProps,
  IndustriesProps,
  OurWorkProcessProps,
  ContactUsProps,
  ContactFormData,
} from '@codewinglet/types/home-sections';
```

## Accessibility Features

All components include:
- Semantic HTML (`<section>`, `<h2>`, `<button>`)
- Alt text for images
- Form labels and proper input types
- Focus states on interactive elements
- Proper heading hierarchy (h1, h2, h3, etc.)
- ARIA attributes where needed

## Performance Optimizations

- Next.js `Image` component for optimization
- `lazy` loading images
- CSS gradients instead of image assets
- Minimal re-renders with React.memo where needed
- Responsive images with srcSet

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Styling Issues

If styles don't apply:
1. Check Tailwind content paths in `tailwind.config.ts`
2. Ensure `@tailwind` directives in `globals.css`
3. Clear `.next` build cache: `rm -rf .next`
4. Rebuild: `npm run build`

### Image Loading Errors

1. Verify image URLs are accessible
2. Check Next.js image optimization settings
3. Add to `next.config.js` if using remote images:
```javascript
images: {
  remotePatterns: [
    { hostname: 'lh3.googleusercontent.com' },
    { hostname: 'your-domain.com' },
  ],
}
```

### Type Errors

1. Ensure `src/types/home-sections.ts` exists
2. Update import paths if folder structure differs
3. Run `npx tsc --noEmit` to check all types

## Deployment Checklist

- [ ] All components render without errors
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Form submission handler implemented
- [ ] Images optimized and loading correctly
- [ ] TypeScript builds without errors
- [ ] ESLint passes all checks
- [ ] Storybook stories updated for new components
- [ ] CSS is not duplicated
- [ ] Performance metrics acceptable (Lighthouse)
- [ ] Accessibility audit passed

## Next Steps

1. **Test in Staging**: Deploy to staging environment
2. **Performance Review**: Check Lighthouse scores
3. **Cross-browser Testing**: Verify on multiple browsers
4. **User Feedback**: Gather feedback from stakeholders
5. **Production Deploy**: Roll out to production

## Support & Maintenance

For issues or updates:
1. Check git history for component changes
2. Review Stitch project for design updates
3. Update components as needed
4. Maintain version control of all changes
5. Document any custom modifications

## References

- **Stitch Project ID**: 7211438719497548628
- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **TypeScript**: https://www.typescriptlang.org
- **React**: https://react.dev
