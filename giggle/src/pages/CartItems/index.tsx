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
    <>
      <div className="flex">
        <aside className="fixed inset-y-0 right-0 w-3/12 bg-zinc-800 flex flex-col p-2">
          <div className="flex-grow">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-200 font-titillium">
              Cesta #{id}
            </h1>
          </div>
          <div className="mt-auto">
            <Button
              buttonProps={{
                style: {
                  width: "100%",
                },
              }}
            >
              Finalizar compra
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
