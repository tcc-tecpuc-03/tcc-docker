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
  imagem: z.string().optional(),
  categoria: z.number(),
  preco: z
    .number()
    .refine((val) => val > 0, {
      message: "O preço deve ser maior que 0",
    })
    .refine((val) => Number.isInteger(val * 100), {
      message: "O preço deve ter no máximo duas casas decimais",
    })
    .transform((val) => Number(val.toFixed(2))),
});
