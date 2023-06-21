import { Button } from "../../components/Button";
import { Item } from "./components/item";

// generate data with random values
const data = Array.from({ length: 10 }, (_, i) => ({
  name: `Item ${i + 1}`,
  price: Number((Math.random() * 100).toFixed(2)),
  quantity: Math.floor(Math.random() * 10) + 1,
  image: `https://picsum.photos/200?random=${i + 1}`,
  id: i + 1,
}));

export default function CartItems() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-2 lg:py-10">
      <div className="p-6 bg-white rounded shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-1/3">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-700 font-titillium">
          Cesta #{Math.floor(Math.random() * 1000) + 1}
        </h1>

        <div className="overflow-y-auto max-h-[60vh]">
          <Item data={data} />
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg text-gray-500 font-inter">
            Total: R$ 320,00
          </span>
          <Button>Finalizar compra</Button>
        </div>
      </div>
    </div>
  );
}
