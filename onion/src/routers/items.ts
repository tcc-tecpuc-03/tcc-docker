import { Router } from 'express';
import { get, getByRFID, patch, post, remove } from '../controller/item';
import { itemDataSchema, validate } from '../validators/validator';

const router = Router()
  .get('/', get)
  .get('/:id', getByRFID)
  .post('/', validate(itemDataSchema), post)
  .patch('/:id', validate(itemDataSchema), patch)
  .delete('/:id', remove);

export default router;
