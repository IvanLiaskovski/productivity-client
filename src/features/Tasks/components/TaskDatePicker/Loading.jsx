import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Loading = ({ className }) => {
  const styles = twMerge(
    "w-48 h-10 relative border-0 outline-0 rounded-md bg-block p-2 pr-10 shadow-md animate-pulse",
    className,
  );

  return <div className={styles}></div>;
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
