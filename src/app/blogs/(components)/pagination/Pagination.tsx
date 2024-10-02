'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  searchQuery?: string;
};

const Pagination = ({
  totalPages,
  currentPage,
  searchQuery,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getPageNumbers = (): (number | string)[] => {
    const totalNumbers = 5;
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

    // router.push(`/blogs/?page=${page}`);
    const searchParam = searchQuery
      ? `&search=${encodeURIComponent(searchQuery)}`
      : '';
    router.push(`/blogs/?page=${page}${searchParam}`);
  };

  return (
    <div className='flex items-center justify-center my-8'>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-2 rounded-lg font-medium w-10 h-10 ${
            page === currentPage
              ? 'bg-bg text-black'
              : 'text-secondary hover:bg-gray-100'
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
