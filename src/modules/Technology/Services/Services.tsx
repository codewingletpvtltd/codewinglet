import { SectionHeader } from '@codewinglet/components';
import { getClassNames } from '@codewinglet/utils';
import { ServiceProps } from './types';
import Card from './components/Card';

const Services: React.FC<ServiceProps> = ({ services, technologyName }) => (
  <div className='mb-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto xl:mb-[100px] relative'>
    <SectionHeader
      title={
        <>
          <strong className='font-800'>{technologyName} Development</strong>{' '}
          Services?
        </>
      }
      description={`Empowering Your Projects with ${technologyName} Expertise.`}
      wrapperClassName='flex items-center justify-center flex-col'
      headingClassName='text-center'
      descriptionClassName='text-center'
      descriptionTextWrap
    />
    <div
      className={getClassNames(
        'bg-white grid grid-flow-rows md:grid-cols-2 lg:grid-cols-3 mt-[34px] mb-[50px] gap-[27px] md:gap-0',
        'md:[&>:nth-child(odd)]:border-r md:[&>:nth-child(odd)]:border-r-lightGray',
        'md:[&>:last-child]:before:h-[47px] md:[&>:last-child]:before:w-[47px] md:[&>:last-child]:before:rotate-[45deg] md:[&>:last-child]:before:border md:[&>:last-child]:before:border-lightGray md:[&>:last-child]:before:bg-white md:[&>:last-child]:before:absolute md:[&>:last-child]:before:top-[-25px] md:[&>:last-child]:before:left-[-25px]',
        'md:[&>:nth-child(4n)]:before:h-[47px] md:[&>:nth-child(4n)]:before:w-[47px] md:[&>:nth-child(4n)]:before:rotate-[45deg] md:[&>:nth-child(4n)]:before:border md:[&>:nth-child(4n)]:before:border-lightGray md:[&>:nth-child(4n)]:before:bg-white md:[&>:nth-child(4n)]:before:absolute md:[&>:nth-child(4n)]:before:top-[-25px] md:[&>:nth-child(4n)]:before:left-[-25px]',
        'lg:[&>:nth-child(4n)]:before:hidden lg:[&>:nth-child(5)]:before:h-[47px] lg:[&>:nth-child(5)]:before:w-[47px] lg:[&>:nth-child(5)]:before:rotate-[45deg] lg:[&>:nth-child(5)]:before:border lg:[&>:nth-child(5)]:before:border-lightGray lg:[&>:nth-child(5)]:before:bg-white lg:[&>:nth-child(5)]:before:absolute lg:[&>:nth-child(5)]:before:top-[-25px] lg:[&>:nth-child(5)]:before:left-[-25px]',
        '[&>:not(:first-child)]:border-t [&>:not(:first-child)]:border-t-lightGray [&>:not(:first-child)]:pt-[27px] md:[&>:not(:first-child)]:border-t-0 md:[&>:nth-child(n+3)]:border-t md:[&>:nth-child(n+3)]:border-t-lightGray',
        'lg:[&>:nth-child(3)]:!border-r-0 lg:[&>:nth-child(3)]:!border-t-0 lg:[&>:nth-child(2)]:border-x lg:[&>:nth-child(2)]:border-x-lightGray',
        'lg:[&>:nth-child(5)]:border-x lg:[&>:nth-child(5)]:border-x-lightGray'
      )}
    >
      {services.map((service, index) => (
        <Card
          key={`service-card-${index}`}
          title={service.title}
          icon={service.icon}
          desc={service.description}
        />
      ))}
    </div>
  </div>
);

export default Services;
