'use client';

import { useRouter } from 'next/navigation';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const router = useRouter();

  const getPageNumbers = (): (number | string)[] => {
    const totalNumbers = 7;
    const sideNumbers = 2;

    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage = Math.max(2, currentPage - sideNumbers);
    const endPage = Math.min(totalPages - 1, currentPage + sideNumbers);

    let pages: (number | string)[] = [1];
    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (page === '...') return;

    router.push(`/blogs/?page=${page}`);
  };

  return (
    <div className='flex items-center space-x-2 mt-8'>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-2 rounded ${
            page === currentPage
              ? 'bg-gray-200 text-black font-bold'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
