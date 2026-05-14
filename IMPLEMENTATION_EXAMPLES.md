# Implementation Examples - Stitch Components

## Quick Start Usage

### Basic Home Page Implementation

```typescript
// src/app/(public)/page.tsx
'use client';

import {
  HeroSection,
  AboutUs,
  OurServices,
  Technology,
  Industries,
  OurWorkProcess,
  ContactUs,
} from '@codewinglet/modules/Home';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Technology />
      <Industries />
      <OurWorkProcess />
      <ContactUs />
    </main>
  );
}
```

---

## Component-Specific Examples

### 1. HeroSection Examples

#### Example 1: Default Configuration
```typescript
import { HeroSection } from '@codewinglet/modules/Home';

export default function Home() {
  return <HeroSection />;
}
```

#### Example 2: Custom Content
```typescript
<HeroSection
  badge="AI-POWERED SOLUTIONS"
  title="Transform Your Business with AI"
  description="Leverage cutting-edge artificial intelligence to streamline operations and drive innovation."
  ctaPrimaryText="Start Free Trial"
  ctaSecondaryText="Schedule Demo"
  ctaPrimaryHref="/free-trial"
  ctaSecondaryHref="/demo"
  statLabel="Clients Success"
  statValue="98%"
/>
```

#### Example 3: With Dynamic Image
```typescript
import { HeroSection } from '@codewinglet/modules/Home';
import { useState, useEffect } from 'react';

export default function Home() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    // Fetch from CMS or API
    fetch('/api/hero')
      .then(res => res.json())
      .then(data => setHeroData(data));
  }, []);

  if (!heroData) return <div>Loading...</div>;

  return (
    <HeroSection
      title={heroData.title}
      description={heroData.description}
      imageSrc={heroData.imageUrl}
      imageAlt={heroData.imageAlt}
    />
  );
}
```

---

### 2. AboutUs Examples

#### Example 1: Default Configuration
```typescript
<AboutUs />
```

#### Example 2: Custom Stats with Analytics
```typescript
<AboutUs
  title="5 Years of Excellence"
  description="Since our founding, we've been committed to delivering world-class software solutions that transform businesses."
  stats={[
    { number: 150, label: 'Happy Clients' },
    { number: 5, label: 'Years in Business' },
    { number: 1200, label: 'Projects Delivered' },
    { number: 99, label: 'Client Satisfaction %' },
  ]}
/>
```

#### Example 3: With Dynamic Data
```typescript
import { AboutUs } from '@codewinglet/modules/Home';
import { useQuery } from '@tanstack/react-query';

export default function AboutSection() {
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: () => fetch('/api/stats').then(res => res.json()),
  });

  if (!stats) return null;

  return (
    <AboutUs
      stats={stats.map(item => ({
        number: item.count,
        label: item.name,
      }))}
    />
  );
}
```

---

### 3. OurServices Examples

#### Example 1: Default Services
```typescript
<OurServices />
```

#### Example 2: Custom Services with Color Variations
```typescript
<OurServices
  title="What We Offer"
  subtitle="Comprehensive solutions tailored to your industry"
  services={[
    {
      id: '1',
      icon: '🎨',
      iconBg: 'bg-blue-100',
      title: 'Brand Design',
      description: 'Create stunning visual identities that resonate with your audience.',
    },
    {
      id: '2',
      icon: '⚡',
      iconBg: 'bg-yellow-100',
      title: 'Performance',
      description: 'Optimize every millisecond for lightning-fast user experiences.',
    },
    {
      id: '3',
      icon: '🔐',
      iconBg: 'bg-red-100',
      title: 'Security',
      description: 'Enterprise-grade security built into every layer of your application.',
    },
    // ... more services
  ]}
/>
```

