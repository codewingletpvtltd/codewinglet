import { fetchAPI } from "../../api/fetchStrapi";

export default async function Blog({ params }: { params: { slug: string } }) {
  const res = await fetchAPI("/articles", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  console.log(res, "res");
  return (
    <div>
      <h1>Title: {params.slug}</h1>
    </div>
  );
}
