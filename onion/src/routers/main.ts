import { Router } from "express";
import itemRouter from './items';

const router = Router()
.use('/items', itemRouter)
;

export default router;
