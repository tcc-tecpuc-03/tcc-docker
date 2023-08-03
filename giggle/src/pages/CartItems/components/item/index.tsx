import React from "react";

interface ItemData {
  quantidade: number;
  imagem: string;
  nome: string;
  preco: number;
  id: number;
}

interface ItemProps {
  data: {
    id: number;
    nome: string;
    created_at: string;
    deleted: boolean;
    items: {
      id: number;
      item: ItemData;
    }[];
  }[];
}

export function Item(props: ItemProps) {
  const calculateTotalQuantity = (itemId: number) => {
    const items = props.data.flatMap((carrinho) => carrinho.items);
    const filteredItems = items.filter((item) => item.item.id === itemId);
    return filteredItems.length;
  };

  const renderedItems: number[] = [];

  return (
    <>
      {props.data.map((carrinho) => (
        <div key={carrinho.id}>
          {carrinho.items.map((item, index) => {
            if (!renderedItems.includes(item.item.id)) {
              renderedItems.push(item.item.id);
              return (
                <div
                  key={item.id}
                  className="flex flex-row items-center justify-between w-full border-b-2 border-gray-200 py-4 "
                >
                  <div className="flex flex-row items-center">
                    <img
                      src={
                        item.item.imagem || "URL_DA_IMAGEM_PADRAO_SE_NAO_TIVER"
                      }
                      alt="item"
                      className="w-16 h-16 rounded-md object-cover"
                    />

                    <div className="flex flex-col ml-4">
                      <span className="text-lg font-bold text-gray-700 font-titillium">
                        {item.item.nome}
                      </span>
                      <span className="text-sm text-gray-500 font-inter">
                        R$ {item.item.preco}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <span className="text-lg font-bold text-gray-700 font-titillium">
                      {calculateTotalQuantity(item.item.id)}
                    </span>
                    <button className="ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </>
  );
}
