'use server';

import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { notFound } from 'next/navigation';
import QueryString from 'qs';

export const fetchTechnology = async (slug: string) => {
  try {
    const reqOptions: RequestInit = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      cache: 'no-store',
    };

    const params = QueryString.stringify(
      {
        populate: {
          title: true,
          technologyDetails: {
            on: {
              'technology.technology-brief-intro': {
                populate: {
                  link: true,
                  technologyIcon: {
                    populate: {
                      image: true,
                    },
                  },
                  technologyStatistics: true,
                },
              },
              'technology.technology-using-companies': {
                populate: {
                  title: true,
                  description: true,
                  companiesList: {
                    populate: {
                      image: true,
                    },
                  },
                },
              },
              'technology.benefits-section': {
                populate: {
                  subHeading: true,
                  benefitPoints: {
                    populate: {
                      images: {
                        populate: {
                          image: true,
                        },
                      },
                    },
                  },
                },
              },
              'technology.technology-services': {
                populate: {
                  link: true,
                  heading: true,
                  description: true,
                  servicesPoints: {
                    populate: {
                      images: {
                        populate: {
                          image: true,
                        },
                      },
                    },
                  },
                },
              },
              'technology.technology-combinations': {
                populate: {
                  listCard: {
                    populate: {
                      images: {
                        populate: {
                          image: true,
                        },
                      },
                    },
                  },
                },
              },
              'technology.cta-banner': {
                populate: {
                  primaryLink: true,
                  secondaryLink: true,
                  title: true,
                  description: true,
                },
              },
              'technology.technology-previous-work': {
                populate: {
                  heading: true,
                  description: true,
                  link: true,
                  image: {
                    populate: {
                      image: true,
                    },
                  },
                  previousWorkPoints: {
                    populate: {
                      title: true,
                      description: true,
                      list: true,
                      image: {
                        populate: {
                          image: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
      { encodeValuesOnly: true }
    );

    const technologyResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/technologies?${params}`,
      reqOptions
    );
    const response = await technologyResponse.json();

    if (!technologyResponse.ok) {
      console.error('Failed to fetch Technology: ', response);
      throw new Error(`HTTP error! Status: ${technologyResponse.status}`);
    }

    if (response.data && response.data.length <= 0) {
      notFound();
    }

    return response.data;
  } catch (error) {
    console.error('Fetch failed: ', error);
    notFound();
  }
};
