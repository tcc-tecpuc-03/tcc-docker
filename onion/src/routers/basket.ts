import express from "express";
import { validate } from "../validators/validator";
import { get, post } from "../controller/basket";

const router = express.Router();

router.get("/", get);
router.post("/", post);

export { router as basketRouter };