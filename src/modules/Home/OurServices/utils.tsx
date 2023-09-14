import Image from 'next/image';
import {
  BeDev,
  CustomDev,
  FeDev,
  Hire,
  MobileApp,
  ProjectConsulting,
  QaTest,
  Support,
  UiLib,
  UiUxDev,
  WebApp,
  WebDesign,
  multiTenatSystem,
} from '@codewinglet/assets';

export const services = [
  {
    icon: <Image src={ProjectConsulting} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightOrange',
    title: 'Project Consulting',
    content:
      'Our project consulting services provide valuable insights and expertise to help you make informed decisions, optimise processes, and achieve successful outcomes. Gain a competitive edge and',
  },
  {
    icon: <Image src={multiTenatSystem} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-culturedWhite',
    title: 'Multi Tenant System',
    content:
      'As seasoned specialists in multi-tenant system development, we possess the expertise to create content tailored to your specific needs. Trust us to deliver a seamless and scalable solution that',
  },
  {
    icon: <Image src={WebApp} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightGreen',
    title: 'Web Application Development',
    content:
      'Our expert web application development services combine cutting-edge technologies and innovative solutions to create high-performance, user-friendly web applications. Boost your online',
  },
  {
    icon: <Image src={MobileApp} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightOrange',
    title: 'Mobile Application Development',
    content:
      'Our expert team of developers is dedicated to creating intuitive and visually stunning mobile applications that seamlessly integrate with your existing systems, empowering you to engage and connect',
  },
  {
    icon: <Image src={FeDev} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-culturedWhite',
    title: 'Frontend development',
    content:
      'Our project consulting services provide valuable insights and expertise to help you make informed decisions, optimise processes, and achieve successful outcomes. Gain a competitive edge and',
  },
  {
    icon: <Image src={BeDev} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightGreen',
    title: 'Backend Development',
    content:
      'Our experienced backend developers leverage their expertise in various programming languages and frameworks to build efficient and reliable server-side systems that drive your applications',
  },
  {
    icon: <Image src={QaTest} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightOrange',
    title: 'Qa & Testing',
    content:
      'Our dedicated team of QA experts utilizes industry-leading tools and methodologies to conduct thorough testing, identifying and resolving any potential issues to deliver a seamless user experience',
  },
  {
    icon: <Image src={Support} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-culturedWhite',
    title: 'Support & Maintenance',
    content:
      'Our dedicated support team is available around the clock to address any technical issues, perform regular updates, and optimize your systems, ensuring uninterrupted performance and customer',
  },
  {
    icon: <Image src={CustomDev} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightGreen',
    title: 'Custom Software Development',
    content:
      'Our experienced team of developers leverages the latest technologies and agile methodologies to create scalable and secure software solutions that streamline your operations and propel your business',
  },
  {
    icon: <Image src={WebDesign} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightOrange',
    title: 'Web Designing',
    content:
      'Our expert web designers create unique and responsive interfaces that engage users, optimize conversion rates, and reflect your brand identity, ensuring a seamless and memorable browsing',
  },
  {
    icon: <Image src={UiLib} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-culturedWhite',
    title: 'UI Component Library',
    content:
      'Our experienced team of designers and developers meticulously design and develop UI components that not only enhance the aesthetics of your applications but also improve consistency',
  },
  {
    icon: <Image src={UiUxDev} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightGreen',
    title: 'UI/UX Development',
    content:
      'Our skilled team of UI/UX developers employs a human-centered approach to create engaging and seamless user experiences, ensuring your digital products leave a lasting impression and drive user',
  },
  {
    icon: <Image src={Hire} alt='Hire' loading='eager' />,
    iconBgColor: 'bg-lightOrange',
    title: 'Hire Dedicated Team and Developer',
    content:
      'Hire a dedicated software development team with domain expertise, industry best practices, and technological excellence to transform your business idea into reality. They will work as your extended',
  },
];
