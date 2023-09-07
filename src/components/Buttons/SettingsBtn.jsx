import PropTypes from "prop-types";
import { IoMdSettings } from "react-icons/io";

const SettingsBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="md:hidden">
      <IoMdSettings className="text-4xl text-white opacity-50" />
    </button>
  );
};

SettingsBtn.propType = {
  onClick: PropTypes.func,
};

export default SettingsBtn;
