import { PrismaClient, items } from '@prisma/client';
import { z } from 'zod';
import { itemDataSchema } from '../validators/validator';

const prisma = new PrismaClient();

// Definindo a tipagem para os dados do item
type ItemData = {
  nome: string;
  rfid: string;
  descricao?: string;
  estoque?: number;
  imagem?: string;
};

export async function post(data: ItemData): Promise<items> {
  try {
    const validatedData = itemDataSchema.parse(data);

    const newItem = await prisma.items.create({
      data: {
        validatedData,
      },
    });

    return newItem;
  } catch (error) {
    throw new Error(`Não foi possível criar o novo item: ${error.message}`);
  }
}
