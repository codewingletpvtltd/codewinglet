const GoogleMap = () => (
  <div className='relative text-right h-[700px] w-[100%]'>
    <div className='overflow-hidden !bg-none h-[700px] w-[100%]'>
      <iframe
        src='https://maps.google.com/maps?q=21.189578, 72.789179&z=19&iwloc=near&output=embed'
        id='gmap_canvas'
        className='w-[100%] h-[700px]'
      ></iframe>
    </div>
  </div>
);

export default GoogleMap;
