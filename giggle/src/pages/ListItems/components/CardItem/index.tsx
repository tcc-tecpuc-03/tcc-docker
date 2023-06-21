import React from "react";

interface Item {
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;
}

interface CardItemProps {
  data: Item[];
}

export const CardItem = (props: CardItemProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {props.data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img
            src={item.imagem}
            alt={item.nome}
            className="p-2 w-full h-56 object-cover"
          />
          <div className="p-4 font-titillium">
            <h2 className="text-xl font-semibold mb-2">{item.nome}</h2>
            <p className="text-gray-600 mb-4">{item.categoria}</p>
            <p className="text-gray-800 font-bold text-lg">
              R$ {item.preco.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
