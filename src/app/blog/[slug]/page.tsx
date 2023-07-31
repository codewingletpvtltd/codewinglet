export default async function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Title: {params.slug}</h1>
    </div>
  );
}
