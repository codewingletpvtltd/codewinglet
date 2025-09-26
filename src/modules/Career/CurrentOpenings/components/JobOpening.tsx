'use client';
import Script from 'next/script';

const JobOpening = () => (
  <>
    <Script
      id='kh-config'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `
          window.khConfig = {
            identifier: '44ccebc7-8861-4991-8d2e-129d9c94080d',
            domain: 'https://codewinglet.keka.com/careers/',
            targetContainer: '#khembedjobs',
          };
        `,
      }}
    />
    <Script
      src='https://codewinglet.keka.com/careers/api/embedjobs/js/44ccebc7-8861-4991-8d2e-129d9c94080d'
      strategy='afterInteractive'
    />
    <div id='khembedjobs'></div>
  </>
);

export default JobOpening;
