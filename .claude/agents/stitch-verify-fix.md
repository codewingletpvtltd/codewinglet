---
name: Stitch Verify & Fix
description: Automatically verify that all pages match the Stitch design exactly, detect any discrepancies, and apply fixes automatically without user intervention
---

# Stitch Verify & Fix Agent

## Purpose
Automatically verify that all pages match the Stitch design exactly, detect any discrepancies, and apply fixes automatically without user intervention. Works with any Stitch project.

## Quick Start Commands

### Main Command: Verify & Fix All
```bash
/stitch-verify-fix [project-id] [check-only|fix|watch|auto-fix]
```
**Arguments:**
- `project-id` - Your Stitch project ID (required, e.g., 7211438719497548628)
- `check-only` - Report issues only, don't fix (optional)
- `fix` - Scan and auto-fix all issues (default)
- `watch` - Monitor continuously and auto-fix (optional)
- `auto-fix` - Auto-fix without asking (optional)

**Examples:**

Verify and fix everything:
```bash
/stitch-verify-fix 7211438719497548628 fix
```

Check for issues without fixing:
```bash
/stitch-verify-fix 7211438719497548628 check-only
```

Watch mode (real-time):
```bash
/stitch-verify-fix 7211438719497548628 watch
```

Auto-fix in CI/CD:
```bash
/stitch-verify-fix 7211438719497548628 auto-fix
```

---

## Execution Workflow

### Step 1: Load Stitch Design Reference
Using provided Project ID: `7211438719497548628`
- Connects to Stitch using provided Project ID
- Extracts all screens and design specifications
- Parses HTML structure and CSS classes
- Documents all design tokens (colors, spacing, typography)
- Creates reference specification

### Step 2: Scan Current Implementation
- Reads all component files from `src/`
- Parses current HTML and classes
- Extracts design tokens from tailwind.config.ts
- Compares with Stitch reference
- Generates detailed issue report

### Step 3: Detect & Report Issues
Lists all discrepancies found:
- Missing CSS classes
- Wrong class names
- Missing design tokens
- Hardcoded colors
- Spacing differences
- Typography mismatches
- Missing components
- Structure differences
- Missing responsive classes
- Missing effects

### Step 4: Auto-Fix Issues
Automatically fixes all issues:
- Updates class names
- Applies design tokens
- Removes hardcoded values
- Adds responsive variants
- Applies effects and gradients
- Corrects layouts
- Fixes typography

### Step 5: Verify & Report
- Rebuilds project with fixes
- Runs TypeScript and ESLint
- Compares fixed code with Stitch
- Generates final report
- Shows before/after comparison

---

## General Detection & Fixes

### Issue Detection (Works for Any Project)

**Check for:**
- ✓ Missing CSS classes (compared to Stitch)
- ✓ Incorrect class names
- ✓ Missing design tokens from tailwind.config.ts
- ✓ Hardcoded color values (hex, rgb)
- ✓ Padding/margin not using spacing tokens
- ✓ Font sizes not using typography tokens
- ✓ Missing responsive breakpoints (sm:, md:, lg:)
- ✓ Missing effects (glass-card, gradients, shadows)
- ✓ Structure/layout differences vs Stitch
- ✓ Missing or incorrect opacity classes

### Auto-Fix Capabilities

1. **CSS Class Corrections**
   ```tsx
   // Before
   <div className='p-10 text-gray-700'>Content</div>
   
   // After (fixed to match Stitch)
   <div className='p-md text-on-surface-variant'>Content</div>
   ```

2. **Design Token Mapping**
   ```tsx
   // Before
   <button style={{ background: '#3525cd' }}>Click</button>
   
   // After
   <button className='bg-primary'>Click</button>
   ```

3. **Responsive Classes**
   ```tsx
   // Before
   <div className='grid grid-cols-3'>Items</div>
   
   // After
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>Items</div>
   ```

4. **Effect Application**
   ```tsx
   // Before
   <div className='bg-white p-4 rounded-lg'>Card</div>
   
   // After
   <div className='glass-card p-4 rounded-lg'>Card</div>
   ```

5. **Gradient Application**
   ```tsx
   // Before
   <section className='bg-white'>Hero</section>
   
   // After
   <section className='bg-gradient-to-br from-primary/10 via-background to-secondary/10'>Hero</section>
   ```

6. **Typography Updates**
   ```tsx
   // Before
   <h1 className='text-4xl font-bold'>Heading</h1>
   
   // After
   <h1 className='font-headline-xl text-headline-xl'>Heading</h1>
   ```

---

## Report Format (Dynamic)

