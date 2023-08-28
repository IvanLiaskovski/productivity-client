import useOpenCreatePanel from "../../hooks/useOpenCreatePanel";
import CreateBtn from "../Buttons/CreateBtn";
import { FaPlus } from "react-icons/fa";

const OpenCreatePanelBtn = () => {
  const [openPanel] = useOpenCreatePanel();

  return (
    <div className="absolute -top-1/4 left-1/2 inline -translate-x-1/2">
      <CreateBtn onClick={openPanel}>
        <FaPlus className=" text-4xl text-white" />
      </CreateBtn>
    </div>
  );
};

export default OpenCreatePanelBtn;
