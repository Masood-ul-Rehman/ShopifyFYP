<<<<<<< HEAD
import React, {useState} from "react";
=======
import React from "react";
>>>>>>> a7dce4a9e0b3c88c6e37cdf0c65dbd39c29a2eaf
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "./libs/Paths";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

function Sidebar() {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-neutral-900 w-full lg:w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="text-neutral-200 text-lg">MWW</span>
        <button
          onClick={handleToggleSidebar}
          className="ml-auto lg:hidden text-white focus:outline-none"
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>
      <div
        className={classNames(
          "py-8 flex flex-1 flex-col gap-0.5 lg:overflow-y-auto",
          { hidden: !isOpen, "lg:flex": true }
        )}
      >
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div
        className={classNames(
          "flex flex-col gap-0.5 pt-2 border-t border-neutral-700",
          { hidden: !isOpen, "lg:flex": true }
        )}
      >
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(
            linkClass,
            "cursor-pointer text-red-500 lg:justify-end lg:mt-auto"
          )}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

=======
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="text-neutral-200 text-lg">MWW</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(linkClass, "cursor-pointer text-neutral-400")}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

>>>>>>> a7dce4a9e0b3c88c6e37cdf0c65dbd39c29a2eaf
function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
