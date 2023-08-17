import {
  ClientTestimonials,
  Consultant,
  GoogleMap,
  OurPortfolio,
} from '@codewinglet/components';

export default function Home() {
  return (
    <div>
      <GoogleMap />
      <OurPortfolio />
      <ClientTestimonials />
      <Consultant />
    </div>
  );
}
