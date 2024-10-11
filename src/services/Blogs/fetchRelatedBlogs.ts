'use server';

export const fetchRelatedBlogs = async (blogId: string, tags: string[]) => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    };

    let allTags = '';

    for (let i = 0; i < tags.length; i++) {
      allTags += `&filters[$or][${i}][tags][${tags[i]}][$eq]=true`;
    }

    const excludeBlogId = `&filters[documentId][$ne]=${blogId}`;

    const blogRequest = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs?${allTags}${excludeBlogId}&populate=*`,
      reqOptions
    );

    if (!blogRequest.ok) {
      throw new Error(`HTTP error! Status: ${blogRequest.status}`);
    }

    const response = await blogRequest.json();
    return response.data;
  } catch (error) {
    console.error('Fetch failed: ', error);
  }
};
