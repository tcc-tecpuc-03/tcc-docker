import { Link } from "react-router-dom";
import { FiMenu, FiUser, FiHome, FiPlus } from "react-icons/fi";
import { createElement, useState } from "react";
import { useMediaQuery } from 'react-responsive';

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define a largura máxima para telas de celular

  const handleOpen = () => {
    setOpen(!open);
  };

  const pages = [
    {
      name: "Home",
      icon: FiHome,
      path: "/",
    },
    {
      name: "Criar novo item",
      icon: FiPlus,
      path: "/createitem",
    }
  ];

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen font-titillium bg-gray-800 text-white">
        <div className="flex items-center justify-between h-16 bg-gray-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleOpen()}
              className="hover:bg-gray-900 p-2 rounded"
            >
              <FiMenu size={24} />
            </button>
            <span className="text-lg">BUYSKET</span>
          </div>
          <button className="hover:bg-gray-900 p-2 rounded">
            <FiUser size={24} />
          </button>
        </div>
        {open && (
          <div className="bg-gray-900">
            <div className="flex flex-col gap-5">
              {pages.map((page) => (
                <Link
                  className="hover:bg-gray-800 p-2 rounded"
                  to={page.path}
                  key={page.path}
                >
                  <div className="flex items-center gap-3 pl-6">
                    {createElement(page.icon, { size: 20 })}
                    <span className="text-base">{page.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-screen font-titillium bg-gray-800 text-white ${open ? "w-[78px]" : "w-[250px]"}`}>
      <div className={`flex items-center justify-center gap-2 h-16`}>
        {!open && <span className="text-lg">BUYSKET</span>}
        <button
          onClick={() => handleOpen()}
          className="hover:bg-gray-900 p-2 rounded"
        >
          <FiMenu size={24} />
        </button>
      </div>
      <div className={`flex items-center justify-center flex-col gap-5`}>
        {pages.map((page) => (
          <Link
            className="hover:bg-gray-900 p-2 rounded"
            to={page.path}
            key={page.path}
          >
            <div className="flex flex-row gap-3">
              {createElement(page.icon, { size: 24 })}
              {!open && <span className="text-lg">{page.name}</span>}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex-grow">{/* Icons */}</div>
      <div className="flex items-center justify-center h-16">
        <button className="hover:bg-gray-900 p-2 rounded">
          <FiUser size={24} />
        </button>
      </div>
    </div>
  );
}
