import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import Popup from "reactjs-popup";

const Modal = ({ onClose, isTransparent, className, children }) => {
  const modalStyles = twMerge(
    `group/actions content relative h-fit w-full max-w-xl overflow-hidden rounded-lg px-4 py-6 pt-8 `,
    isTransparent
      ? "bg-transparent"
      : "bg-primary-200 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]",
    className,
  );

  return (
    <Popup open={true} modal nested>
      <div
        className="flex h-screen w-screen items-center justify-center bg-black bg-opacity-30"
        onClick={onClose}
        data-testid="modal-wrapper"
      >
        <div className={modalStyles}>{children}</div>
      </div>
    </Popup>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isTransparent: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal;
