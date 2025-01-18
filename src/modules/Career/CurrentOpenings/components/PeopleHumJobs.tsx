'use client';
import Script from 'next/script';

const PeopleHumJobs = () => (
    <>
      <div id="peopelhum-jobs-container"></div>
      <Script
        id="peoplehum-hire-jobs-script"
        src="https://hris.peoplehum.com/ehire/static/js/external-job-list.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            (function (e, t, a) {
              let s = e.head || e.getElementsByTagName('head')[0],
                i = e.createElement('script');
              i.type = 'text/javascript';
              i.id = 'peoplehum-hire-jobs-script';
              i.defer = true;
              i.async = false;
              i.src =
                t +
                '/static/js/external-job-list.js?base_url=' +
                t +
                '&config=' +
                JSON.stringify(a);
              s.appendChild(i);
            })(document, 'https://hris.peoplehum.com/ehire', {
              env: 'prod',
              short_name: '130bc353-567d-483f-82e4-b531a9c43a37',
              container_id: 'peopelhum-jobs-container',
              locale: 'en-US',
              version: 2,
            });
          }
        }}
      />
    </>
  );

export default PeopleHumJobs;