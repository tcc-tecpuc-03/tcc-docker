import { LuHome, LuPlus, LuArchive } from "react-icons/lu";
import { createElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pages = [
    {
      name: "Home",
      icon: LuHome,
      path: "/",
    },
    {
      name: "Cestas",
      icon: LuArchive,
      path: "/listitem",
    },
    {
      name: "Novo Item",
      icon: LuPlus,
      path: "/createitem",
    },
  ];

  return (
    <aside
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className={` bg-zinc-800 transition-all  min-h-screen ${
        open ? "w-64" : "w-64"
      }`}
    >
      <div className="sticky top-0 pt-6 px-2 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-center text-2xl ml-2 text-zinc-200">
              BUY<span className="text-zinc-100 text-bold">SKET</span>
            </span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col">
            <li className="hover:text-gray-200 h-8">
              {pages.map((page, index) => {
                return (
                  <Link
                    to={page.path}
                    className={`flex items-center h-8 mx-4 ${
                      location.pathname === page.path
                        ? "text-zinc-100"
                        : "text-zinc-400"
                    } hover:text-zinc-100 transition-all`}
                    key={index}
                  >
                    {createElement(page.icon, { size: 24 })}
                    <span className="inline-block text-lg ml-2">
                      {page.name}
                    </span>
                  </Link>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
