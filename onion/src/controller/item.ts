import { PrismaClient, items } from '@prisma/client';
import { IItem } from './types.t';
import { itemDataSchema } from '../validators/validator';

const prisma = new PrismaClient();

export const get = async (req: any, res: any) => {
    try {
        const items = await prisma.items.findMany();
        res.status(200).send(items);
    }catch(err) {
      res.status(500).send({ message: err.message || "Erro ao buscar itens" });
    }
}

export const post = async (req: any, res: any) => {
   try {
    const item: IItem = itemDataSchema.parse(req.body);
   prisma.items.create({
    data: {
      nome: item.nome,
      rfid: item.rfid,
      categoria: item.categoria,
      preco: item.preco,
      imagem: item.imagem,
    },
  });
   } catch (err) {
    res.status(500).send({ message: err.message || "Erro ao criar item" });
   }
}