#### Example 3: Service Filtering Component
```typescript
'use client';

import { OurServices } from '@codewinglet/modules/Home';
import { Service } from '@codewinglet/types/home-sections';
import { useState } from 'react';

const ALL_SERVICES: Service[] = [
  // ... all services
];

export default function ServiceCatalog() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.title.toLowerCase().includes(filter));

  return (
    <div>
      <input
        type="text"
        placeholder="Filter services..."
        onChange={(e) => setFilter(e.target.value)}
        className="mb-8 p-2 border rounded-lg"
      />
      <OurServices services={filtered} />
    </div>
  );
}
```

---

### 4. Technology Examples

#### Example 1: Default Stack
```typescript
<Technology />
```

#### Example 2: Enterprise Tech Stack
```typescript
<Technology
  title="Enterprise Technology Ecosystem"
  categories={[
    {
      id: 'web',
      name: 'Web Technologies',
      items: [
        { name: 'React.js', logo: '/logos/react.svg' },
        { name: 'Vue.js', logo: '/logos/vue.svg' },
        { name: 'Angular', logo: '/logos/angular.svg' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend Services',
      items: [
        { name: 'Node.js', logo: '/logos/nodejs.svg' },
        { name: 'Java', logo: '/logos/java.svg' },
        { name: 'Go', logo: '/logos/go.svg' },
      ],
    },
    {
      id: 'devops',
      name: 'DevOps & Infrastructure',
      items: [
        { name: 'Kubernetes', logo: '/logos/k8s.svg' },
        { name: 'Docker', logo: '/logos/docker.svg' },
        { name: 'Terraform', logo: '/logos/terraform.svg' },
      ],
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      items: [
        { name: 'TensorFlow', logo: '/logos/tensorflow.svg' },
        { name: 'PyTorch', logo: '/logos/pytorch.svg' },
        { name: 'OpenAI', logo: '/logos/openai.svg' },
      ],
    },
  ]}
/>
```

#### Example 3: With Analytics
```typescript
'use client';

import { Technology } from '@codewinglet/modules/Home';
import { useEffect } from 'react';

export default function TechShowcase() {
  useEffect(() => {
    // Track which tech categories users view
    const handleCategoryChange = (category: string) => {
      console.log(`User viewed ${category}`);
      // Send to analytics
    };
  }, []);

  return <Technology />;
}
```

---

### 5. Industries Examples

#### Example 1: Default Industries
```typescript
<Industries />
```

#### Example 2: Industry-Specific Navigation
```typescript
'use client';

import { Industries } from '@codewinglet/modules/Home';
import Link from 'next/link';
import { useState } from 'react';

export default function IndustryShowcase() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    { id: 'fintech', name: 'FinTech', icon: '💳' },
    { id: 'health', name: 'Healthcare', icon: '🏥' },
    { id: 'ecom', name: 'E-commerce', icon: '🛒' },
    { id: 'saas', name: 'SaaS', icon: '☁️' },
    { id: 'enterprise', name: 'Enterprise', icon: '🏢' },
  ];

  return (
    <div>
      <Industries industries={industries} />
      {selectedIndustry && (
        <Link href={`/industries/${selectedIndustry}`}>
          View {selectedIndustry} solutions
        </Link>
      )}
    </div>
  );
}
```

---

### 6. OurWorkProcess Examples

#### Example 1: Default Process
```typescript
<OurWorkProcess />
```

#### Example 2: Custom Methodology
```typescript
<OurWorkProcess
  title="Our Agile Methodology"
  steps={[
    {
      number: 1,
      title: 'Requirements Gathering',
      description: 'Understand your vision and convert it into actionable requirements.',
    },
    {
      number: 2,
      title: 'Architecture Design',
      description: 'Design scalable, maintainable system architecture.',
    },
    {
      number: 3,
      title: 'Sprint Development',
      description: 'Two-week sprints with daily standups and continuous feedback.',
    },
    {
      number: 4,
      title: 'Quality Assurance',
      description: 'Automated and manual testing for maximum coverage.',
    },
    {
      number: 5,
      title: 'Deployment & Support',
      description: '24/7 monitoring and continuous improvement.',
    },
  ]}
/>
```

