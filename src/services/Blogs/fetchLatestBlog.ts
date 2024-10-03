export const fetchLatestBlog = async () => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    const blogRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs?sort=createdAt:desc&populate=*&pagination[page]=${1}&pagination[pageSize]=${1}`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return {
      latestBlog: response.data,
    };
  } catch (error) {
    console.error('Fetch failed for latest blog: ', error);
    return {
      latestBlog: [],
    };
  }
};
