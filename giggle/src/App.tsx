import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Sidebar } from "./components/Layout/Sidebar";
import { useLocation } from "react-router-dom";

export function App() {
  const location = useLocation();
  const hideSidebar = ["/cesta/"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="w-screen h-screen flex">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-screen h-screen ">
          {!hideSidebar && <Sidebar />}
          <main className="bg-white p-4 flex-grow w-full h-full">
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </main>
        </div>
      </Suspense>
    </div>
  );
}
