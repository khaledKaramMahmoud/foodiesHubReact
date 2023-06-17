import { Link, useLocation } from "react-router-dom";
import { useState, Fragment } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const onClickEffect = () => {
    setShowSidebar(true);
    if (showSidebar === true) {
      closeSidebar();
    }
  };
  return (
    <Fragment>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>dieshub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? " active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={onClickEffect}
          className={showSidebar ? "sidebar-btn activeX" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </Fragment>
  );
};

export default Navbar;
