import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { Item } from "./components/item";
import { useParams } from "react-router-dom";

interface Item {
  id: number;
  item: {
    id: number;
    rfid: string;
    nome: string;
    categoria: number;
    imagem: string;
    preco: string;
    deleted: boolean;
  };
}

interface CartItem {
  id: number;
  nome: string;
  created_at: string;
  deleted: boolean;
  items: Item[];
}

export default function CartItems() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await api.get(`/basket/${id}`);
      const items = response.data || [];
      setProducts(items);
      console.log(items);
    } catch (error) {
      console.error("Erro ao carregar os produtos da cesta:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full py-2 lg:py-10 p-4">
      <div className="p-6 rounded bg-gray-100 shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-1/3">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-700 font-titillium">
          Cesta #{id}
        </h1>

        <div className="overflow-y-auto max-h-[60vh]">
          {products.length > 0 ? (
            <Item data={products} />
          ) : (
            <p>Nenhum item na cesta.</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-lg text-gray-500 font-inter">
            Total: R${" "}
            {products
              .reduce(
                (acc: number, curr: CartItem) =>
                  acc +
                  curr.items.reduce(
                    (acc: number, curr: Item) =>
                      acc + Number(curr?.item?.preco ?? 0),
                    0
                  ),
                0
              )
              .toFixed(2)}
          </span>

          <Button>Finalizar compra</Button>
        </div>
      </div>
    </div>
  );
}
