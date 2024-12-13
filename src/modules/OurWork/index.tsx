import { Suspense } from 'react';

import HeroSection from './HeroSection/HeroSection';
import ListHeading from './WorklList/ListHeading';
import WorkList from './WorklList/WorkList';

const OurWork = () => (
  <Suspense fallback={<div>Loading filter...</div>}>
    <HeroSection />
    <ListHeading />
    <WorkList />
  </Suspense>
);

export default OurWork;
