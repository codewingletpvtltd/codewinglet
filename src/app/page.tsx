import { Slider } from '@codewinglet/components';

export default function Home() {
  return (
    <div className='bg-primary w-full'>
      Home Page Y y
      <h1 className='font-secondary text-h1 font-700'>
        font-family: Bespoke Sans
      </h1>
      <h1 className='font-primary'>primary font family</h1>
      <Slider>
        <div>Slider 1</div>
        <div>Slider 2</div>
        <div>Slider 3</div>
        <div>Slider 4</div>
        <div>Slider 5</div>
        <div>Slider 6</div>
      </Slider>
    </div>
  );
}
