import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Suspense>
  );
}
