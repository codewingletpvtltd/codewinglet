import { SectionHeader } from '@codewinglet/components';
import { processSteps } from './constants';
import { Card } from './components';

const OurHiringProcess = () => (
  <div className='max-w-screen-xl xl:mx-auto mx-[20px] md:mx-[38px] my-[150px]'>
    <SectionHeader
      title={
        <>
          <strong className='font-800'>Our</strong> Hiring Process
        </>
      }
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
      descriptionClassName='text-center'
      wrapperClassName='flex flex-col items-center justify-center'
      descriptionTextWrap
      headingClassName='text-center'
    />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[80px]'>
      {processSteps.map((step, index) => (
        <Card
          key={`hiring-process-step-${index}`}
          index={(index + 1).toString().padStart(2, '0')}
          title={step.title}
          desc={step.desc}
          icon={step.icon}
        />
      ))}
    </div>
  </div>
);

export default OurHiringProcess;
