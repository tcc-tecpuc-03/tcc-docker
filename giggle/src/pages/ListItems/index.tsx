import { CardItem } from "./components/CardItem";

export const ListItems = () => {
  const mockData = Array.from({ length: 10 }, () => ({
    nome: `Item ${Math.random().toString(36)}`,
    preco: Math.random() * 100,
    imagem: "https://picsum.photos/200",
    categoria: `Categoria ${Math.random().toString(36)}`,
  }));

  return (
    <div className="flex min-h-screen bg-gray-200 py-2">
      <div className="container">
        <CardItem data={mockData} />
      </div>
    </div>
  );
};
