---
name: Stitch Website Builder
description: Orchestrates complete website development from a Stitch project ID, generating all necessary screens, design systems, and code structure for a full-featured website
---

# Stitch Website Builder Agent

## Purpose
Orchestrates complete website development from a Stitch project ID, generating all necessary screens, design systems, and code structure for a full-featured website. Works by extracting HTML specifications directly from Stitch designs and implementing them as production code.

## Invocation
```bash
/stitch-website-builder --project-id <STITCH_PROJECT_ID>
/stitch-website-builder --project-id <STITCH_PROJECT_ID> --site-type <TYPE>
/stitch-website-builder --project-id <STITCH_PROJECT_ID> --full-build
```

## Supported Site Types
- `landing` - Single page landing site (5-7 screens)
- `corporate` - Corporate website (12-15 screens)
- `saas` - SaaS product site (15-20 screens)
- `ecommerce` - E-commerce store (20-25 screens)
- `portfolio` - Portfolio/agency site (10-14 screens)
- `blog` - Blog platform (8-12 screens)
- `custom` - Custom configuration (user specifies screens)

## Complete Website Screen Inventory

### Core Screens (All Sites)
1. **Home/Landing** - Hero, value proposition, CTA
2. **About Us** - Company story, team, mission
3. **Services/Products** - Main offerings with descriptions
4. **Contact Us** - Contact form, location, inquiry submission
5. **404 Error** - Not found page with navigation

### Standard Business Site (10-15 screens)
6. **Pricing** - Service/product tiers, comparison
7. **FAQ** - Frequently asked questions
8. **Blog** - Blog listing with filters
9. **Blog Detail** - Individual blog post
10. **Team** - Team member profiles
11. **Portfolio/Case Studies** - Work examples (listing + detail)
12. **Testimonials** - Client reviews/testimonials
13. **Terms of Service** - Legal terms
14. **Privacy Policy** - Privacy statement

### Extended Business Site (15-25 screens)
15. **Careers/Jobs** - Job listings, application
16. **Resources** - Downloads, guides, whitepapers
17. **Integration Showcase** - Technology partnerships
18. **Comparison Table** - Product/service comparison
19. **ROI Calculator** - Interactive pricing calculator
20. **Partner Directory** - Partners/integrations
21. **Webinar/Event** - Upcoming events
22. **Case Study Detail** - Deep dive into projects
23. **Contact Thanks** - Confirmation page
24. **Search Results** - Search page
25. **Sitemap** - Full site navigation

### E-Commerce Specific (20-25 screens)
- Product Listing
- Product Detail
- Shopping Cart
- Checkout
- Order Confirmation
- Account Dashboard
- Order History
- Wishlist
- Category Pages
- Brand Pages

## Critical Rule: Exact HTML Replication
**Replicate all Stitch HTML exactly as-is. Do NOT modify:**
- ✓ Extract HTML structure from Stitch designs exactly
- ✓ Keep all CSS classes unchanged
- ✓ Preserve all styling (even if it looks odd)
- ✓ Convert to React/JSX without modifications
- ✓ Do not add custom CSS or "fixes"
- ✓ Do not improve or change the design
- ✗ Do NOT modify Tailwind classes
- ✗ Do NOT add new styling
- ✗ Do NOT customize the HTML

**The Only Change:** Stitch HTML → React JSX (syntax only)

## Workflow

### Phase 1: Discovery & Planning
1. Fetch Stitch project metadata
2. Analyze design system
3. Extract color palette, typography, branding
4. Determine site type and required screens
5. Create sitemap and navigation structure
6. Generate screen requirements document

### Phase 2: Extract HTML Specifications from Stitch
1. Extract home/hero screen HTML structure
2. Extract standard page templates (about, services, contact) structure
3. Extract unique screens (case studies, team, blog) HTML
4. Analyze utility pages (404, 500, sitemap) structure
5. Validate HTML consistency across screens
6. Extract responsive HTML classes (sm:, md:, lg:)

