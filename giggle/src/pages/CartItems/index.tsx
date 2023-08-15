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
      <div className="flex w-full h-full">
        <aside className="fixed inset-y-0 right-0 w-3/12 bg-zinc-800 flex flex-col p-2">
          <div className="flex-grow">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-200 font-titillium">
              Cesta #{id}
            </h1>
          </div>

          <div className="flex w-full h-full ">
            <div className="overflow-y-auto max-h-[60vh] w-full ">
              {products.length > 0 ? (
                <Item data={products} />
              ) : (
                <p>Nenhum item na cesta.</p>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <span className="text-lg text-gray-200 font-inter">
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
