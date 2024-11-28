// import { notFound } from 'next/navigation';
// import { GET } from './api/route';

// // TODO_1.1: Commented code because of first release.
// export default async function Page({ params }: { params: { slug: string } }) {
//   const data = await GET(params.slug);

//   if (!data?.data?.length) {
//     notFound();
//   }

//   return null;
// }

'use server';

import { TechnologyModule } from '@codewinglet/modules';
import { fetchTechnology } from '@codewinglet/services/Technology/fetchTechnology';

interface TechnologyProps {
  params: { slug: string };
}

export default async function Technology({ params }: TechnologyProps) {
  const technologyData = await fetchTechnology(params?.slug);
  return <TechnologyModule technologyData={technologyData?.at(0)} />;
}
