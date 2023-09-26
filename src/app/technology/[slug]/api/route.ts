import QueryString from 'qs';

async function handler(slug: any) {
  console.log('slug', slug);
  const params = QueryString.stringify({
    populate: [
      'development_services.icon',
      'why_choose_us',
      'achievements',
      'achievements.icon',
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
}

export { handler as GET };
