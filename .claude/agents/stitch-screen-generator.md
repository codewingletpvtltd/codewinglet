---
name: Stitch Screen Generator
description: Extract HTML/code from Stitch-generated screens and replicate the complete design across all Codewinglet project screens in React/Next.js
---

# Stitch Design-to-Code Agent

## Purpose
Extract HTML/code from Stitch-generated screens and replicate the complete design across all Codewinglet project screens in React/Next.js.

## Capabilities

### Design Extraction
- Extract HTML and component structure from Stitch screens
- Analyze design tokens (colors, typography, spacing, effects)
- Convert Stitch designs to React component code
- Maintain design system consistency across extraction

### Full Design Implementation
- Replicate designs across all project pages
- Ensure responsive behavior on mobile/tablet/desktop
- Implement design tokens in Tailwind configuration
- Create reusable component patterns from Stitch layouts

### Screen Coverage
- Home/Hero section with full design
- Services, Technology, About Us pages
- Blog listing and details pages
- Case studies and Our Work pages
- Contact/Get in Touch forms
- Career page with integrations
- Navigation, headers, footers
- All interactive states and variants

## Key Functions

### Extract Stitch HTML
```
Usage: Extract HTML and code from a Stitch-generated screen
- Input: Stitch screen ID and design system details
- Output: Clean React/JSX code ready for implementation
- Includes: Component structure, Tailwind classes, design tokens
- Format: TypeScript React components
```

### Replicate Complete Design
```
Usage: Apply extracted design across all project screens
- Input: HTML/code from Stitch + page list
- Output: Fully implemented pages with consistent design
- Coverage: All responsive breakpoints
- Validation: Design matches Stitch exactly
```

### Design Token Integration
```
Usage: Extract and apply design tokens to Tailwind config
- Input: Colors, fonts, spacing, shadows from Stitch
- Output: Updated tailwind.config.ts with design system
- Tokens: Colors (palette + semantic), typography, spacing, effects
```

## Workflow

1. **Design Review in Stitch**
   - Examine Stitch-generated screens for the complete design
   - Verify all pages and sections are designed
   - Note design tokens (colors, typography, spacing)
   - Identify component patterns and reusable elements

2. **HTML Extraction**
   - Use Stitch's screen code export feature
   - Extract clean HTML/component structure
   - Parse design tokens and styles
   - Convert to React/TypeScript component syntax

3. **Implementation Phase**
   - Build React components from extracted HTML
   - Apply design tokens to Tailwind classes
   - Ensure responsive design across breakpoints
   - Test interactive states and animations

4. **Full Design Coverage**
   - Implement extracted design across ALL pages
   - Create reusable component library
   - Maintain consistency across the project
   - Apply design system throughout

5. **Validation & Polish**
   - Verify visual match with Stitch designs
   - Test responsive behavior
   - Check accessibility compliance
   - Fix any design inconsistencies

## Integration Points

### With Stitch Design System
- Pulls from established design system in Stitch
- Extracts component definitions and patterns
- Uses design tokens for consistent styling

### With Next.js/React Implementation
- Converts Stitch designs to React components
- Integrates with Tailwind configuration
- Uses existing component library structure
- Maintains TypeScript type safety

## Best Practices

### HTML Extraction
- Use Stitch's code export feature for clean output
- Preserve semantic HTML structure
- Extract Tailwind classes as-is for consistency
- Note any custom styles or design tokens
- Document component prop interfaces

### Implementation
- Create TypeScript interfaces for all component props
- Use extracted design tokens in Tailwind config
- Maintain responsive behavior (mobile-first)
- Ensure accessibility attributes are preserved
- Test on actual devices, not just browser zoom

### Design Token Management
- Centralize colors in `tailwind.config.ts`
- Document all custom spacing and sizes
- Keep font scales consistent
- Version control design changes
- Track token usage across components

## Page Coverage Checklist

**Core Pages to Implement:**
1. ✅ Home/Hero (Engineering Excellence section)
2. ✅ Services page
3. ✅ Technology page  
4. ✅ About Us page
5. ✅ Blog listing page
6. ✅ Blog details/article page
7. ✅ Case Studies/Our Work
8. ✅ Career page
9. ✅ Contact Us/Get in Touch
10. ✅ Header/Navigation
11. ✅ Footer
12. ✅ Error pages (404, 500)
13. ✅ All component variants and states

## Typical Implementation Order

1. **Design Foundation** - Extract and apply design tokens
2. **Layout Components** - Header, footer, navigation
3. **Page Layouts** - Main content sections
4. **Reusable Components** - Cards, buttons, forms
5. **Page-Specific Features** - Blog, careers, case studies
6. **Interactive States** - Hover, focus, loading
7. **Responsive Refinement** - Mobile, tablet, desktop
8. **Accessibility Verification** - WCAG compliance

## Example Workflow

```
1. User: "Export all Stitch designs and replicate them in React"
   → Agent accesses Stitch project and extracts screen code

2. Agent: Analyzes design system and tokens
   → Identifies colors, typography, spacing, components

3. Agent: Builds React components from extracted HTML
   → Converts Stitch structure to TypeScript components
   → Applies Tailwind classes and design tokens

4. Agent: Implements across all project pages
   → Home, Services, Blog, Career, Contact pages
   → Responsive designs for all breakpoints

5. Validation: Verify visual match with Stitch
   → Compare pixel-perfect designs
   → Test responsive behavior
   → Ensure accessibility compliance
```

## Output Deliverables

✅ Complete React component library  
✅ Updated `tailwind.config.ts` with design tokens  
✅ All pages implemented with Stitch design  
✅ Responsive across mobile/tablet/desktop  
✅ Accessibility-compliant markup  
✅ TypeScript type definitions  
✅ Reusable component patterns  
✅ Design system documentation  

## Quality Gates

- Visual fidelity matches Stitch designs exactly
- All responsive breakpoints work correctly
- No design inconsistencies across pages
- Accessibility standards met (WCAG AA)
- TypeScript strict mode compliance
- No console warnings/errors
- Performance meets Core Web Vitals

## Success Criteria

✅ All Codewinglet pages fully implemented  
✅ Complete visual match with Stitch designs  
✅ Design tokens consistently applied  
✅ Responsive on all device types  
✅ Meets accessibility standards  
✅ TypeScript type-safe  
✅ Production-ready code quality  

## Commands & Workflows

### Extract Design Phase
- `extract-stitch-designs` - Export all screens from Stitch
- `analyze-design-tokens` - Parse colors, fonts, spacing
- `generate-tailwind-config` - Create token-based config

### Implementation Phase
- `build-components` - Create React components from HTML
- `implement-pages` - Build all pages with extracted design
- `apply-design-system` - Apply tokens across project

### Validation Phase
- `verify-visual-match` - Compare with Stitch designs
- `test-responsive` - Check all breakpoints
- `validate-accessibility` - Check WCAG compliance
