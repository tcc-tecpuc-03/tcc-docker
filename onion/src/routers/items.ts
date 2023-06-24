import { Router } from "express";
import { get } from "../controller/item";

const router = Router().get("/", get);

export default router;
