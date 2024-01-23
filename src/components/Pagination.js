'use client'

import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handlePreviousClick = () => {
    const previousPage = activePage > 1 ? activePage - 1 : 1;
    setActivePage(previousPage);
  };

  const handleNextClick = () => {
    const nextPage = activePage < 4 ? activePage + 1 : 4;
    setActivePage(nextPage);
  };

  return (
    <Pagination className="pt-12 text-lg">
      <PaginationContent>
        <PaginationItem className="p-3">
          <PaginationPrevious
            href="#"
            className="font-bold px-3 h-12 w-26 rounded text-black hover:bg-black hover:text-white focus:outline-none"
            onClick={() => handlePreviousClick()}
          />
        </PaginationItem>
        {[1, 2, 3, 4].map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              isActive={pageNumber === activePage}
              className="px-3 py-2 text-base rounded hover:bg-black hover:text-white hover:rounded hover:font-bold"
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="p-3">
          <PaginationNext
            href="#"
            className="font-bold rounded h-12 w-20 text-black hover:bg-black hover:text-white focus:outline-none"
            onClick={() => handleNextClick()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
