import Image from 'next/image';
import Link from 'next/link';

import { CodeBlock, Typography } from '@codewinglet/components';
import { BlogPost } from '@codewinglet/types';
import { groupedCode } from '@codewinglet/utils';

import MostViewBlog from './MostViewBlog';
import ScrollHighlightNavbar from './ScrollHighlighNavBar';

const BlogDescription: React.FC<{ contentData: BlogPost[] }> = ({
  contentData,
}) => {
  const PolicyData = contentData?.map((item) => ({
    title: item.title,
    id: `section-${item.title}`,
  }));
  groupedCode(contentData);
  return (
    <div className='bg-white lg:py-20 py-[60px] lg:pt-40 md:pt-96 pt-0 pb-2'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <div className='flex lg:flex-row flex-col justify-between gap-[28px]'>
          {/* left */}
          <div className='xl:w-[250px] w-[296px] lg:block hidden'>
            <ScrollHighlightNavbar navHeader={PolicyData} />
          </div>
          {/* center */}
          <div className='lg:w-[730px] w-full'>
            {contentData?.map((item) => (
              <div
                id={`section-${item.title}`}
                key={`section-${item.title}`}
                className='scroll-mt-[155px]'
              >
                <Typography className='text-primary md:text-subtitle2 text-tag md:mb-[18px] mb-2.5'>
                  {item?.title}
                </Typography>
                <div>
                  {item.content.map((item, index) => {
                    // Render based on the type of content

                    switch (item.type) {
                      case 'heading':
                        return (
                          <h2
                            key={index}
                            className='heading-class text-primary md:text-subtitle2 text-tag md:mb-[18px] mb-2.5'
                          >
                            {item.children.map((child) => child.text).join('')}
                          </h2>
                        );

                      case 'paragraph':
                        return (
                          <span
                            key={index}
                            className='text-secondary md:text-paragraph1ExtraLight mb-8 block'
                          >
                            {item.children.map((child) => {
                              let childText: React.ReactNode = child.text;

                              // Apply text styles dynamically
                              if (child.bold) {
                                childText = <strong>{childText}</strong>;
                              }
                              if (child.italic) {
                                childText = <em>{childText}</em>;
                              }
                              if (child.underline) {
                                childText = <u>{childText}</u>;
                              }
                              if (child.strikethrough) {
                                childText = <s>{childText}</s>;
                              }
                              if (child.code) {
                                childText = (
                                  <CodeBlock code={childText.toString()} />
                                );
                              }

                              if (child.type === 'link' && child.url) {
                                return (
                                  <Link
                                    key={child.url}
                                    href={child.url}
                                    className='link-class text-info underline'
                                  >
                                    {child.children
                                      .map((linkChild: any) => linkChild.text)
                                      .join('')}
                                  </Link>
                                );
                              }
                              return childText; // Return plain text for other child types
                            })}
                          </span>
                        );

                      case 'image':
                        return (
                          <Image
                            key={index}
                            src={item.image.url}
                            alt={item.image.alternativeText || 'Image'}
                            className='image-class w-full mb-4' // Add styling class
                            width={item.image.width}
                            height={item.image.height}
                          />
                        );

                      case 'list':
                        return (
                          <ul
                            key={index}
                            className={
                              item?.format === 'ordered'
                                ? 'list-decimal ml-5 text-secondary md:text-paragraph1ExtraLight'
                                : 'list-disc ml-5 text-secondary md:text-paragraph1ExtraLight'
                            }
                          >
                            {item.children.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {item.children.map(
                                  (child: any, childIndex: any) => (
                                    <span key={childIndex}>{child.text}</span>
                                  )
                                )}
                              </li>
                            ))}
                          </ul>
                        );

                      case 'quote':
                        return (
                          <blockquote key={index} className='quote-class'>
                            {/* Replace with custom class */}
                            {item.children.map((child) => child.text).join('')}
                          </blockquote>
                        );
                      case 'code':
                        return (
                          <CodeBlock
                            code={item.code || ''}
                            language={item.language}
                          />
                        );
                      default:
                        return null; // Fallback for unsupported types
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
          {/* Right */}
          <div className='lg:w-[250px] w-full'>
            <MostViewBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
