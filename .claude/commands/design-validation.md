# Design Validation - Stitch Design vs Implementation

## Overview
Validate that the Codewinglet home page redesign matches the Stitch AI-generated design specifications. This command checks design fidelity, spacing, colors, and component styling.

## Steps to Validate

### 1. Visual Design Comparison
```bash
# Take screenshots of current implementation at key breakpoints
# Compare against Stitch design versions saved in:
# - /Users/pillagowthamvenkatesh/.claude/projects/.../tool-results/
# - screen_bff84e9955f74e7ab844862c21806100.png (Full page design)
# - screen_f09f8733a9cf486095106a91584478d1.png (Hero-focused design)
```

**Sections to Compare:**
- [ ] Hero Section - Purple gradient background, CTAs, image card
- [ ] About/Stats - 2x2 grid layout with gradient text numbers
- [ ] Services - 3-column card grid with icons and hover effects
- [ ] Technology - Tab-based with glass morphism effects
- [ ] Industries - Industry badges in flex wrap layout
- [ ] Work Process - 5-step timeline with gradient circles
- [ ] Testimonials - Glass morphism cards with avatars
- [ ] Contact CTA - Purple gradient background with form
- [ ] Footer - Proper spacing and typography

### 2. Color Palette Validation
**Primary Colors:**
- [ ] Primary Purple: #3525cd (HEX validation)
- [ ] Secondary Purple: #712ae2 (Gradient end color)
- [ ] Tertiary Blue: #0f6fff (Contact section)
- [ ] Gray scale: 50-900 (Proper shades)

**Check in Tailwind Config:**
```bash
grep -A 20 "colors:" tailwind.config.ts
```

### 3. Typography Validation
**Font Families:**
- [ ] Poppins (primary font) - verify applied throughout
- [ ] Playfair Display (headings) - check h1-h6
- [ ] Material Symbols (icons) - verify loading

**Font Sizes:**
- [ ] h1-h6 sizes match design spec
- [ ] Body text (paragraph1, paragraph2) correct
- [ ] Label/tag sizes consistent

### 4. Spacing & Layout
**Grid System:**
- [ ] Desktop: proper 12-column grid
- [ ] Tablet: responsive column adjustment
- [ ] Mobile: single column stacked layout

**Padding/Margins:**
- [ ] Sections: xl (80px) padding vertical
- [ ] Cards: md (24px) padding internal
- [ ] Gaps: gutter (24px) between items
- [ ] Mobile margins: margin-mobile (16px)

### 5. Component Styling Checklist

#### ServiceCard Component
```bash
# Location: src/modules/Home/OurServices/components/ServiceCard.tsx
# Verify classes:
```
- [ ] bg-white background
- [ ] p-6 padding
- [ ] rounded-xl border radius
- [ ] border-gray-200 border color
- [ ] Icon: w-12 h-12, rounded-lg
- [ ] Icon colors: primary, secondary, tertiary
- [ ] Hover states applied

#### StatCard Component
```bash
# Location: src/modules/Home/AboutUs/components/StatCard.tsx
```
- [ ] 2x2 grid layout
- [ ] Gradient text for numbers
- [ ] Card shadows and hover effects
- [ ] Responsive on all breakpoints

#### Glass Morphism Elements
```bash
# Check all glass cards:
```
- [ ] backdrop-blur-md applied
- [ ] bg-white/10 or bg-white/20
- [ ] border-white/20 or border-white/30
- [ ] Proper transparency and blur effect

### 6. Responsive Breakpoints Test

**Mobile (320px - 640px):**
```bash
# Test in browser DevTools or:
curl -A "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)" http://localhost:3000
```
- [ ] Single column layout
- [ ] Text readable without zoom
- [ ] Tap targets >= 44px
- [ ] No horizontal scroll
- [ ] Images responsive

**Tablet (768px - 1024px):**
- [ ] 2-column layout where applicable
- [ ] Proper spacing scaled down
- [ ] Images optimized for tablet
- [ ] Touch-friendly spacing

**Desktop (1200px+):**
- [ ] Full 3+ column layouts
- [ ] Proper use of whitespace
- [ ] Hover effects visible
- [ ] Full-width images/backgrounds

### 7. CSS Compilation Check
```bash
# Verify Tailwind CSS is generated
curl -s http://localhost:3000/_next/static/css/app/page.css | grep -c "bg-white"

# Should return > 0 (classes found)

# Check for specific utility classes
curl -s http://localhost:3000/_next/static/css/app/page.css | grep -E "(rounded-xl|backdrop-blur|border-gray)"
```

### 8. Performance Check
```bash
# Bundle size analysis
npm run build

# Check output:
# - Each page bundle size
# - No unnecessary CSS
# - Images optimized
```

### 9. Accessibility Validation
- [ ] Color contrast >= 4.5:1 for text
- [ ] Alt text on images
- [ ] Semantic HTML (h1, h2, h3 hierarchy)
- [ ] ARIA labels where needed
- [ ] Keyboard navigation working
- [ ] Focus states visible

### 10. Code Quality Checks

**TypeScript:**
```bash
npm run build
# Should have 0 type errors
```

**ESLint:**
```bash
npm run lint
# Should have 0 errors (warnings acceptable)
```

**Component Structure:**
- [ ] Components properly exported
- [ ] Props typed correctly
- [ ] No unused imports
- [ ] Consistent naming conventions
- [ ] Components properly documented

## Validation Summary Template

```
Design Validation Report
========================

Date: [DATE]
Branch: feat/integrate-ai-agent

Visual Design:
- Hero Section: ✓ PASS / ✗ FAIL
- About Section: ✓ PASS / ✗ FAIL
- Services Section: ✓ PASS / ✗ FAIL
- [Other sections...]

Color Palette: ✓ PASS / ✗ FAIL
Typography: ✓ PASS / ✗ FAIL
Spacing: ✓ PASS / ✗ FAIL

Responsive:
- Mobile: ✓ PASS / ✗ FAIL
- Tablet: ✓ PASS / ✗ FAIL
- Desktop: ✓ PASS / ✗ FAIL

Code Quality:
- TypeScript: ✓ PASS / ✗ FAIL
- ESLint: ✓ PASS / ✗ FAIL
- CSS Generated: ✓ PASS / ✗ FAIL

Issues Found:
1. [Issue description]
2. [Issue description]

Overall Status: ✓ APPROVED / ⚠ NEEDS FIXES
```

## Related Commands
- `/pixel-perfect` - Detailed pixel-by-pixel comparison
- `/review-code` - Code quality and architecture review
- `/bug-fixes` - Identify and list bugs
- `/validate-project` - Full project validation

## Notes
- Stitch design files stored in Stitch project: "Codewinglet Home Page Redesign"
- Implementation branch: feat/integrate-ai-agent
- All functionality and content preserved from original
