import QueryString from 'qs';

async function handler(slug: any) {
  try {
    const query = QueryString.stringify(
      {
        filters: {
          title: {
            $eq: slug,
          },
        },
        populate: {
          page: {
            populate: {
              technologyImage: {
                populate: '*',
              },
              link: {
                populate: '*',
              },
              technologyIcon: {
                populate: '*',
              },
              benefitsPoints: {
                populate: '*',
              },
              benefitsImages: {
                populate: '*',
              },
              hireDeveloper: {
                populate: '*',
              },
              technicalPoints: {
                populate: '*',
              },
              listCard: {
                populate: {
                  images: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/technology-reacts?${query}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    // throw new Error(
    //   error.cause.syscall + ' ' + error.cause.code + ' ' + error.cause.address
    // );
  }
}

export { handler as GET };
