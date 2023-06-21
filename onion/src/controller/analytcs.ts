import { prisma } from "../prisma/client";
import { Request, Response } from "express";

export const analyzeSales = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const items = await prisma.buysket_items.findMany({
      include: {
        buysket_basket_items: true,
      },
    });

    const salesData = items.map((item) => ({
      name: item.name,
      sales: item.buysket_basket_items.length,
    }));

    salesData.sort((a, b) => b.sales - a.sales);

    res.status(200).json(salesData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
