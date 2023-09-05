import PropTypes from "prop-types";
import { IoMdSettings } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const SettingsBtn = ({ onClick, className }) => {
  const styles = twMerge("md:hidden", className);

  return (
    <button onClick={onClick} className={styles}>
      <IoMdSettings className="text-4xl text-white opacity-50" />
    </button>
  );
};

SettingsBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SettingsBtn;
