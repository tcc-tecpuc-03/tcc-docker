import { Sidebar } from "../../components/Layout/Sidebar";
import Chart from "react-apexcharts";
import Card from "./components/Card";
import "apexcharts/dist/apexcharts.css";
import { LuShoppingCart, LuArchive } from "react-icons/lu";

export default function Home() {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const chartOptions = {
    chart: {
      id: "bar-chart",
    },
    grid: {
      show: false,
    },
    yaxis: {
      // only show subtitle
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [...months],
    },
    colors: ["#9F67FF", "#7C3AED"],
  };

  const chartData = [
    {
      name: "Vendas mensais",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 900)),
    },
  ];

  return (
    <div className="flex flex-col flex-grow p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Itens comprados" icon={LuArchive}>
          <p className="text-3xl font-inter">10</p>
        </Card>
        <Card title="Maior venda" icon={LuShoppingCart}>
          <p className="text-3xl font-inter">R$ 10,00</p>
        </Card>
        <Card title="Cestas finalizadas" icon={LuShoppingCart}>
          <p className="text-3xl font-inter">10</p>
        </Card>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl text-black font-inter">Vendas mensais</h1>
        <Chart
          options={chartOptions}
          series={chartData}
          type="bar"
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
}
