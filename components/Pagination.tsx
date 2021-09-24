import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { animeListPageNum } from "../lib/store";

interface PaginationProps {
  listLength: number;
}

const Pagination = ({ listLength }: PaginationProps) => {
  const [pageNum, setPageNumber] = useRecoilState(animeListPageNum);
  const [numbersArr, setNumbersArr] = useState<number[]>([]);

  useEffect(() => {
    const paginationNumbers = () => {
      const max = Math.floor(listLength / 50);
      let numbers = [];
      for (let i = 0; i <= max; i++) {
        numbers.push(max - i);
      }
      setNumbersArr(
        numbers.sort((a, b) => {
          return a - b;
        })
      );
    };
    paginationNumbers();
  }, [listLength]);

  return (
    <StyledPagination>
      {numbersArr?.length
        ? numbersArr?.map((num) => (
            <button
              className={pageNum === num ? "active" : ""}
              onClick={() => setPageNumber(num)}
              key={num}
            >
              {num + 1}
            </button>
          ))
        : null}
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  border-width: 2px 2px 2px 0;
  border-style: solid;
  width: max-content;
  & button {
    outline: none;
    background: transparent;
    border: none;
    border-left: 2px solid;
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &.active {
      background: #fae1da;
    }
  }
`;

export default Pagination;
