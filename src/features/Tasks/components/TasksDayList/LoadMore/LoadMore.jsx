import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useCheckAuth } from "../../../../../context/AuthenticationContext";
import { useLazyFetchTasks } from "../../../hooks/useLazyFetchTasks";

import Loading from "../Loading";
import ErrorPopup from "../../../../../components/Errors/ErrorPopup/ErrorPopup";

const LoadMore = ({ date, nextPageProp }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [clicked, setClicked] = useState(false);

  const { user } = useCheckAuth();
  const { fetchTasks, isLoading, isError, nextPage, error } = useLazyFetchTasks(
    date,
    date,
    "day",
    currentPage,
  );

  useEffect(() => {
    setClicked(false);
  }, [date]);

  const handleFetchTasks = () => {
    if (!clicked) {
      setClicked(true);
    }

    setCurrentPage((prev) => prev + 1);
    fetchTasks(currentPage);
  };

  const isDisplay = (nextPageProp > 0 && !clicked) || (nextPage > 0 && clicked);

  return (
    <>
      {isLoading ? <Loading /> : isError ? <ErrorPopup error={error} /> : null}
      {isDisplay && user && (
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

LoadMore.propTypes = {
  date: PropTypes.string,
  nextPageProp: PropTypes.number,
};

export default LoadMore;
