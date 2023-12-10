import { useSignUpMutation } from "../../../api/user/userApi";
import { useLogInMutation } from "../../../api/user/userApi";

const useUserSign = (isRegistration) => {
  const [signUp] = useSignUpMutation();
  const [logIn] = useLogInMutation();

  return isRegistration ? signUp : logIn;
};

export default useUserSign;
