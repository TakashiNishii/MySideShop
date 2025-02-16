import React from 'react'
import { PaginationContainer, PaginationButton } from './pagination.styles'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <PaginationButton
          key={page}
          $active={currentPage === page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination