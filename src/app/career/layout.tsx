import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Team | Codewinglet Careers',
  description:
    'Explore exciting career opportunities at Codewinglet. Join a dynamic team where innovation, growth, and collaboration drive success. Apply today and shape your future with us!',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
