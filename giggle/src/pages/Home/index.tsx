import { Sidebar } from "../../components/Layout/Sidebar";
import Chart from "react-apexcharts";
import Card from "./components/Card";
import "apexcharts/dist/apexcharts.css";
import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  const chartOptions = {
    chart: {
      id: "bar-chart",
    },
    xaxis: {
      categories: [
        "Categoria 1",
        "Categoria 2",
        "Categoria 3",
        "Categoria 4",
        "Categoria 5",
      ],
    },
  };

  const chartData = [
    {
      name: "Série 1",
      data: [30, 40, 45, 50, 49],
    },
    {
      name: "Série 2",
      data: [10, 15, 20, 25, 30],
    },
  ];

  return (
    <div className="flex">
      <div className="w-64 bg-gray-200">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Card 1" />
          <Card title="Card 2" />
          <Card title="Cestas finalizadas" icon={FiShoppingBag}>
            <p className="text-3xl font-inter">10</p>
          </Card>
        </div>
        <div className="mt-4">
          <Chart
            options={chartOptions}
            series={chartData}
            type="bar"
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
