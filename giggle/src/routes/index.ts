import { lazy } from "react";
import { ListItems } from "../pages/ListItems";
import CreateItem from "../pages/CreateItem";
import CartItems from "../pages/CartItems";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { Error } from "../pages/Page404";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*",
    404: true,
    component: Error,
  },
  {
    path: "/auth",
    component: Login,
  },
  {
    path: "/cesta/:id",
    component: CartItems,
  },
  {
    path: "/createitem",
    component: CreateItem,
  },
  {
    path: "/listitem",
    component: ListItems,
  },
];

export default routes;
