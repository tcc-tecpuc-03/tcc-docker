import { Router } from 'express';
import itemRouter from './items';
import basketRouter from './basket';

const router = Router().use('/items', itemRouter).use('/basket', basketRouter);

export default router;
