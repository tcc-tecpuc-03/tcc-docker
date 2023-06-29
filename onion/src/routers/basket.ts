import { Router } from 'express';
import { get, getById, post, put } from '../controller/basket';
import { itemDataSchema, validate } from '../validators/validator';

const router = Router().get('/', get).post('/', post).get('/:id', getById).post('/:id', put);

export default router;
