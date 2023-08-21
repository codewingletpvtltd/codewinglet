import Image from 'next/image';
import {
  reactSVG,
  angularPNG,
  vuePNG,
  nodeJSSVG,
  GraphQLPNG,
  nextJSPNG,
  typescript,
  javascriptPNG,
} from '@codewinglet/assets';

const Technologies = () => (
  <div className='w-full flex justify-center items-center overflow-hidden lg:w-[951px] lg:mx-auto xl:w-[1109px] 2xl:w-[1269px]'>
    <div className='flex justify-between min-w-[628px] mt-[54px] mb-[50px] md:w-[728px] lg:w-full lg:mt-[60px] 2xl:mt-[131px]'>
      <div className='h-[55px] w-[55px] rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#DFFBFF]'>
        <Image
          alt=''
          src={reactSVG}
          className='h-[35px] w-[35px] xl:h-[52px] xl:w-[52px] 2xl:h-[56px] 2xl:w-[56px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#E1F3EB]'>
        <Image
          alt=''
          src={vuePNG}
          className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px] 2xl:h-[50px] 2xl:w-[50px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#F9E5E5]'>
        <Image
          alt=''
          src={angularPNG}
          className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px] 2xl:h-[45px] 2xl:w-[45px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#EAF0E8]'>
        <Image
          alt=''
          src={nodeJSSVG}
          className='h-[35px] w-[35px] xl:h-[50px] xl:w-[50px] 2xl:h-[55px] 2xl:w-[55px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#FFEAF8]'>
        <Image
          alt=''
          src={GraphQLPNG}
          className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px] 2xl:h-[50px] 2xl:w-[50px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#F1F1F1]'>
        <Image
          alt=''
          src={nextJSPNG}
          className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px] 2xl:h-[47px] 2xl:w-[47px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#DFEDF6]'>
        <Image
          alt=''
          src={typescript}
          className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px] 2xl:h-[47px] 2xl:w-[47px]'
        />
      </div>
      <div className='h-[55px] w-[55px]  rounded-full flex items-center justify-center xl:h-[80px] xl:w-[80px] 2xl:h-[86px] 2xl:w-[86px] bg-[#FFF7D0]'>
        <Image
          alt=''
          src={javascriptPNG}
          className='h-[40px] w-[40px] xl:h-[53px] xl:w-[53px] 2xl:h-[63px] 2xl:w-[63px]'
        />
      </div>
    </div>
  </div>
);

export default Technologies;
