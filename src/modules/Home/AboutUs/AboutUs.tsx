import {
  AboutUsBottomRightSVG,
  AboutUsLeftSVG,
  CompletedProjectSVG,
  CompletionRateSVG,
  CustomersSVG,
  ExperienceSVG,
} from '@codewinglet/assets/AboutUs';
import { Button, SectionHeader, Typography } from '@codewinglet/components';
import AboutUsCard from './components/AboutUsCard';

const AboutUs = () => (
  <section className='py-[62px] lg:py-[83px] xl:py-[132px] relative'>
    <AboutUsLeftSVG className='absolute right-[40px] top-[23px] h-[14.2px] w-[14.2px] lg:hidden 2xl:block 2xl:h-[24px] 2xl:w-[24px] 2xl:right-[revert] 2xl:left-[116px] 2xl:top-[345px]' />
    <AboutUsBottomRightSVG className='absolute bottom-[46px] right-[20px] lg:hidden 2xl:block 2xl:right-[90px] 2xl:top-[327px] 2xl:h-[87px] 2xl:w-[87px]' />
    <section className='max-w-screen-xl mx-auto px-[20px] xl:p-0 lg:px-[36px] lg:flex lg:gap-[20px] xl:gap-[30px] 2xl:gap-[35px]'>
      <div className='grid grid-cols-2  lg:min-w-[466px] xl:min-w-[541px] relative gap-[19px] [&>.aboutUsCard:nth-child(2)]:relative [&>.aboutUsCard:nth-child(2n)]:top-[15px] lg:[&>.aboutUsCard:nth-child(2n)]:top-[20px] md:max-w-[466px] md:mx-auto 2xl:min-w-[618px] 2xl:gap-[30px]'>
        <AboutUsCard
          icon={<ExperienceSVG />}
          number={5}
          text='Year Of Experience'
          borderClassName='bg-[#3F78E0]'
        />
        <AboutUsCard
          icon={<CustomersSVG />}
          number={400}
          text='Happy Customers'
          borderClassName='bg-[#D95D37]'
        />
        <AboutUsCard
          icon={<CompletionRateSVG />}
          number={100}
          numberSuffix='%'
          text='Completion Rate'
          borderClassName='bg-[#11AF00]'
        />
        <AboutUsCard
          icon={<CompletedProjectSVG />}
          number={1000}
          text='Completed Project'
          borderClassName='bg-[#5E5FDC]'
        />
      </div>
      <div className='mt-[45px] lg:m-0 2xl:mt-[86px]'>
        <SectionHeader
          title={
            <>
              <strong className='font-[800]'>About</strong> Us
            </>
          }
          description='Personalized Application Development & IT Guidance Corporation'
          headingClassName='lg:!text-[32px] xl:!text-[50px]'
          descriptionClassName='font-500'
        />
        <Typography
          variant='subtitle2'
          className='!text-lightBlack py-[20px] lg:!text-[18px] xl:py-[30px]'
        >
          Code Winglet Pvt. Ltd. excels as a globally recognized, award-laden
          software and IT consulting firm, boasting decades of digitally
          transforming businesses.
          <br />
          <br />
          Our speciality lies in providing high-performing tech solutions, built
          on deep industry insights and cooperative collaboration. We fuel
          client growth by leveraging our innovation ecosystem to facilitate
          knowledge transfers, thereby fostering perpetual advancement.
        </Typography>
        <Button>Read More</Button>
      </div>
    </section>
  </section>
);

export default AboutUs;
