# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Codewinglet** is a Next.js 14 marketing/portfolio website for a software solutions company. It showcases services, case studies, blogs, careers, and technology expertise. The site uses modern web technologies including TypeScript, React, Tailwind CSS, and Radix UI components.

## Essential Commands

### Development
- `npm run dev` — Start development server (localhost:3000)
- `npm run build` — Build for production
- `npm start` — Run production server

### Linting & Code Quality
- `npm run lint` — Run ESLint checks
- `npm run lint:fix` — Auto-fix ESLint issues

### Component Development
- `npm run storybook` — Launch Storybook on port 6006 (component development and documentation)
- `npm run build-storybook` — Build static Storybook

### Git Hooks
- Pre-commit hooks via Husky are configured (runs linting)
- Use `git commit` normally; hooks run automatically

## Architecture & Structure

### Source Directory (`src/`)

**App Router (`src/app/`)** — Next.js 14 App Router structure with page-based organization:
- Each page route has its own directory (e.g., `/about-us`, `/blogs`, `/career`, `/contact-us`)
- Shared layout in `layout.tsx`, global styles in `globals.css`
- Error handling and 404 pages configured

**Modules (`src/modules/`)** — Feature-based page modules corresponding to routes:
- Each module contains components, hooks, and logic specific to that page feature
- Examples: Home, Blogs, BlogDetails, CaseStudy, Career, Service, Technology, OurWork, etc.
- Modules are organized as self-contained features

**Components (`src/components/`)** — Reusable UI components:
- Built with Radix UI primitives and Tailwind CSS
- Includes form components (TextField, Textarea, FileUpload, PhoneInputField)
- Display components (Button, Badge, Card variants, Modal, Drawer, Tabs, etc.)
- Specialized components (Blog, BlogCard, ServiceCard, ClientTestimonials, Slider, etc.)
- All components are indexed in `index.ts` for easy imports

**Services (`src/services/`)** — API integration and data fetching:
- `Blogs/` — Blog data service (fetches from Airtable or API)
- One service directory per major feature that requires data

**Hooks (`src/hooks/`)** — Custom React hooks:
- `useScreenSize()` — Screen size breakpoint detection
- `useWindowSize()` — Window dimension tracking
- `useUrlParamState()` — URL parameter state management

**Utils (`src/utils/`)** — Utility functions:
- `cn()` / `getClassNames()` — Tailwind class merging (clsx/classnames wrapper)
- `formatDate()` — Date formatting utilities
- `formatTag()` — Tag string formatting
- `calculateReadTime()` — Blog read time estimation
- `groupedCode()` — Code block grouping logic

**Constants (`src/constants/`)** — Global constants:
- `colors.ts` — Color palette definitions
- `mediaQueryConst.ts` — Tailwind breakpoint constants
- `constants.ts` — General app constants

**Types (`src/types/`)** — TypeScript type definitions:
- `blog.ts` — Blog-related types and interfaces
- Extend as needed for new features

**Assets (`src/assets/`)** — SVG icons and media:
- Icons organized by feature (e.g., SocialMedia icons, Service icons)
- Exported as React components

### Configuration Files

**Tailwind (`tailwind.config.ts`)** — Custom design system:
- Custom typography scale (h1–h6, subtitle, paragraph, tag variants with weights)
- Extended color palette (grays, blues, purples, semantic colors)
- Custom animations (rotateInfinite, sliderInfinite)
- Custom background images and gradients for hero sections

**ESLint (`.eslintrc.json`)** — Code quality rules:
- Single quotes, semicolons required
- Import ordering enforced (builtin → external → internal → relative)
- No console/debugger in production
- Storybook plugin enabled

**Next.js (`next.config.js`)** — Configuration:
- Image optimization with remote patterns (Strapi S3 bucket, localhost)
- Airtable API token configured as environment variable

## Data & External Integrations

- **Airtable** — Blog and content data source (API token in env vars)
- **Strapi S3** — Remote image hosting (`strapi-cw-assets.s3.us-east-1.amazonaws.com`)
- **PeopleHum** — Job listings integration (script for careers page)

## Common Development Patterns

### Adding a New Page
1. Create route directory in `src/app/` (e.g., `src/app/new-page/page.tsx`)
2. Create corresponding module in `src/modules/` with feature components
3. Import and use module components in the page file
4. Add global layout/navigation logic in `src/app/layout.tsx` if needed

### Creating a Component
1. Create folder in `src/components/ComponentName/`
2. Create `ComponentName.tsx` (main component file)
3. Optionally add `.stories.tsx` for Storybook documentation
4. Export from `src/components/index.ts`
5. Use Tailwind classes with `cn()` utility for class merging

### Adding Hooks
1. Create `useHookName.ts` in `src/hooks/`
2. Export from `src/hooks/index.ts`
3. Document hook parameters and return type in JSDoc comments

### Type Safety
- All React components should accept `React.ReactNode` or specific prop interfaces
- Use TypeScript strict mode (enforce types over `any`)
- Export types for reuse across modules

## Design System & Styling

- **Font Family** — Poppins (primary), Playfair Display (display headings)
- **Color Palette** — Custom grays (50–900), semantic colors (success, error, info, warning), brand colors (blue, purple)
- **Typography Scale** — Predefined heading, subtitle, and paragraph sizes with font weights via Tailwind utilities
- **Spacing & Layout** — Tailwind grid system with custom container configuration

## Performance & Best Practices

- Use Next.js Image component for remote images to optimize loading
- Implement code splitting via dynamic imports for large modules
- Leverage Tailwind's purge to minimize CSS bundle
- Use React.memo or useMemo for expensive renders in sliders and carousels

## Browser & Device Support

- Mobile-first design approach using Tailwind breakpoints
- Responsive images via `react-photo-album` and custom responsive designs
- Test changes across mobile, tablet, and desktop viewports

## Branch & Deployment Strategy

- Main branch: `main` (production)
- Development branch: `develop` (staging)
- Feature branches: `feat/*` prefix
- Merge to `develop` for staging review, then `main` for production

## Recent Changes

- Feature: Claude Code agent integration (b60ff3c)
- Feature: Get in touch page (562fb3e)
- Feature: PeopleHum job script integration (9b50129)

## Testing & Storybook

- Storybook is configured for component development and visual testing
- Use `.stories.tsx` files to document components with different prop variations
- Test components interactively before adding to pages
