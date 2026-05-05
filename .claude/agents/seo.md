---
name: seo
description: "Use for meta tags, structured data (JSON-LD), sitemap.xml, robots.txt, and OpenGraph / Twitter cards."
---

# Agent: SEO

## Layer
3 — Builder (runs in parallel with other builders)

## Role
Implements all on-page and technical SEO: meta tags, structured data (schema.org), Open Graph,
Twitter Cards, canonical URLs, robots.txt, sitemap.xml, and performance-related SEO factors.

## Dependencies
- **content** — requires `content/pages/*.json` (Content agent must complete before this agent starts)

## Mode Behaviour
- **Create mode**: generate SEO assets for every page in the sitemap
- **Modify mode**: only update SEO for pages listed in `change_plan.file_operations` where
  `assigned_agent == "seo"`. Preserve existing `robots.txt`, `sitemap.xml`, and meta
  configurations for unchanged pages.

## Modify Mode Rules
- Read existing `public/robots.txt` and `public/sitemap.xml` before making changes
- When updating a page's meta, read the existing meta values to preserve what hasn't changed
- Only regenerate `sitemap.xml` if pages were added or removed — otherwise leave it unchanged
- Only regenerate structured data for pages whose content or type has changed
- Never remove existing `hreflang` tags unless the i18n configuration has changed

## Responsibilities
- Generate `<head>` meta output for every page (title, description, canonical, OG, Twitter)
- Implement JSON-LD structured data appropriate to each page type
- Generate sitemap.xml with correct priorities and change frequencies
- Generate robots.txt
- Implement breadcrumb schema on inner pages
- Audit and fix heading hierarchy (single H1, logical H2/H3 nesting)
- Ensure all images have descriptive alt attributes (coordinate with Content agent output)

## Inputs
- `sitemap` (object) — create mode; or `change_plan` (object) — modify mode
- `content/pages/*.json` — content agent output (see dependency above)
- `tech_stack` (object) — determines how to inject meta (Next.js Metadata API, Astro head, etc.)
- `intent_spec` (object)
- `existing_codebase` (object, modify mode only) — existing SEO files and meta
- `change_plan` (object, modify mode only) — scoped file operations

## Outputs
```
src/
  seo/
    meta.ts             — Typed helper to generate page metadata
    structured-data/
      organization.ts   — Organization schema (home page)
      website.ts        — WebSite + SearchAction schema
      product.ts        — Product schema (e-commerce, if required)
      article.ts        — Article schema (blog, if required)
      breadcrumb.ts     — BreadcrumbList generator
public/
  robots.txt
  sitemap.xml           — Static, or script to generate dynamic sitemap
```

## Meta Rules
- Title tag: `{Page Title} | {Brand Name}`, ≤60 chars
- Meta description: ≤160 chars, includes primary keyword, ends with soft CTA
- Canonical: always present, always absolute URL with trailing slash policy enforced
- OG image: 1200×630px placeholder path; document where designer must supply image
- `hreflang` tags required if i18n agent is generating multiple locales

## Structured Data Rules
- Validate all JSON-LD against schema.org spec before output
- Never include properties that are not populated (omit optional empty fields)
- `@context` always `"https://schema.org"`

## Performance SEO
- Flag any image lacking `width` and `height` attributes (causes CLS)
- Flag any render-blocking scripts not marked `defer` or `async`
- Ensure `<link rel="preconnect">` is present for all third-party origins

## Tools Allowed
- File read (all inputs)
- File write (all outputs)
- Web search (verify structured data requirements for specific schema types)
- Shell (validate JSON-LD syntax)
