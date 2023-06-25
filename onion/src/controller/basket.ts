import { PrismaClient, items } from '@prisma/client';
import { Ibasket, IbasketItem } from './types.t';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const get = async (req: Request, res: Response) => {
  try {
    const baskets = await prisma.basket.findMany({
      where: {
        deleted: false,
      },
      include: {
        basket_items: {
          include: {
            items: true,
            basket: true,
          },
        },
      },
    });

    res.status(200).json(
      baskets.map(({ basket_items, created_at, id, deleted, nome }) => {
        return {
          id,
          nome,
          created_at,
          deleted,
          items: basket_items.map(({ items, basket, id }) => {
            return {
              id,
              item: items,
            };
          }),
        };
      })
    );
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao buscar itens' });
  }
};

export const post = async (req: Request, res: Response) => {
  const { rfid } = req.body as { rfid: string[] };
  const { nome } = req.body as Ibasket;
  try {
    const basket = await prisma.basket.create({
      data: {
        nome: nome || 'Carrinho',
        created_at: new Date(),
      },
    });

    const basketItemsPromises = rfid.map(async (itemRfid) => {
      const item = await prisma.items.findFirst({
        where: {
          rfid: itemRfid,
        },
      });

      if (!item) {
        throw new Error(`Item com RFID ${itemRfid} não encontrado.`);
      }

      const basket_item = await prisma.basket_items.create({
        data: {
          id_basket: basket.id,
          id_item: item.id,
        },
      });

      return {
        id: basket_item.id,
        item: item,
      };
    });

    const basketItems = await Promise.all(basketItemsPromises);

    res.status(200).json({
      id: basket.id,
      nome: basket.nome,
      created_at: basket.created_at,
      items: basketItems,
    });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Erro ao criar itens' });
  }
};
