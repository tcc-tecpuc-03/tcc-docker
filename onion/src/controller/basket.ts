import { prisma } from "../prisma/client";
import { Request, Response } from "express";
import { validate } from "../validators/validator";
import { Decimal } from "@prisma/client/runtime";

interface Item {
  id: number;
  name: string;
  price: Decimal;
  image_url: string | null;
  rfid: string | null;
}

interface Basket {
  basket_id: number;
  items: Item[];
}

interface CreateBasket {
  items: string[];
}


export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    const basketItems = await prisma.buysket_basket_items.findMany({
      select: {
        basket_id: true,
        buysket_items: true,
      },
    });

    const baskets: { [key: number]: Basket } = {};

    basketItems.forEach((item) => {
      const id = item.basket_id;

      if (!baskets[id]) {
        baskets[id] = {
          basket_id: id,
          items: [],
        };
      }
      if (item.buysket_items) {
        baskets[id].items.push({
          id: item.buysket_items.id,
          name: item.buysket_items.name,
          price: item.buysket_items.price,
          image_url: item.buysket_items.image_url,
          rfid: item.buysket_items.rfid,
        });
      }
    });

    const formattedBaskets: Basket[] = Object.values(baskets);
    res.status(200).json(formattedBaskets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
 
export const post = async (req: Request, res: Response): Promise<void> => {
  try {
    const { items } = req.body as CreateBasket;

    const basket = await prisma.buysket_basket.create({
      data: {
        buysket_basket_items: {
          create: items.map((item) => ({
            buysket_items: {
              connect: {
                rfid: item,
              },
            },
          })),
        },
      },
    });

    res.status(201).json({ message: "Basket created successfully.", basket });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};