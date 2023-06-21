import { prisma } from "../prisma/client";
import { Request, Response } from "express";
import { validate } from "../validators/validator";

export const get = async (req: Request, res: Response) => {
  try {
    const items = await prisma.buysket_items.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await prisma.buysket_items.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const post = async (req: Request, res: Response) => {
  try {
    const { name, price, image_url, rfid } = req.body;

    if(req.body === undefined) throw new Error('Body is undefined')

    const item = await prisma.buysket_items.create({
      data: {
        name,
        price,
        rfid,
        image_url: image_url || "https://picsum.photos/200",
      },
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
