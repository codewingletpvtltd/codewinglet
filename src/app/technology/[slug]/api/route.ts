import QueryString from 'qs';

async function handler(slug: any) {
  try {
    const params = QueryString.stringify({
      populate: [
        'development_services.icon',
        'FAQs',
        'banner_image',
        'who_used',
      ],
      filters: {
        slug: slug,
      },
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/technologies?${params}`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(
      error.cause.syscall + ' ' + error.cause.code + ' ' + error.cause.address
    );
  }
}

export { handler as GET };
