import React from "react";

const Pagination = ({ currentPage, postPerPage, handlePagination, length }) => {
  const paginationNumber = [];

  for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
    paginationNumber.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {paginationNumber.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
