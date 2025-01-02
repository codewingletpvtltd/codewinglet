'use client';

import { SectionHeader } from '@codewinglet/components';

const CurrentOpenings = () => (
  // TODO : comment due to not used because of new design
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 5;

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  <>
    <div
      className='bg-white lg:py-20 md:py-[60px] py-10 scroll-mt-32'
      id='jobs'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Current job openings</>}
          description='Discover Your Next Career Opportunity: Explore Our Latest Job Openings.'
          headingClassName='md:text-left text-center lg:text-h2'
          descriptionClassName='text-gray-400 md:text-left text-center md:text-subtitle2Light'
        />
        {/* TODO: New Design  */}
        {/* <div className='md:flex items-center justify-between md:mt-[55px] mt-5'>
            <div className='md:flex gap-2.5 hidden'>
              {designation.map((designation) => (
                <div key={designation.title}>
                  <Link
                    href='/'
                    className='bg-gray-50 hover:text-white hover:bg-gray-800 py-2.5 lg:px-5 px-6'
                  >
                    {designation.title}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <form action='' className='flex items-center gap-3'>
                <div className='relative'>
                  <Image
                    src='/assets/career/search.svg'
                    alt='search'
                    width={24}
                    height={24}
                    className='absolute left-5 top-[15px]'
                  />
                  <input
                    type='search'
                    placeholder='Search jobs'
                    className='border border-gray-100 py-[12px] px-5 pl-14 text-paragraph2Light placeholder:text-gray-400 placeholder:text-paragraph2Light focus:outline-none focus:border-gray-800 2xl:w-[477px] md:w-[449px] w-full lg:block md:hidden block'
                  />
                </div>

                <Button
                  variant='default'
                  type='submit'
                  className='w-[52px] h-[52px]'
                >
                  <Arrow />
                </Button>
              </form>
            </div>
          </div>

          <div>
            {openings.map((opening) => (
              <div
                key={opening.id}
                className='flex justify-between border-b border-gray-100 lg:pt-[70px] pt-[30px] lg:pb-[50px] pb-[30px] lg:flex-nowrap flex-wrap lg:items-center items-baseline'
              >
                <div className='md:order-1'>
                  <Typography className='md:text-subtitle2 text-paragraph2 lg:mb-3.5 mb-2'>
                    {opening.title} <span>{opening.experience}</span>
                  </Typography>
                  <div className='flex gap-5 items-center'>
                    <Typography className='flex items-center gap-1.5 text-tagLight'>
                      {' '}
                      <Image
                        src='/assets/career/world.svg'
                        alt='world'
                        width={16}
                        height={16}
                      />{' '}
                      {opening.site}
                    </Typography>
                    <hr className='w-[1px] h-4 bg-gray-100' />
                    <Typography className='flex items-center gap-1.5 text-tagLight'>
                      {' '}
                      <Image
                        src='/assets/career/type.svg'
                        alt='type'
                        width={16}
                        height={16}
                      />{' '}
                      {opening.type}
                    </Typography>
                  </div>
                </div>

                <Typography className='w-[458px] md:text-paragraph2Light text-tagExtraLight text-gray-400 lg:order-2 md:order-3 lg:mt-0 md:mt-5 mt-4'>
                  {opening.desc}
                </Typography>

                <div className='flex cursor-pointer text-gray-800 items-center group gap-2.5 lg:order-3 md:order-2 md:mt-0 mt-[30px]'>
                  <Link href='/' target='_blank' className='text-tag underline'>
                    {opening.button}
                  </Link>
                  <Arrow />
                </div>
              </div>
            ))}
          </div>
          <div className='mt-[30px]'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div> */}

        <div className='lg:mt-[50px] md:mt-10 mt-5'>
          <iframe
            src='https://codewinglet.oorwin.com/careers/index.html'
            width='100%'
            height='auto'
            style={{
              border: 'none',
              margin: 0,
            }}
            className='h-[800px]'
          ></iframe>
        </div>
      </div>
    </div>
  </>
);
export default CurrentOpenings;