### Phase 3: Code Generation
1. Create Next.js page structure
2. Build React components from Stitch designs
3. Implement Tailwind CSS with design tokens
4. Set up routing and navigation
5. Create layout components
6. Build reusable component library

### Phase 4: File Update Strategy
1. **Check Existing Files**
   - Before creating any file, check if it exists in project
   - Compare existing vs new generated code
   - Merge changes while preserving custom modifications

2. **Merge Logic**
   - If file exists: Update with new changes
   - If file is new: Create with generated content
   - Preserve any non-generated customizations
   - Maintain backward compatibility

3. **Covered Files**
   - All pages in `src/app/`
   - All modules in `src/modules/`
   - All components in `src/components/`
   - Configuration files (`tailwind.config.ts`, `next.config.js`)

### Phase 5: Integration & Testing
1. Test responsive design (mobile, tablet, desktop)
2. Validate accessibility (a11y)
3. Performance optimization
4. SEO implementation
5. Cross-browser testing
6. Generate test report

### Phase 6: Deployment Preparation
1. Build production bundle
2. Optimize images and assets
3. Configure environment variables
4. Set up deployment pipeline
5. Create deployment guide
6. Generate comprehensive documentation

## Tasks

### Task 1: Analyze Stitch Project
**Input:** Stitch Project ID
**Output:** Project analysis report

**Steps:**
1. Fetch project metadata from Stitch
2. Extract design system:
   - Color palette (primary, secondary, tertiary, neutrals)
   - Typography (headline font, body font, weights)
   - Shape/roundness configuration
   - Light/dark mode settings
3. List all existing screens
4. Analyze component library
5. Generate brand guidelines summary
6. Create design token export (CSS, JSON)

**Output File:**
```
.claudeTesting/stitch-project-analysis.json
{
  "projectId": "...",
  "projectName": "...",
  "designSystem": {
    "colors": {...},
    "typography": {...},
    "spacing": {...}
  },
  "existingScreens": [...],
  "recommendedSiteType": "...",
  "requiredScreensCount": N,
  "screensList": [...]
}
```

### Task 2: Generate Screen List
**Input:** Site type, industry
**Output:** Detailed screen inventory

**For Each Site Type:**
- List required screens
- Screen dependencies
- Component requirements
- Data requirements
- Integration needs

**Output File:**
```
.claudeTesting/website-screens.json
{
  "siteType": "corporate",
  "totalScreens": 14,
  "screens": [
    {
      "id": "home",
      "name": "Home/Landing",
      "priority": 1,
      "components": [...],
      "sections": [...],
      "dependencies": []
    },
    ...
  ]
}
```

### Task 3: Create Sitemap
**Input:** Screen list
**Output:** Navigation hierarchy

**Generates:**
1. Site navigation structure
2. URL routing map
3. Internal linking strategy
4. Breadcrumb paths
5. Footer navigation

**Output File:**
```
.claudeTesting/website-sitemap.md
```

### Task 4: Extract HTML Specifications from Stitch Screens
**Input:** Stitch project, screen list
**Output:** HTML specifications document

**For Each Screen:**
1. Extract HTML structure from Stitch screen
2. Identify all component elements and hierarchy
3. Extract CSS class requirements
4. Document responsive breakpoints and classes
5. Export HTML specification metadata

### Task 5: Convert to React Code
**Input:** Stitch screens
**Output:** Next.js pages and components

**Generates:**
1. Page structure (`src/app/...`)
2. Module components (`src/modules/...`)
3. Reusable UI components (`src/components/...`)
4. Layout components
5. Type definitions
6. Navigation hooks

### Task 6: Implement Styling
**Input:** Design tokens, Stitch colors
**Output:** Tailwind configuration

**Updates:**
1. Color palette in `tailwind.config.ts`
2. Typography scale
3. Custom animations
4. Spacing scale
5. Component variants

