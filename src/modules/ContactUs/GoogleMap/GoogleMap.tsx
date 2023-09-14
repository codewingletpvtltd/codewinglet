const GoogleMap = () => (
  <div className='relative text-right w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'>
    <div className='overflow-hidden !bg-none w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'>
      <iframe
        src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=codewinglet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        id='gmap_canvas'
        className='w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;
