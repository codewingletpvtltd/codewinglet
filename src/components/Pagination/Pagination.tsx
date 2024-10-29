'use client';

import { useRouter } from 'next/navigation';

import { useUrlParamState } from '@codewinglet/hooks';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  searchQuery?: string;
};

export const Pagination = ({
  totalPages,
  currentPage,
  searchQuery,
}: PaginationProps) => {
  const router = useRouter();
  const { setParamValue } = useUrlParamState('page');

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    // Always include the first page
    pages.push(1);

    if (totalPages <= 7) {
      // If total pages are 7 or fewer, return all pages directly
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // When the current page is at the begin
    if (currentPage <= 4) {
      for (let i = 2; i <= currentPage + 1 || i <= 3; i++) {
        pages.push(i);
      }
      pages.push('...');

      for (let i = totalPages - (7 - pages.length) + 1; pages.length < 7; i++) {
        pages.push(i);
      }
    }

    // When the current page is at the end
    else if (currentPage >= totalPages - 3) {
      const initialListSize =
        totalPages - currentPage <= 1
          ? 2
          : totalPages - currentPage >= 3
          ? 0
          : 1;

      for (let i = 2; pages.length <= initialListSize; i++) {
        pages.push(i);
      }

      pages.push('...');

      for (let i = totalPages - (7 - pages.length) + 1; pages.length < 7; i++) {
        pages.push(i);
      }
    }
    // When the current page is somewhere in the middle
    else {
      pages.push('...');
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (page === '...') return;

    const searchParam = searchQuery
      ? `&search=${encodeURIComponent(searchQuery)}`
      : '';
    setParamValue(page.toString());

    router.push(`/blogs/?page=${page}${searchParam}`);
  };

  return (
    <div className='flex items-center justify-center my-[22px]'>
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
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
