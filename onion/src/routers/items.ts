import { Router } from "express";
import { get, post } from "../controller/item";
import { itemDataSchema, validate } from "../validators/validator";

const router = Router()
.get("/", get)
.use('/', validate(itemDataSchema), post);

export default router;
