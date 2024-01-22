import PropTypes from "prop-types";
import { useParams } from "react-router";

const FormTitle = ({ isRegistration }) => {
  const { "*": authenticationType } = useParams();

  const styles =
    "text-center text-3xl uppercase outline-none duration-150 hover:text-blue-50 hover:underline";

  const signUpStyles =
    authenticationType === "signup"
      ? "underline text-blue-50"
      : "text-gray-500";
  const logInStyles =
    authenticationType === "login" ? "underline text-blue-50" : "text-gray-500";

  return (
    <div className="flex justify-center gap-5">
      <a href="/user/login" className={`${styles} ${logInStyles}`}>
        log in
      </a>
      <a href="/user/signup" className={`${styles} ${signUpStyles}`}>
        sign up
      </a>
    </div>
  );
};

PropTypes.FormTitle = {
  isRegistration: PropTypes.bool.isRequired,
};

export default FormTitle;
