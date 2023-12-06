import { useSignUpMutation } from "../../../../api/user/userApi";
import { useForm, Controller } from "react-hook-form";

import Input from "../../../../components/Fields/Input";
import Modal from "../../../../components/Modals/Modal";
import Button from "../../../../components/Buttons/Button";

const UserForm = () => {
  const [signUp] = useSignUpMutation();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: " ",
      email: "",
      password: "",
    },
  });

  const submitForm = (data) => {
    console.log(data);
    signUp(data);
  };

  return (
    <Modal isTransparent>
      <h1 className="mx-auto w-3/4 text-center text-3xl uppercase text-blue-50">
        Create your account
      </h1>
      <div
        className="flex-end mt-6 flex w-full flex-col rounded-xl bg-block px-4
    py-7 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] transition-all duration-500 lg:p-6"
      >
        <form onSubmit={handleSubmit(submitForm)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true, minLength: 4 }}
            render={({ field }) => (
              <Input {...field} title="Username:" mode="light" />
            )}
          />
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
          <Button type="submit" className="mt-4 w-full font-medium">
            Sign Up
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default UserForm;
