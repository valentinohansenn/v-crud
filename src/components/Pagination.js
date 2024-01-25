"use client";

import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useStore } from "@/app/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function PaginationDemo() {
  const [activePage, setActivePage] = useState(1);
  const onClickRouter = useRouter();

  const total = useStore((state) => state.total);
  const limit = useStore((state) => state.limit);
  const skip = useStore((state) => state.skip);
  const text = useStore((state) => state.q);
  const category = useStore((state) => state.category);
  const setCategory = useStore((state) => state.setCategory);
  const setText = useStore((state) => state.setText);
  const setLimit = useStore((state) => state.setLimit);
  const setSkip = useStore((state) => state.setSkip);

  let recordsPerPage = 28;
  const limitIndex = activePage * recordsPerPage;
  const skipIndex = limitIndex - recordsPerPage;

  useEffect(() => {
    setLimit(limitIndex);
    setSkip(skipIndex);
    onClickRouter.push(
      `/?limit=${limitIndex}&skip=${skipIndex}${text}&category=${category.toLowerCase()}`,
    );
  }, [activePage, limitIndex, skipIndex]);

  let nPage = Math.ceil(total / recordsPerPage);
  let pagination = [];
  for (let counter = 1; counter <= nPage; counter++) {
    pagination.push(counter);
  }

  const handleViewAll = async () => {
    setText("");
    setCategory("all");
    await onClickRouter.push("/");
  };

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handlePreviousClick = () => {
    const previousPage = activePage > 1 ? activePage - 1 : 1;
    handlePageClick(previousPage);
  };

  const handleNextClick = () => {
    const nextPage =
      activePage < pagination.length ? activePage + 1 : pagination.length;
    handlePageClick(nextPage);
  };

  if (total === 0) {
    return (
      <div className="py-48 font-sans text-lg max-w-2xl">
        <div className="text-5xl font-black pb-2 text-center">
          We didn't find a match for "{text}"
        </div>
        <div className="flex flex-col text-center pb-4 font-medium">
          Try searching for something else instead
        </div>
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleViewAll}
            className="text-white rounded-full font-bold font-sans px-0 py-0 border border-white bg-black h-16 w-64 hover:bg-gray-700 hover:text-white focus:outline-none"
          >
            View All
          </Button>
        </div>
      </div>
    );
  }

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
        {pagination.map((pageNumber) => (
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
