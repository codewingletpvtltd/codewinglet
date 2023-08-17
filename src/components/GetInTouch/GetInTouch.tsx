import SectionHeader from '../SectionHeader/SectionHeader';
import { Form, Info } from './components';
import { info } from './constants';

const GetInTouch = () => (
  <div className='max-w-screen-xl mx-[20px] bg-white shadow-[1px_1px_29px_0_rgba(0,0,0,0.08)] md:mx-[38px] xl:mx-auto px-[20px] py-[35px] grid grid-cols-1 md:grid-cols-3 gap-[10px] rounded-[10px]'>
    <div className='md:col-span-1'>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Get In</strong> Touch
          </>
        }
        description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <div className='mt-[34px] mb-[58px] md:mb-0 [&>:nth-child(even)]:my-[30px]'>
        {info.map((data, index) => (
          <Info key={`Info-${data.id}-${index}`} {...data} />
        ))}
      </div>
    </div>
    <Form />
  </div>
);

export default GetInTouch;
