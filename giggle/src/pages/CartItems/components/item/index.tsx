interface data {
  name: string;
  price: number;
  quantity: number;
  image: string;
  id: number;
}
interface ItemProps {
  data: data[];
}

export function Item(props: ItemProps) {
  return (
    <>
      {props.data.map((item) => (
        <div className="flex flex-row items-center justify-between w-full border-b-2 border-gray-200 py-4">
          <div className="flex flex-row items-center">
            <img
              src={item.image}
              alt="item"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex flex-col ml-4">
              <span className="text-lg font-bold text-gray-700 font-titillium">
                {item.name}
              </span>
              <span className="text-sm text-gray-500 font-inter">
                R$ {item.price.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-lg font-bold text-gray-700 font-titillium">
              {item.quantity}
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
      ))}
    </>
  );
}
