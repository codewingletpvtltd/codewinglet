import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <li key={page}>
        <button
          onClick={() => onPageChange(page)}
          className={`p-3 rounded-lg leading-tight w-10 h-10 ${
            page === currentPage ? 'text-primary bg-bg' : 'text-secondary'
          }`}
        >
          {page}
        </button>
      </li>
    ));

  return (
    <div className='flex justify-center'>
      <nav aria-label='Page navigation'>
        <ul className='flex items-center text-secondary'>
          {renderPageNumbers()}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
