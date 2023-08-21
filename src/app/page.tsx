'use client';

import {
  ClientTestimonials,
  Consultant,
  CurrentOpenings,
  OurPortfolio,
} from '@codewinglet/components';

export default function Home() {
  return (
    <div>
      <CurrentOpenings />
      <OurPortfolio />
      <ClientTestimonials />
      <Consultant />
    </div>
  );
}
