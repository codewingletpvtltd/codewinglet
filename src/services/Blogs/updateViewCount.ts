import { notFound } from 'next/navigation';

export const updateViewCount = async (
  blogId: string,
  currentViews: number = 0
) => {
  try {
    const reqOptions: RequestInit = {
      cache: 'no-store',
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          views: currentViews + 1,
        },
      }),
    };

    const updateRequest = await fetch(
      `http://127.0.0.1:1337/api/blogs/${blogId}`,
      reqOptions
    );

    if (!updateRequest.ok) {
      throw new Error(
        `Failed to update view count. Status: ${updateRequest.status}`
      );
    }
  } catch (error) {
    console.error('View count update failed: ', error);
    notFound();
  }
};
