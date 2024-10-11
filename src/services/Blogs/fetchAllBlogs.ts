'use server';

export const fetchAllBlogs = async (
  latestBlogId: string,
  page: number = 1,
  pageSize: number,
  searchQuery: string = '',
  categoryQuery: string = ''
) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const searchFilter = searchQuery
      ? `&filters[title][$containsi]=${encodeURIComponent(searchQuery)}`
      : '';

    let tagsFilter = '';

    const categories = categoryQuery.length > 0 ? categoryQuery.split(' ') : [];

    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        tagsFilter += `&filters[tags][$or][${i}][${categories[i]}][$eq]=true`;
      }
    }

    const blogRequest = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[documentId][$ne]=${latestBlogId}${searchFilter}${tagsFilter}`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`Fetching HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return {
      blogs: response.data,
      pagination: response.meta.pagination,
    };
  } catch (error) {
    console.error('Fetch failed: ', error);
    return {
      blogs: [],
      pagination: {},
    };
  }
};
