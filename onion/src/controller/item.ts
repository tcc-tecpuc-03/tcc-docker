import { PrismaClient, items } from '@prisma/client';
import { IItem } from './types.t';

const prisma = new PrismaClient();

export const get = async (req: any, res: any) => {
    try {
        const items = await prisma.items.findMany();
        res.status(200).send(items);
    }catch(err) {
      res.status(500).send({ message: err.message || "Erro ao buscar itens" });
    }
}


