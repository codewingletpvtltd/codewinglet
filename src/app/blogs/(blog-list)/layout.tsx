import BlogSearch from '../(components)/searchbar';
import BlogCategory from '../(components)/sidebar/sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white'>
      <BlogSearch />
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 2xl:gap-[55px] gap-[30px] mt-[86px]'>
        <div className='flex pt-32'>
          <BlogCategory />
          {children}
        </div>
      </div>
    </div>
  );
}
