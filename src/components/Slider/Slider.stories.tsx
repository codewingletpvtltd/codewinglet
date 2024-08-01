/* eslint-disable import/order */
import { getClassNames } from '@codewinglet/utils';
import { StoryObj } from '@storybook/react';
import Typography from '../Typography/Typography';
import Slider from './Slider';

export default {
  component: Slider,
};

export const Default: StoryObj<typeof Slider> = {
  args: {
    children: [...new Array(10)].map((val, index) => (
      <div
        key={`slider-${index}`}
        className={getClassNames(
          'bg-white rounded-10 shadow-lg py-[27px] px-[23px] !w-[calc(100%-24px)] !h-[calc(100%-30px)] !my-[30px] !mx-3 !flex self-center'
        )}
      >
        <Typography variant='h1'>Slide {index + 1}</Typography>
      </div>
    )),
  },
};
