import PropTypes from "prop-types";
import { useAuth } from "../../../../context/AuthenticationContext";
import { useForm, Controller } from "react-hook-form";
import { useMemo } from "react";
import Input from "../../../../components/Fields/Input";
import Modal from "../../../../components/Modals/Modal";
import Button from "../../../../components/Buttons/Button";
import TryDemoButton from "../TryDemoButton/TryDemoButton";
import FormTitle from "./FormTitle/FormTitle";

const UserForm = ({ isRegistration }) => {
  const { signUpUser, loginUser } = useAuth();

  const defaultValues = useMemo(() => {
    return isRegistration
      ? { name: "", email: "", password: "" }
      : { email: "", password: "" };
  }, [isRegistration]);

  const { handleSubmit, control } = useForm({ defaultValues });

  const submitForm = (data) => {
    if (isRegistration) {
      signUpUser(data);
    } else {
      loginUser(data);
    }
  };

  return (
    <Modal isTransparent>
      <FormTitle isRegistration={isRegistration} />
      <div
        className="flex-end mt-6 flex w-full flex-col rounded-xl bg-block px-4
    py-7 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] transition-all duration-500 lg:p-6"
      >
        <form onSubmit={handleSubmit(submitForm)}>
          {isRegistration && (
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 4 }}
              render={({ field }) => (
                <Input {...field} title="Username:" mode="light" />
              )}
            />
          )}
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            }}
            render={({ field }) => (
              <Input {...field} type="email" title="Email:" mode="light" />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                title="Password:"
                mode="light"
              />
            )}
          />
          <div className="mt-4 flex gap-3">
            <Button
              type="submit"
              className="w-full font-medium duration-150 hover:opacity-90"
            >
              {isRegistration ? "Sign Up" : "Sign In"}
            </Button>
            <TryDemoButton />
          </div>
        </form>
      </div>
    </Modal>
  );
};

UserForm.propTypes = {
  isRegistration: PropTypes.bool,
};

//Temporary Try Demo Button styles

export default UserForm;
