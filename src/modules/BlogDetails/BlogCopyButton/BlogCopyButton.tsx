'use client';

import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import { CopyButton } from '@codewinglet/components';
const BlogCopyButton = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);
  return (
    <div>
      <Tippy content='Copy to clipboard'>
        <span>
          <CopyButton
            copyText={currentUrl}
            successMessage='Blog URL copied to clipboard!'
          />
        </span>
      </Tippy>
    </div>
  );
};
export default BlogCopyButton;
