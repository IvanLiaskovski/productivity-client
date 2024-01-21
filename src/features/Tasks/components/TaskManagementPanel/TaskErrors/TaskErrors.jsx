import PropTypes from "prop-types";

const TaskErrors = ({ errors }) => {
  return (
    <ul className="text-left text-red-500">
      {errors?.length > 0 &&
        errors.map((error) => (
          <li key={error?.message} className="py-2">
            {error?.message}
          </li>
        ))}
    </ul>
  );
};

export default TaskErrors;

TaskErrors.propTypes = {
  errors: PropTypes.array,
};
