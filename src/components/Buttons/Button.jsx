import { twMerge } from "tailwind-merge";

const Button = ({ type = "button", className, children }) => {
  const styles = twMerge(
    `flex items-center justify-center rounded-lg border-transparent bg-blue-500 px-2 py-1 text-xl text-blue-50 md:mt-4 md:w-full`,
    className,
  );

  return (
    <button className={styles} type={type}>
      {children}
    </button>
  );
};

export default Button;
