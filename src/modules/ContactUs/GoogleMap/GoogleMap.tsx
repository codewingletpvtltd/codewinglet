const GoogleMap = () => (
  <div className='relative text-right w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'>
    <div className='overflow-hidden !bg-none w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'>
      <iframe
        src='https://maps.google.com/maps?q=21.189578, 72.789179&z=17&output=embed'
        id='gmap_canvas'
        className='w-[100%] h-[306px] md:h-[400px] lg:h-[470px]'
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;