#### Example 3: Interactive Process Timeline
```typescript
'use client';

import { OurWorkProcess } from '@codewinglet/modules/Home';
import { useState } from 'react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    // ... process steps
  ];

  return (
    <div>
      <OurWorkProcess steps={steps} />
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3>Step {activeStep + 1}: {steps[activeStep].title}</h3>
        <p>{steps[activeStep].description}</p>
      </div>
    </div>
  );
}
```

---

### 7. ContactUs Examples

#### Example 1: Default Form
```typescript
<ContactUs />
```

#### Example 2: With Email Integration
```typescript
import { ContactUs } from '@codewinglet/modules/Home';
import { ContactFormData } from '@codewinglet/types/home-sections';

export default function ContactSection() {
  const handleSubmit = async (formData: ContactFormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
  };

  return (
    <ContactUs
      title="Get in Touch"
      description="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      submitButtonText="Send Message"
      onSubmit={handleSubmit}
    />
  );
}
```

#### Example 3: With CRM Integration
```typescript
'use client';

import { ContactUs } from '@codewinglet/modules/Home';
import { ContactFormData } from '@codewinglet/types/home-sections';
import { toast } from 'sonner';

export default function ContactWithCRM() {
  const handleSubmit = async (formData: ContactFormData) => {
    try {
      // Save to CRM (HubSpot, Salesforce, etc.)
      const crmResponse = await fetch('/api/crm/contact', {
        method: 'POST',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // Send confirmation email
      await fetch('/api/email/confirmation', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          name: formData.firstName,
        }),
      });

      toast.success('Message sent successfully!');
      return crmResponse.json();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      throw error;
    }
  };

  return <ContactUs onSubmit={handleSubmit} />;
}
```

#### Example 4: Multi-Step Form
```typescript
'use client';

import { ContactUs } from '@codewinglet/modules/Home';
import { ContactFormData } from '@codewinglet/types/home-sections';
import { useState } from 'react';

export default function MultiStepContact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});

  const handleSubmit = async (data: ContactFormData) => {
    setFormData(prev => ({ ...prev, ...data }));

    if (step === 1) {
      setStep(2);
      return;
    }

    // Submit complete form
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <div className="mb-4">Step {step} of 2</div>
      <ContactUs onSubmit={handleSubmit} />
      {step > 1 && (
        <button onClick={() => setStep(1)} className="mt-4">
          Back
        </button>
      )}
    </div>
  );
}
```

---

## Advanced Patterns

### Global Configuration

Create a configuration file for consistent customization:

```typescript
// src/config/home-sections.ts
import { 
  HeroSectionProps,
  AboutUsProps,
  OurServicesProps,
  TechnologyProps,
  IndustriesProps,
  OurWorkProcessProps,
  ContactUsProps,
} from '@codewinglet/types/home-sections';

export const HOME_SECTION_CONFIG = {
  hero: {
    badge: 'ENGINEERING EXCELLENCE',
    ctaPrimaryText: 'Get Started',
    ctaPrimaryHref: '/contact-us',
  } as HeroSectionProps,

  about: {
    title: 'Building the Future of Tech',
    stats: [
      { number: 50, label: 'Team Members' },
      { number: 10, label: 'Years Experience' },
      { number: 200, label: 'Projects Completed' },
      { number: 150, label: 'Clients Served' },
    ],
  } as AboutUsProps,

  // ... more sections
};

// Usage:
import { HOME_SECTION_CONFIG } from '@codewinglet/config/home-sections';

<HeroSection {...HOME_SECTION_CONFIG.hero} />
```

### Feature Flags for A/B Testing

