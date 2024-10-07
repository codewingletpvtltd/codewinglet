'use client';

import { useEffect, useState } from 'react';

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
      <CopyButton
        copyText={currentUrl}
        successMessage='Blog URL copied to clipboard!'
      />
    </div>
  );
};
export default BlogCopyButton;
