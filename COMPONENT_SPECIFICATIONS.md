# Component Specifications - Stitch Design Implementation

## Table of Contents
1. [HeroSection](#herosection)
2. [AboutUs](#aboutus)
3. [OurServices](#ourservices)
4. [Technology](#technology)
5. [Industries](#industries)
6. [OurWorkProcess](#ourworkprocess)
7. [ContactUs](#contactus)

---

## HeroSection

**File**: `src/modules/Home/HeroSection/HeroSection.new.tsx`

### Purpose
Main hero section with headline, CTA buttons, and featured image. Creates strong first impression with gradient background and glassmorphic elements.

### Features
- Animated gradient background with blur effect
- Badge element with custom background
- Gradient text effect on key words
- Dual CTA buttons (primary + secondary)
- Glassmorphic stat card
- Responsive image container with Next.js Image

### Design Specifications

**Colors:**
- Primary: `purple-600` (#9333EA)
- Secondary: `purple-500` (#a855f7)
- Background: White/transparent overlays
- Text: Gray scale (gray-900 for headings, gray-700 for body)

**Typography:**
- Title: `text-h1` (55px) on desktop, `text-h3` (38px) on tablet
- Badge: `text-tagExtraLight` (12px)
- Description: `text-paragraph1Light` (18px, 400 weight)
- Button text: `text-tagBold` (14px, 600 weight)

**Spacing:**
- Section padding: `pt-40 pb-24` (mobile), `pt-48 pb-40` (desktop)
- Content gap: `gap-12` between columns
- Internal spacing: 6 units (24px) between elements

**Responsive Breakpoints:**
```
Mobile (< 768px):
- Single column layout
- Badge full width
- Buttons stack vertically
- Image hidden

Tablet (768px - 1024px):
- Badge inline
- Buttons horizontal
- Two columns with gap-8

Desktop (1024px+):
- Full two-column grid
- Image visible with rotation effect
- All elements visible
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `badge` | string | "ENGINEERING EXCELLENCE" | Top badge text |
| `title` | string | "Software Solutions for Modern Businesses" | Main heading |
| `description` | string | Long form... | Subheading text |
| `ctaPrimaryText` | string | "Get Started" | Primary button text |
| `ctaSecondaryText` | string | "Learn More" | Secondary button text |
| `ctaPrimaryHref` | string | "/contact-us" | Primary button link |
| `ctaSecondaryHref` | string | "/about-us" | Secondary button link |
| `statLabel` | string | "Deployment Success" | Stat card label |
| `statValue` | string | "99.9%" | Stat card value |
| `imageSrc` | string | URL | Image source URL |
| `imageAlt` | string | "Software Engineering..." | Image alt text |

### Tailwind Classes Reference
- Background: `bg-gradient-to-br`, `from-purple-600/10`, `via-white`, `to-purple-500/10`
- Containers: `max-w-7xl`, `mx-auto`, `px-4`, `md:px-16`
- Grid: `grid grid-cols-1 md:grid-cols-2 items-center gap-12`
- Buttons: `px-8 py-3 rounded-full font-tagBold hover:scale-105 transition-transform`

### Interaction States
- **Hover**: Button scale (105%), background color shift
- **Active**: Button scale (95%)
- **Focus**: Ring-2 focus states (not visible in design, should add)
- **Loading**: Disabled state should be added

### Accessibility
- Semantic `<section>` wrapper
- Proper heading hierarchy (`<h1>`)
- Alt text on image
- ARIA labels should be added to icon elements
- Form inputs should have labels

---

## AboutUs

**File**: `src/modules/Home/AboutUs/AboutUs.new.tsx`

### Purpose
Introduces company background and key metrics. Two-column layout with text content and statistics grid.

### Features
- Two-column responsive layout
- Stats grid with 2x2 layout
- Gradient numbers on stat cards
- Hover shadow effects
- Card-based design

### Design Specifications

**Colors:**
- Background: White (`bg-white`)
- Card background: White with subtle borders
- Text: Gray scale
- Gradient text: Purple gradient on numbers

**Typography:**
- Title: `text-h2` (40px) on desktop, `text-h3` (38px) on tablet
- Body: `text-paragraph1Light` (18px)
- Card numbers: `text-h4` (30px) with gradient
- Card labels: `text-tagLight` (14px)

**Spacing:**
- Section padding: `py-20` (mobile), `py-32` (desktop)
- Container gap: `gap-12` between columns
- Stats grid gap: `gap-6`

**Layout:**
- Desktop: 2 equal width columns
- Tablet: 2 equal width columns
- Mobile: Single column, full width

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Building the Future of Tech" | Section heading |
| `description` | string | Long form... | Body text content |
| `stats` | StatItem[] | Array of 4 stats | Statistics to display |

### StatItem Type
```typescript
interface StatItem {
  number: number;
  label: string;
}
```

### Default Stats
```typescript
[
  { number: 50, label: 'Team Members' },
  { number: 10, label: 'Years Experience' },
  { number: 200, label: 'Projects Completed' },
  { number: 150, label: 'Clients Served' },
]
```

### Tailwind Classes Reference
- Layout: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- Stats: `grid grid-cols-2 gap-6`
- Cards: `bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md`
- Numbers: `bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent`

---

## OurServices

**File**: `src/modules/Home/OurServices/OurServices.new.tsx`

### Purpose
Display comprehensive service offerings in a bento-grid style. Shows 6 different services with icons and descriptions.

### Features
- Bento grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Service cards with icon containers
- Icon background color variation
- Hover border color effects
- Centered header section

### Design Specifications

**Colors:**
- Card background: White (`bg-white`)
- Border: Light gray (`border-gray-200`)
- Hover border: Purple (`border-purple-600`)
- Icon backgrounds: Vary by service (all `bg-purple-100`)

**Typography:**
- Title: `text-h2` (40px) desktop
- Subtitle: `text-paragraph1Light` (18px)
- Card title: `text-h6` (24px)
- Card description: `text-tagLight` (14px)

**Spacing:**
- Section padding: `py-20 md:py-32`
- Header margin: `mb-16`
- Card gap: `gap-6`
- Card padding: `p-6`

**Grid Layout:**
```
Mobile: grid-cols-1
Tablet: grid-cols-2
Desktop: grid-cols-3
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Tailored Services" | Section heading |
| `subtitle` | string | "Comprehensive expertise..." | Subheading |
| `services` | Service[] | 6 default services | Array of services |

### Service Type
```typescript
interface Service {
  id: string;
  icon: string;        // Emoji or SVG
  iconBg: string;      // Tailwind class
  title: string;
  description: string;
}
```

### Default Services
```typescript
[
  {
    id: '1',
    icon: '💻',
    iconBg: 'bg-purple-100',
    title: 'Web Development',
    description: 'Scalable, responsive, and SEO-optimized web applications...',
  },
  // ... 5 more services
]
```

### Tailwind Classes Reference
- Container: `max-w-7xl mx-auto px-4 md:px-16`
- Header: `text-center mb-16`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card: `bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-600/50 transition-all`
- Icon: `w-12 h-12 {iconBg} rounded-lg flex items-center justify-center`

---

## Technology

**File**: `src/modules/Home/Technology/Technology.new.tsx`

### Purpose
Showcase technology stack with categorized tabs. Users can switch between Frontend, Backend, Cloud, and Mobile technologies.

### Features
- Tabbed interface with category switching
- Tech items with logos and names
- Opacity hover effects
- Glass-card design for display area
- Responsive grid for tech items

### Design Specifications

**Colors:**
- Active tab: Purple gradient background
- Inactive tab: White with gray text
- Display card: White/transparent with backdrop blur
- Text: Gray scale

**Typography:**
- Title: `text-h2` (40px)
- Button text: `text-tagBold` (14px)
- Tech name: `text-tagLight` (14px)

**Spacing:**
- Section padding: `py-20 md:py-32`
- Title margin: `mb-16`
- Layout gap: `gap-8`
- Grid gap: `gap-8` (tech items)

**Layout:**
```
Desktop: 2 columns (1/4 nav, 3/4 grid)
Mobile: Single column (nav stacked above)
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Our Technology Stack" | Section title |
| `categories` | TechCategory[] | 4 categories | Tech categories |

### Types
```typescript
interface TechItem {
  name: string;
  logo: string;  // Image URL
}

interface TechCategory {
  id: string;
  name: string;
  items: TechItem[];
}
```

### State Management
- Uses `useState` hook: `const [activeCategory, setActiveCategory] = useState(categories[0]?.id)`
- Filters items based on `activeCategory`
- Smooth transitions with Tailwind

### Tailwind Classes Reference
- Layout: `flex flex-col lg:flex-row gap-8`
- Nav: `lg:w-1/4 space-y-2`
- Button: `w-full text-left px-6 py-3 rounded-lg font-tagBold transition-all`
- Display: `lg:w-3/4 bg-white/70 backdrop-blur-md p-8 rounded-xl border border-gray-200`
- Grid: `grid grid-cols-2 md:grid-cols-4 gap-8`

---

## Industries

**File**: `src/modules/Home/Industries/Industries.new.tsx`

### Purpose
Display industries served as visual pills/badges. Flexbox layout centered on page.

### Features
- Centered flexbox layout
- Icon + text badges
- Hover effects (border and background)
- Responsive wrapping
- Simple and clean design

### Design Specifications

**Colors:**
- Background: White (`bg-white`)
- Pill background: Light gray (`bg-gray-100`)
- Pill border: Gray (`border-gray-300`)
- Hover border: Purple (`border-purple-600`)
- Hover background: Purple-50 (`bg-purple-50`)

**Typography:**
- Title: `text-h2` (40px)
- Pill text: `text-tag` (14px) with `font-tagBold`

**Spacing:**
- Section padding: `py-20 md:py-32`
- Title margin: `mb-16`
- Pill gap: `gap-4`
- Pill padding: `px-6 py-3`

**Layout:**
```
All screen sizes: Flex wrap centered
Responsive: Pills break into multiple lines based on width
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Industries We Empower" | Section title |
| `industries` | Industry[] | 5 industries | Array of industries |

### Industry Type
```typescript
interface Industry {
  id: string;
  name: string;
  icon: string;  // Emoji
}
```

### Default Industries
```typescript
[
  { id: '1', name: 'FinTech', icon: '💳' },
  { id: '2', name: 'Healthcare', icon: '🏥' },
  { id: '3', name: 'E-commerce', icon: '🛒' },
  { id: '4', name: 'SaaS', icon: '☁️' },
  { id: '5', name: 'Enterprise', icon: '🏢' },
]
```

### Tailwind Classes Reference
- Container: `max-w-7xl mx-auto px-4 md:px-16`
- Pills: `flex flex-wrap justify-center gap-4`
- Pill: `flex items-center gap-3 px-6 py-3 rounded-2xl bg-gray-100 border border-gray-300 hover:border-purple-600 hover:bg-purple-50 transition-all`

---

## OurWorkProcess

**File**: `src/modules/Home/OurWorkProcess/OurWorkProcess.new.tsx`

### Purpose
Visualize the 5-step development process with timeline layout. First step is highlighted with gradient.

### Features
- 5-step visual timeline
- Connecting line on desktop (hidden on mobile)
- First step gradient circle (active)
- Remaining steps with border circles
- Responsive vertical/horizontal layout

### Design Specifications

**Colors:**
- Step 1 circle: Gradient purple
- Other circles: White with purple border
- Connecting line: Light gray (`bg-gray-300`)
- Text: Gray scale

**Typography:**
- Title: `text-h2` (40px)
- Step title: `text-h6` (24px)
- Step description: `text-tagLight` (14px)

**Spacing:**
- Section padding: `py-20 md:py-32`
- Title margin: `mb-16`
- Step gap: `gap-8`
- Circle size: `w-12 h-12`

**Layout:**
```
Mobile: grid-cols-1 (vertical stack, no line)
Desktop: grid-cols-5 (horizontal, with line)
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Our Work Process" | Section title |
| `steps` | ProcessStep[] | 5 steps | Process steps |

### ProcessStep Type
```typescript
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
```

### Default Steps
```typescript
[
  { number: 1, title: 'Discovery', description: 'We dive deep...' },
  { number: 2, title: 'Planning', description: 'Architecting...' },
  { number: 3, title: 'Development', description: 'Agile coding...' },
  { number: 4, title: 'Testing', description: 'Rigorous QA...' },
  { number: 5, title: 'Deployment', description: 'Launching...' },
]
```

### Tailwind Classes Reference
- Line: `hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-300`
- Grid: `grid grid-cols-1 md:grid-cols-5 gap-8`
- Circle gradient: `w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white`
- Circle border: `w-12 h-12 rounded-full bg-white border-2 border-purple-600 text-purple-600`

---

## ContactUs

**File**: `src/modules/Home/ContactUs/ContactUs.new.tsx`

### Purpose
Contact form section with purple gradient background. Two-column layout with text on left, form on right.

### Features
- Gradient purple background
- Glassmorphic form container
- Form validation
- Loading state handling
- TypeScript form typing
- Callback function support

### Design Specifications

**Colors:**
- Background: Gradient purple (`from-purple-600 to-purple-500`)
- Form container: White/transparent with backdrop blur
- Form inputs: Transparent with white border
- Input text: White
- Button: White background

**Typography:**
- Title: `text-h1` (55px)
- Description: `text-paragraph1Light` (18px)
- Labels: None visible (placeholder-based)
- Button: `text-tagBold` (14px)

**Spacing:**
- Section padding: `py-20 md:py-32`
- Content gap: `gap-12`
- Form gap: `space-y-4`
- Input padding: `p-3`

**Layout:**
```
Mobile: Single column (text above, form below)
Desktop: Two columns (text left, form right)
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Ready to start..." | Section heading |
| `description` | string | "Let's build..." | Description text |
| `placeholders` | object | See below | Input placeholders |
| `submitButtonText` | string | "Send Message" | Button text |
| `onSubmit` | function | Console log | Form submission handler |

### Placeholders Object
```typescript
{
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Business Email',
  message: 'How can we help?',
}
```

### Form Data Type
```typescript
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
```

### Form Behavior
- **Validation**: HTML5 validation (required, email format)
- **Loading State**: Button disabled while submitting
- **Reset**: Form clears after successful submission
- **Error Handling**: Try/catch with console logging

### Tailwind Classes Reference
- Background: `bg-gradient-to-r from-purple-600 to-purple-500`
- Container: `max-w-7xl mx-auto px-4 md:px-16`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center`
- Form: `bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20`
- Input: `bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-lg p-3 focus:ring-2 focus:ring-white outline-none`
- Button: `w-full bg-white text-purple-600 font-tagBold text-tag py-3 rounded-lg hover:bg-gray-100`

### Example Implementation

```typescript
<ContactUs
  onSubmit={async (formData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    
    return response.json();
  }}
/>
```

---

## Common Patterns

### Responsive Classes Pattern
```typescript
// All components follow this pattern:
className="text-size-mobile md:text-size-tablet lg:text-size-desktop"
className="px-4 md:px-16"  // Padding
className="gap-6 md:gap-8 lg:gap-12"  // Spacing
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Grid
```

### Hover States Pattern
```typescript
className="hover:shadow-md transition-shadow"
className="hover:bg-purple-600/5 transition-colors"
className="hover:scale-105 transition-transform"
className="hover:border-purple-600 transition-all"
```

### Gradient Text Pattern
```typescript
className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent"
```

### Glass Card Pattern
```typescript
className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/30"
```

---

## Testing Checklist

- [ ] Component renders without errors
- [ ] All props work with default values
- [ ] Responsive design: mobile (375px), tablet (768px), desktop (1024px)
- [ ] Hover states visible and smooth
- [ ] Images load correctly
- [ ] Form validation works
- [ ] Form submission triggers callback
- [ ] Loading states display correctly
- [ ] No layout shifts or CLS issues
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: alt text present
- [ ] Performance: Lighthouse score > 90

---

## Migration Tips

1. **Gradual Rollout**: Deploy one section at a time
2. **Feature Flags**: Use environment variables to toggle between old/new
3. **Testing**: Run visual regression tests
4. **Performance**: Compare Lighthouse scores before/after
5. **Monitoring**: Track error logs for 48 hours post-deployment