```
═══════════════════════════════════════════════════════════════
  STITCH VERIFY & FIX REPORT
═══════════════════════════════════════════════════════════════

📋 Project Information
─────────────────────────────────────────────────────────────
Stitch Project ID: 7211438719497548628
Project Name: [Loaded from Stitch]
Total Screens: [N screens]
Design System: [Name from Stitch]

📊 VERIFICATION RESULTS
─────────────────────────────────────────────────────────────
Components Scanned: 12
Issues Found: 8
Issues Fixed: 8
Remaining Issues: 0

Status: ✅ ALL ISSUES FIXED & COMPLIANT

---

## Issues Found & Auto-Fixed

### 1. HeroSection.tsx ✅
Issues: 2 fixed
  - Missing responsive padding → Added pt-80 md:pt-40
  - Wrong text color → Changed to text-on-surface-variant
  
Result: ✅ FIXED

### 2. AboutUs.tsx ✅
Issues: 1 fixed
  - Hardcoded color #a855f7 → Changed to bg-secondary
  
Result: ✅ FIXED

### 3. Services.tsx ✅
Issues: 2 fixed
  - Missing glass-card effect → Added glass-card class
  - Missing grid responsive → Added grid-cols-1 md:grid-cols-3
  
Result: ✅ FIXED

### 4. Technology.tsx ✅
Issues: 1 fixed
  - Wrong spacing token → Changed p-10 to p-lg
  
Result: ✅ FIXED

### 5. ContactUs.tsx ✅
Issues: 2 fixed
  - Missing primary-gradient → Added primary-gradient class
  - Typography mismatch → Updated to font-body-lg
  
Result: ✅ FIXED

---

## Design Token Compliance

| Category | Compliant | Non-Compliant | Compliance % |
|----------|-----------|---------------|--------------|
| Colors | 95 | 0 | 100% ✅ |
| Spacing | 90 | 0 | 100% ✅ |
| Typography | 45 | 0 | 100% ✅ |
| Effects | 12 | 0 | 100% ✅ |
| Responsive | 80 | 0 | 100% ✅ |
| **TOTAL** | **322** | **0** | **100%** ✅ |

---

## Files Modified

✅ src/modules/Home/HeroSection/HeroSection.tsx (2 issues fixed)
✅ src/modules/Home/AboutUs/AboutUs.tsx (1 issue fixed)
✅ src/modules/Home/OurServices/Services.tsx (2 issues fixed)
✅ src/modules/Home/Technology/Technology.tsx (1 issue fixed)
✅ src/modules/Home/ContactUs/ContactUs.tsx (2 issues fixed)

---

## Build Verification

✅ TypeScript Compilation: 0 errors
✅ ESLint Validation: All rules passing
✅ Production Build: SUCCESS
✅ Console Check: No errors
✅ Design Token Check: 100% compliant

---

## Before & After Comparison

### HeroSection.tsx
```diff
- <section className='relative pt-10 pb-10 overflow-hidden'>
+ <section className='relative pt-80 pb-24 md:pt-40 md:pb-40 overflow-hidden'>

- <p className='text-paragraph1Light text-gray-700'>
+ <p className='text-body-lg text-on-surface-variant'>
```

### ContactUs.tsx
```diff
- <section className='py-20 bg-white'>
+ <section className='py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10'>

- <button className='px-8 py-3 rounded-full font-bold'>
+ <button className='primary-gradient text-on-primary px-xl py-md rounded-full font-label-md'>
```

---

## Quality Gate Status

All criteria met for production:
- ✅ 100% Design Token Compliance
- ✅ 0 Remaining Issues
- ✅ All Tests Passing
- ✅ Build Successful
- ✅ Matches Stitch Design Exactly

Status: ✅ **READY FOR PRODUCTION**

---

## Next Actions

The website now perfectly matches your Stitch design!

Recommended steps:
1. Review the generated report above
2. Test at http://localhost:3000
3. Deploy to staging
4. User acceptance testing
5. Deploy to production

---

## Command Syntax

```
/stitch-verify-fix <PROJECT_ID> [OPTION]

PROJECT_ID  - Your Stitch project ID (required)
OPTION      - check-only | fix | watch | auto-fix (optional, default: fix)

Examples:
  /stitch-verify-fix 7211438719497548628 fix
  /stitch-verify-fix 7211438719497548628 check-only
  /stitch-verify-fix 7211438719497548628 watch
  /stitch-verify-fix 7211438719497548628 auto-fix
```

---

## Troubleshooting

If issues remain after fixing:
1. Check Stitch project ID is correct: `/stitch-verify-fix YOUR_PROJECT_ID check-only`
2. Verify Stitch design is complete in the project
3. Run with verbose flag for detailed output
4. Check console for error messages
5. Ensure tailwind.config.ts has all required tokens

---

## How the Agent Works

The agent dynamically:
- ✅ Takes your Stitch project ID as argument
- ✅ Loads the Stitch project and extracts all designs
- ✅ Scans your codebase automatically
- ✅ Detects differences from Stitch design
- ✅ Auto-fixes all issues found
- ✅ Applies changes to files
- ✅ Rebuilds and verifies
- ✅ Works with ANY Stitch project
- ✅ Works with ANY React/Next.js codebase