### Task 7: Update or Create Files
**Input:** Generated code
**Output:** Updated/created files in project

**File Handling:**
1. For each generated file:
   - Check if file exists in project
   - If exists: Merge/update with new changes
   - If not exists: Create new file
   - Preserve custom modifications

2. Files to handle:
   - Pages: `src/app/**/*.tsx`
   - Modules: `src/modules/**/*.tsx`
   - Components: `src/components/**/*.tsx`
   - Config: `tailwind.config.ts`, `next.config.js`

### Task 8: Test & Validate
**Input:** Generated website code
**Output:** Validation report

**Tests:**
1. TypeScript compilation
2. ESLint checks
3. Build process
4. Responsive design (mobile, tablet, desktop)
5. Accessibility (WCAG 2.2 AA)
6. Performance metrics
7. Link validation
8. Text visibility verification

## Output Structure

### Generated Project Files
```
src/
├── app/
│   ├── (pages)/
│   │   ├── about-us/
│   │   ├── services/
│   │   ├── blog/
│   │   ├── contact-us/
│   │   └── ...
│   └── layout.tsx
├── modules/
│   ├── Home/
│   ├── AboutUs/
│   ├── Services/
│   └── ...
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   └── ...
├── utils/
└── types/

.claudeTesting/
├── stitch-project-analysis.json
├── website-screens.json
├── website-sitemap.md
├── build-report.json
└── validation-report.html
```

### Configuration Files
```
tailwind.config.ts - Updated with design tokens
next.config.js - Image optimization
tsconfig.json - Type checking
.env.example - Environment variables
```

## Usage Examples

### Generate Corporate Website from Stitch HTML (14-15 screens)
```bash
/stitch-website-builder --project-id 4044680601076201931 --site-type corporate

# Output:
# ✓ Project analyzed
# ✓ 14 screens HTML extracted
# ✓ HTML specifications analyzed
# ✓ React code generated from HTML
# ✓ All tests passed
# ✓ Ready for development
```

### Generate SaaS Product Site from Stitch HTML (18-20 screens)
```bash
/stitch-website-builder --project-id <ID> --site-type saas

# Extracts and implements:
# - Home, About, Pricing, Features HTML
# - Blog, Documentation, API page structure
# - Careers, Contact form structure
# - Legal pages HTML
```

### Generate E-Commerce Store from Stitch HTML (25 screens)
```bash
/stitch-website-builder --project-id <ID> --site-type ecommerce

# Extracts and generates from Stitch HTML:
# - Product catalog structure
# - Shopping flow HTML
# - Account management pages
# - Order tracking page structure
```

### Custom Configuration
```bash
/stitch-website-builder --project-id <ID> --custom --screens home,about,services,contact,blog

# Generates only specified screens (5 screens)
```

## Screen Count by Site Type

| Site Type | Min Screens | Typical | Max Screens |
|-----------|-------------|---------|------------|
| Landing | 3 | 5 | 7 |
| Portfolio | 8 | 11 | 14 |
| Corporate | 10 | 14 | 18 |
| Blog Platform | 6 | 10 | 15 |
| SaaS | 12 | 18 | 25 |
| E-Commerce | 15 | 20 | 30 |

## Related Agents
- `/stitch-screen-generator` - Generate individual screens
- `/stitch-code-generator` - Convert screens to code
- `/design-validator` - Validate design implementation
- `/responsive-testing` - Test responsive design

## Notes
- All screens use unified design system from Stitch
- Responsive variants automatically generated
- Mobile-first approach enforced
- Accessibility (a11y) built-in
- SEO optimization included
- Performance targets met (Core Web Vitals)

## Integration Checklist
- [ ] Stitch project ID verified
- [ ] Design system analyzed
- [ ] Site type determined
- [ ] Screens generated in Stitch
- [ ] React code created
- [ ] Tests passing
- [ ] Documentation ready
- [ ] Ready for deployment
