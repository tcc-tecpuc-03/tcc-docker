import express from "express";
import { validate } from "../validators/validator";
import { get, getById, post } from "../controller/item";

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", post);

export { router as itemRouter };