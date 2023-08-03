// import { Link } from "react-router-dom";
// import { FiMenu, FiUser, FiHome, FiPlus } from "react-icons/fi";
// import { createElement, useState } from "react";
// import { useMediaQuery } from "react-responsive";

// export function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: 767 }); // Define a largura máxima para telas de celular

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   const pages = [
//     {
//       name: "Home",
//       icon: FiHome,
//       path: "/",
//     },
//     {
//       name: "Criar novo item",
//       icon: FiPlus,
//       path: "/createitem",
//     },
//   ];

//   if (isMobile) {
//     return (
//       <div className="flex items-center justify-between h-16 bg-gray-800 text-white">
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => handleOpen()}
//             className="hover:bg-gray-900 p-2 rounded"
//           >
//             <FiMenu size={24} />
//           </button>
//           <span className="text-lg">BUYSKET</span>
//         </div>
//         <button className="hover:bg-gray-900 p-2 rounded">
//           <FiUser size={24} />
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`flex flex-col h-screen font-titillium bg-gray-800 text-white ${
//         open ? "w-[78px]" : "w-[250px]"
//       }`}
//     >
//       <div className={`flex items-center justify-center gap-2 h-16`}>
//         {!open && <span className="text-lg">BUYSKET</span>}
//         <button
//           onClick={() => handleOpen()}
//           className="hover:bg-gray-900 p-2 rounded"
//         >
//           <FiMenu size={24} />
//         </button>
//       </div>
//       <div className={`flex items-center justify-center flex-col gap-5`}>
//         {pages.map((page) => (
//           <Link
//             className="hover:bg-gray-900 p-2 rounded"
//             to={page.path}
//             key={page.path}
//           >
//             <div className="flex flex-row gap-3">
//               {createElement(page.icon, { size: 24 })}
//               {!open && <span className="text-lg">{page.name}</span>}
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="flex-grow">{/* Icons */}</div>
//       <div className="flex items-center justify-center h-16">
//         <button className="hover:bg-gray-900 p-2 rounded">
//           <FiUser size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

import { LuHome, LuUser, LuBook } from "react-icons/lu";
import { createElement, useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
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
      name: "Perfil",
      icon: LuUser,
      path: "/profile",
    },
    {
      name: "Histórico",
      icon: LuBook,
      path: "/history",
    },
  ];

  return (
    <aside
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      className={` bg-zinc-900 transition-all  min-h-screen ${
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
                  <p
                    className={`flex items-center h-8 mx-4 ${
                      "/" === page.path ? "text-zinc-100" : "text-zinc-400"
                    } hover:text-zinc-100 transition-all`}
                    key={index}
                  >
                    {createElement(page.icon, { size: 24 })}
                    <span className="inline-block text-lg ml-2">
                      {page.name}
                    </span>
                  </p>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
