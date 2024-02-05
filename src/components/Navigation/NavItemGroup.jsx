import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../context/AuthenticationContext";
import NavItem from "./NavItem";
import LogOutBtn from "./LogOutBtn";
import IconContextProvider from "../../context/IconsContext";
import { FaHome, FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { GoGraph } from "react-icons/go";

const navItems = [
  {
    name: "dashboard",
    url: "/",
    content: <FaHome />,
  },
  {
    name: "task",
    url: "/task",
    content: <FaTasks />,
  },
  {
    name: "finances",
    url: "/finances",
    content: <FaMoneyBillAlt />,
  },
  {
    name: "investing",
    url: "/investing",
    content: <GoGraph />,
  },
];

const NavItemGroup = () => {
  const { user, logoutUser } = useAuth();
  const isScreenMedium = useMediaQuery({ query: "(min-width: 724px)" });

  return (
    <IconContextProvider value={{ className: "text-4xl" }}>
      <nav className="mx-auto max-w-md  px-4 text-white md:px-3">
        <ul className="flex list-none justify-between  gap-x-2 md:flex-col md:justify-start md:gap-0">
          {navItems.map(({ name, url, content }) => (
            <li key={name}>
              <NavItem url={url} title={name}>
                {content}
              </NavItem>
            </li>
          ))}
          <li>
            {user && isScreenMedium ? (
              <LogOutBtn onClick={() => logoutUser()}>
                <CiLogout />
              </LogOutBtn>
            ) : isScreenMedium ? (
              <NavItem url="/user/login">
                <CiLogin />
              </NavItem>
            ) : null}
          </li>
        </ul>
      </nav>
    </IconContextProvider>
  );
};

export default NavItemGroup;
