import { PrismaClient, items } from '@prisma/client';
import { IItem } from './types.t';
import { itemDataSchema } from '../validators/validator';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
  try {
    const items = await prisma.items.findMany({
      where: {
        deleted: false,
      },
    });
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao buscar itens' });
  }
};

export const getByRFID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const items = await prisma.items.findMany({
      where: {
        rfid: id,
      },
    });
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao buscar itens' });
  }
};

export const post = async (req: Request, res: Response) => {
  try {
    const item: IItem = itemDataSchema.parse(req.body);
    await prisma.items.create({
      data: {
        nome: item.nome,
        rfid: item.rfid,
        categoria: item.categoria,
        preco: item.preco,
        imagem: item.imagem,
      },
    });
    res.status(200).send({
      message: 'Item criado com sucesso',
      item,
    });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao criar item' });
  }
};

export const patch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const item: IItem = itemDataSchema.parse(req.body);
    await prisma.items.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome: item.nome,
        rfid: item.rfid,
        categoria: item.categoria,
        preco: item.preco,
        imagem: item.imagem,
      },
    });
    res.status(200).send({
      message: 'Item atualizado com sucesso',
      item,
    });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao atualizar item' });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.items.update({
      where: {
        id: parseInt(id),
      },
      data: {
        deleted: true,
      },
    });
    res.status(200).send({
      message: 'Item deletado com sucesso',
    });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao deletar item' });
  }
};
