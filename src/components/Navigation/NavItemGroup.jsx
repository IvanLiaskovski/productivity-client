import NavItem from "./NavItem";
import IconContextProvider from "../../context/IconsContext";
import { FaHome, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const NavItemGroup = () => {
  return (
    <IconContextProvider value={{ className: "text-4xl" }}>
      <div className="mx-auto flex max-w-md justify-between gap-x-2 px-4 text-white md:flex-col md:justify-start md:gap-0 md:px-3">
        <NavItem>
          <FaHome />
        </NavItem>
        <NavItem isActive>
          <FaTasks />
        </NavItem>
        <NavItem>
          <FaMoneyBillAlt />
        </NavItem>
        <NavItem>
          <GoGraph />
        </NavItem>
      </div>
    </IconContextProvider>
  );
};

export default NavItemGroup;
