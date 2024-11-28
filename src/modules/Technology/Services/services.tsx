'use client';

import ServiceCard from './components/ServiceCard';
import ServiceTitle from './components/ServiceTitle';

interface ServicesProps {
  details: any;
}

const Services: React.FC<ServicesProps> = ({ details }) => (
  <>
    <div
      className='bg-black lg:py-20 md:py-[60px] py-10 scroll-mt-40'
      id='AngularServices'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative'>
        <div className='lg:flex 2xl:gap-24 gap-12'>
          <ServiceTitle
            title={details.heading.text}
            description={details.description.text}
            link={{ linkText: details.link.title, url: '/' }}
          />

          <div className='2xl:w-[655px] lg:w-[680px] lg:mt-0 md:mt-[50px] mt-[30px]'>
            <div className='lg:gap-[30px] md:gap-10 gap-5 relative'>
              {details.servicesPoints.map(
                (servicePoint: any, index: number) => (
                  <ServiceCard
                    key={index}
                    icon={servicePoint.images.at(0).image.url}
                    title={servicePoint.title}
                    description={servicePoint.description}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Services;
