import { useState } from 'react';
import Accordion from './Accordion';

export default {
  component: Accordion,
};

export const Basic = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      title='React Developer'
      info={[
        { title: 'Experience: ', value: '2-4 Year' },
        { title: 'Job Type: ', value: 'Full Time' },
      ]}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      We are looking for a skilled React Developer to join our team and help us
      build innovative and user-friendly web applications. The ideal candidate
      should have a deep understanding of the React ecosystem and be able to
      work well within a collaborative environment. Your primary
      responsibilities will be to develop and maintain high-quality web
      applications and ensure the smooth integration of these applications with
      various back-end services.
    </Accordion>
  );
};
