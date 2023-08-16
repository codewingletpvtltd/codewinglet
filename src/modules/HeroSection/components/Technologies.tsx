import {
  AngularSVG,
  GraphQLSVG,
  JavascriptSVG,
  NextJSSVG,
  NodeJSSVG,
  ReactSVG,
  TypeScriptSVG,
  VueSVG,
} from '@codewinglet/assets';
import './styles.css';

const Technologies = () => (
  // <div className='[&>:nth-child(odd)]:animate-pulse [&>:nth-child(even)]:animate-pulse animation-item flex justify-between min-w-[628px] mt-[131px] mb-[50px] '>
  <div className='w-full flex justify-center items-center overflow-hidden lg:w-[951px] lg:mx-auto xl:w-[1109px] 2xl:w-[1269px]'>
    <div className='flex justify-between w-[628px] gap-[26px] mt-[54px] mb-[50px] md:w-[728px] lg:w-full lg:gap-[72px] lg:mt-[60px] xl:gap-[66px] 2xl:gap-[83px] 2xl:mt-[131px] animate-technologyAnimation'>
      <ReactSVG />
      <VueSVG />
      <AngularSVG />
      <NodeJSSVG />
      <GraphQLSVG />
      <NextJSSVG />
      <TypeScriptSVG />
      <JavascriptSVG />
    </div>
  </div>
);

export default Technologies;
