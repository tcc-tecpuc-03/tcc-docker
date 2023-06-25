import { Router } from "express";
import { get, patch, post, remove } from "../controller/item";
import { itemDataSchema, validate } from "../validators/validator";

const router = Router()
.get("/", get)
.post('/', validate(itemDataSchema), post)
.patch('/:id', validate(itemDataSchema), patch)
.delete('/:id', remove);


export default router;
