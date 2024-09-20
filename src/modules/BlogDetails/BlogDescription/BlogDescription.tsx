'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { Typography } from '@codewinglet/components';

import MostViewBlog from './MostViewBlog';
import ScrollHighlightNavbar from './ScrollHighlighNavBar';

const BlogDescription = () => {
  const overviewRef = useRef<any>();
  const businessRef = useRef<any>();
  const prosRef = useRef<any>();
  const advantageRef = useRef<any>();
  const brandingRef = useRef<any>();

  const PolicyData = [
    {
      title: 'Overview of Social Media',
      id: 'overview',
      ref: overviewRef,
    },
    {
      title: 'Uses of Social Media for Business',
      id: 'business',
      ref: businessRef,
    },
    {
      title: 'Pros and Cons of Social Media',
      id: 'pros',
      ref: prosRef,
    },
    {
      title: 'Top 10 Advantages of Social Media',
      id: 'advantage',
      ref: advantageRef,
    },
    {
      title: 'Branding and Personal Branding',
      id: 'branding',
      ref: brandingRef,
    },
  ];

  return (
    <div className='bg-white py-20 pt-40'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='flex justify-between'>
          {/* left */}
          <div className='w-[304px]'>
            <ScrollHighlightNavbar navHeader={PolicyData} />
          </div>
          {/* center */}
          <div className='w-[615px]'>
            <Typography className='text-primary text-subtitle2 mb-[28px]'>
              Introduction
            </Typography>
            <Typography className='text-paragraph1ExtraLight text-secondary pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </Typography>
            <Typography className='text-paragraph1ExtraLight text-secondary mb-[28px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </Typography>
            <Image
              src='/assets/blog/blog_des.png'
              alt='blog_des'
              width={615}
              height={536}
            />
            <Link
              href='/assets/blog/blog_des.png'
              className='text-paragraph2Light text-secondary mb-[30px] mt-4 flex items-center gap-2'
            >
              <Image
                src='/assets/icons/LinkIcon.svg'
                alt='LinkIcon'
                width={24}
                height={24}
              />
              Image source reference link
            </Link>
            <Typography className='text-paragraph1ExtraLight text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </Typography>

            <Typography className='mt-[43px] text-center text-subtitle2'>
              “In a world older and more complete than ours they move finished
              and complete, gifted with extensions of the senses we have lost or
              never attained, living by voices we shall never hear.”
            </Typography>

            <div className='flex flex-col justify-center items-center mb-[43px] mt-8'>
              <Image
                src='/assets/blog/user.png'
                alt='user'
                width={50}
                height={50}
              />
              <Typography className='text-primary text-paragraph2 mt-3'>
                Olivia Rhye
              </Typography>
              <Typography className='text-secondary text-paragraph2'>
                Product Designer
              </Typography>
            </div>

            <Typography className='text-paragraph1ExtraLight text-secondary'>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla. <br />
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </Typography>

            <Typography className='text-primary text-subtitle2 mb-[18px] mt-[30px]'>
              Software and tools
            </Typography>
            <Typography className='text-paragraph1ExtraLight text-secondary mb-[34px]'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id. <br /> Eget quis mi enim, leo lacinia
              pharetra, semper. Eget in volutpat mollis at volutpat lectus
              velit, sed auctor. Porttitor fames arcu quis fusce augue
            </Typography>

            <Typography className='text-primary text-subtitle2 mb-[18px]'>
              Other resources
            </Typography>
            <Typography className='text-paragraph1ExtraLight text-secondary mb-[30px]'>
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu
              sit dignissim massa erat cursus vulputate gravida id. Sed quis
              auctor vulputate hac elementum gravida cursus dis. <br />
              <ol type='1' className='list-decimal pt-[30px] pl-5'>
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices
                  suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>
                  Suspendisse maecenas ac donec scelerisque diam sed est duis
                  purus.
                </li>
              </ol>
            </Typography>
            <Image
              src='/assets/blog/blog_des_two.png'
              alt='blog_des'
              width={615}
              height={480}
            />
            <Link
              href='/assets/blog/blog_des.png'
              className='text-paragraph2Light text-secondary mb-[30px] mt-4 flex items-center gap-2'
            >
              <Image
                src='/assets/icons/LinkIcon.svg'
                alt='LinkIcon'
                width={24}
                height={24}
              />
              Image source reference link
            </Link>
            <Typography className='text-paragraph1ExtraLight text-secondary'>
              Lectus leo massa amet posuere. Malesuada mattis non convallis
              quisque. Libero sit et imperdiet bibendum quisque dictum
              vestibulum in non. Pretium ultricies tempor non est diam. Enim ut
              enim amet amet integer cursus. Sit ac commodo pretium sed etiam
              turpis suspendisse at. <br />
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </Typography>
            <div className='bg-bg p-[30px] mt-[30px]'>
              <Typography className='text-primary text-subtitle2 mb-[22px]'>
                Software and tools
              </Typography>
              <Typography className='text-paragraph1ExtraLight text-secondary'>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus
              </Typography>
              <Typography className='text-paragraph1ExtraLight text-secondary py-5'>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </Typography>
              <Typography className='text-paragraph1ExtraLight text-secondary'>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor.
              </Typography>
            </div>
          </div>
          {/* Right */}
          <div className='w-[299px]'>
            <MostViewBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
