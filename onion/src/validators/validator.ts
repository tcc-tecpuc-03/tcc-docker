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

export const itemDataSchema = z.object({
  nome: z.string(),
  rfid: z.string(),
  descricao: z.string().optional(),
  estoque: z.number().optional(),
  imagem: z.string().optional(),
});