import React, { useState } from "react";
import { useLazyFetchTasks } from "../../../hooks/useLazyFetchTasks";
import Loading from "../Loading";
import ErrorPopup from "../../../../../components/Errors/ErrorPopup/ErrorPopup";

const LoadMore = ({ date, page, nextPageProp }) => {
  const [currentPage, setCurrentPage] = useState(page + 1);
  const { fetchTasks, isLoading, isError, nextPage, error } = useLazyFetchTasks(
    date,
    date,
    "day",
    page,
  );

  console.log(nextPage);

  const handleFetchTasks = () => {
    setCurrentPage((prev) => prev + 1);
    fetchTasks(currentPage);
  };

  return (
    <>
      {isLoading ? <Loading /> : isError ? <ErrorPopup error={error} /> : null}
      {nextPageProp > 0 && (nextPage > 0 || nextPage === undefined) && (
        <div
          onClick={handleFetchTasks}
          className="mt-2 w-full cursor-pointer rounded-xl bg-blue-400 py-1 text-center text-xl text-white hover:opacity-80"
        >
          LoadMore
        </div>
      )}
    </>
  );
};

export default LoadMore;
