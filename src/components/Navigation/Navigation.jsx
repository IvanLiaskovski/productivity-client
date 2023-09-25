import NavItemGroup from "./NavItemGroup";
import OpenCreatePanelBtn from "./OpenCreatePanelBtn";

const Navigation = () => {
  return (
    <div className=" fixed bottom-0 left-1/2 mt-4 w-screen -translate-x-1/2 overflow-visible rounded-lg bg-bgBottom px-5 pt-3 md:left-0 md:top-0 md:mt-0 md:w-[110px] md:translate-x-0 md:rounded-none md:bg-[#F1E8FF] md:bg-opacity-10 md:p-0">
      <NavItemGroup />
      <OpenCreatePanelBtn />
    </div>
  );
};

export default Navigation;
