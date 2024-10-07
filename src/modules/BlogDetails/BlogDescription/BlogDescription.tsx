import { Typography } from '@codewinglet/components';

import MostViewBlog from './MostViewBlog';
import ScrollHighlightNavbar from './ScrollHighlighNavBar';

interface BlogContentItem {
  type: string; // e.g., "image", "quote", "heading", "paragraph"
  image?: any;
  children: Array<{
    text: string;
    type: string; // e.g., "text"
    url?: string; // Only present for link types
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    children?: any;
  }>;
  format?: string; // for list
  level?: number; // Only present for heading types
}

interface BlogPost {
  id: number;
  title: string;
  content: BlogContentItem[];
}

const BlogDescription: React.FC<{ contentData: BlogPost[] }> = ({
  contentData,
}) => {
  const PolicyData = contentData?.map((item) => ({
    title: item.title,
    id: `section-${item.title}`,
  }));

  return (
    <div className='bg-white lg:py-20 py-[60px] lg:pt-40 md:pt-64 pt-0 pb-2'>
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
                          <p
                            key={index}
                            className='text-secondary md:text-paragraph1ExtraLight pb-8'
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

                              if (child.type === 'link') {
                                return (
                                  <a
                                    key={child.url}
                                    href={child.url}
                                    className='link-class text-info underline'
                                  >
                                    {child.children
                                      .map((linkChild: any) => linkChild.text)
                                      .join('')}
                                  </a>
                                );
                              }
                              return childText; // Return plain text for other child types
                            })}
                          </p>
                        );

                      case 'image':
                        return (
                          <img
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
