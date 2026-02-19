import Benefits from './Benefits/Benefits';
import CareerMenu from './CareerMenu/CareerMenu';
import CurrentOpenings from './CurrentOpenings';
import Opportunity from './Opportunity/Opportunity';
import OurHiringProcess from './OurHiringProcess';
import OurTeam from './OurTeam/OurTeam';
import WorkLife from './WorkLife/WorkLife';

const Career = () => (
  <>
    <CareerMenu />
    <Opportunity />
    <CurrentOpenings />
    <WorkLife />
    <Benefits />
    <OurHiringProcess />
    <OurTeam />
  </>
);

export default Career;
