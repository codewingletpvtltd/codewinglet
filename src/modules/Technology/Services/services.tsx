'use client';

import { servicesData } from './constants';
import ServiceCard from './ServiceCard';
import ServiceTitle from './ServiceTitle';

const Services: React.FC = () => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40'
      id='AngularServices'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative'>
        <div className='lg:flex 2xl:gap-24 gap-12'>
          <ServiceTitle />

          <div className='2xl:w-[655px] lg:w-[680px] lg:mt-0 mt-[50px]'>
            <div className='lg:gap-[30px] md:gap-10 gap-5 relative'>
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services;
