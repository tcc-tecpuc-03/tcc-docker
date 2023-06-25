import { Router } from 'express';
import { get, post } from '../controller/basket';
import { itemDataSchema, validate } from '../validators/validator';

const router = Router().get('/', get).post('/', post);

export default router;
