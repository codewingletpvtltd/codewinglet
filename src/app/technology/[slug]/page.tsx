import { notFound } from 'next/navigation';
import { TechnologyModule } from '@codewinglet/modules';
import { GET } from './api/route';

// TODO_1.1: Commented code because of first release.
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await GET(params.slug);

  if (!data.data.length) {
    notFound();
  }

  return <TechnologyModule data={data.data[0].attributes} />;
}
