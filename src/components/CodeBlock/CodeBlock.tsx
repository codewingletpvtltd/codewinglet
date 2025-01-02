'use client';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { toast } from 'react-toastify';

import 'tippy.js/dist/tippy.css';
interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = 'javascript' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className='relative my-4 pt-7 bg-[#2f2f2f] rounded-lg '>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <Tippy content='Copy to clipboard'>
        <button
          className='absolute top-2 right-2 bg-gray-400 hover:bg-blue-600 text-white px-2 py-1 rounded'
          onClick={() => handleCopyClick(code)}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </Tippy>
    </div>
  );
};

export default CodeBlock;
