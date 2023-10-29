import PropTypes from "prop-types";
import Popup from "reactjs-popup";

const Modal = ({ onClose, children }) => {
  return (
    <Popup open={true} modal nested>
      <div
        className="flex h-screen w-screen items-center justify-center bg-black bg-opacity-30"
        onClick={onClose}
        data-testid="modal-wrapper"
      >
        <div className="group/actions content relative h-fit w-full max-w-xl overflow-hidden rounded-lg bg-primary-200 px-4 py-6 pt-8 shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset]">
          {children}
        </div>
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
};

export default Modal;
