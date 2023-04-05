import React from 'react';
import './Pagination.scss';
import cn from 'classnames';

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
};

export const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // for (let i = Math.max(currentPage - 2, 1); i <= Math.min(currentPage + 1,
  // totalPages); i += 1) {
  //   pageNumbers.push(i);
  // }

  for (let i = currentPage; i <= Math.min(currentPage + 4, totalPages); i += 1) {
    pageNumbers.push(i);
  }

  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <nav className="pagination">
      <button
        type="button"
        onClick={handlePreviousClick}
        className={cn('pagination__prev-button', { 'pagination__prev-button--active': currentPage > 1 })}
        disabled={currentPage === 1}
      >
      </button>

      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__page-item">
            <button
              type="button"
              onClick={() => onPageChange(number)}
              className={cn('pagination__page-link', { 'pagination__page-link--active': currentPage === number })}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      {currentPage < totalPages && (
        <button
          type="button"
          onClick={handleNextClick}
          className="pagination__next-button"
        >
        </button>
      )}
    </nav>
  );
};
