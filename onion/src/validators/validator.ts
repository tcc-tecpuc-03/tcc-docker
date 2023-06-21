import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import z from "zod";
export function validate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('SCHEMA ',schema.parse(req.body));
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).send({ error: error.errors });
      } else {
        next(error);
      }
    }
  };
}