```typescript
// src/lib/feature-flags.ts
export function getComponentVersion(component: string): 'old' | 'new' {
  const flag = process.env[`NEXT_PUBLIC_${component.toUpperCase()}_VERSION`];
  return flag === 'new' ? 'new' : 'old';
}

// Usage in page:
'use client';

import { getComponentVersion } from '@codewinglet/lib/feature-flags';
import HeroSectionOld from '@codewinglet/modules/Home/HeroSection/HeroSection.old';
import HeroSectionNew from '@codewinglet/modules/Home/HeroSection/HeroSection.new';

export default function Home() {
  const heroVersion = getComponentVersion('hero');

  const HeroComponent = heroVersion === 'new' ? HeroSectionNew : HeroSectionOld;

  return <HeroComponent />;
}
```

### Error Boundary

```typescript
// src/components/ErrorBoundary.tsx
'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Section error:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

// Usage:
import { ErrorBoundary } from '@codewinglet/components/ErrorBoundary';

<ErrorBoundary>
  <HeroSection />
</ErrorBoundary>
```

### With Analytics

```typescript
// src/lib/analytics.ts
export function trackSectionView(section: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      section_name: section,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackFormSubmission(formName: string, data: any) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      timestamp: new Date().toISOString(),
    });
  }
}

// Usage:
import { trackFormSubmission } from '@codewinglet/lib/analytics';
import { ContactUs } from '@codewinglet/modules/Home';
import { ContactFormData } from '@codewinglet/types/home-sections';

export default function Contact() {
  const handleSubmit = (formData: ContactFormData) => {
    trackFormSubmission('contact_form', formData);
    // ... submit logic
  };

  return <ContactUs onSubmit={handleSubmit} />;
}
```

---

## Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image with proper sizing
import Image from 'next/image';

<Image
  src={imageSrc}
  alt={imageAlt}
  width={800}
  height={600}
  priority={true}  // For hero image
  quality={75}     // Optimize quality
  placeholder="blur"  // Add blur placeholder
  blurDataURL="..." // Optional: add blurred base64
/>
```

### Code Splitting

```typescript
// src/modules/Home/index.tsx
export { default as HeroSection } from './HeroSection/HeroSection';

// Dynamic imports for below-the-fold sections:
import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('./AboutUs/AboutUs'), {
  loading: () => <div>Loading...</div>,
});

const OurServices = dynamic(() => import('./OurServices/OurServices'));
const Technology = dynamic(() => import('./Technology/Technology'));
```

### Lazy Loading

```typescript
'use client';

import { useInView } from 'react-intersection-observer';
import { OurServices } from '@codewinglet/modules/Home';

export default function LazyServices() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && <OurServices />}
    </div>
  );
}
```

---

## Testing Examples

### Unit Tests

```typescript
// src/modules/Home/AboutUs/__tests__/AboutUs.test.tsx
import { render, screen } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs', () => {
  it('renders with default props', () => {
    render(<AboutUs />);
    expect(screen.getByText('Building the Future of Tech')).toBeInTheDocument();
  });

  it('displays all stats', () => {
    render(<AboutUs />);
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Team Members')).toBeInTheDocument();
  });

  it('accepts custom stats', () => {
    const customStats = [{ number: 100, label: 'Custom Stat' }];
    render(<AboutUs stats={customStats} />);
    expect(screen.getByText('100+')).toBeInTheDocument();
  });
});
```

### Integration Tests

```typescript
// src/app/__tests__/home.integration.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../page';

describe('Home Page Integration', () => {
  it('renders all sections in correct order', () => {
    render(<HomePage />);
    
    const sections = [
      'ENGINEERING EXCELLENCE',
      'Building the Future of Tech',
      'Tailored Services',
      'Our Technology Stack',
      'Industries We Empower',
      'Our Work Process',
      'Ready to start',
    ];

    sections.forEach(section => {
      expect(screen.getByText(new RegExp(section, 'i'))).toBeInTheDocument();
    });
  });

  it('form submission works', async () => {
    render(<HomePage />);
    
    const submitButton = screen.getByText('Send Message');
    expect(submitButton).toBeInTheDocument();
  });
});
```

