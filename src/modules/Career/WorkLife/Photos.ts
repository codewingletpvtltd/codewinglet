// photos.ts
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number): string {
  return `${asset}?w=${width}&q=75`;
}

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet: {
    src: string;
    width: number;
    height: number;
  }[];
};

const photos: Photo[] = [
  {
    asset: '/assets/career/workLife_1.png',
    width: 692,
    height: 376,
    alt: 'workLife_1',
  },
  {
    asset: '/assets/career/workLife_2.png',
    width: 692,
    height: 366,
    alt: 'workLife_2',
  },
  {
    asset: '/assets/career/workLife_3.png',
    width: 692,
    height: 378,
    alt: 'workLife_3',
  },
  {
    asset: '/assets/career/workLife_4.png',
    width: 333,
    height: 378,
    alt: 'workLife_4',
  },
  {
    asset: '/assets/career/workLife_5.png',
    width: 333,
    height: 378,
    alt: 'workLife_5',
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
