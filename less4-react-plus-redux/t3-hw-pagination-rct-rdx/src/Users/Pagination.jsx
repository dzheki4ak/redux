import React from 'react';

const Pagination = ({
  currentPage,
  goPrev,
  goNext,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage > 0;

  const pageIndex = Math.floor(totalItems / itemsPerPage);

  const isNextPageAvailable = currentPage < pageIndex && itemsPerPage !== totalItems;

  return (
    <div className="pagination">
      <button
        disabled={!isPrevPageAvailable}
        onClick={goPrev}
        className="btn"
      >
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        onClick={goNext}
        className="btn"
        disabled={!isNextPageAvailable}
      >
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
