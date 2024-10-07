'use server';

export const fetchMostViewedBlogs = async () => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      'http://127.0.0.1:1337/api/blogs?sort=views:desc&pagination[limit]=5',
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return response.data;
  } catch (error) {
    console.error('Fetch failed: ', error);
    return null;
  }
};
