import React, { useEffect } from 'react';
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

interface ChartProps {
  data: any[];
  categories?: string[];
  animationEnabled?: boolean;
  animationEasing?: "easeinout" | "linear" | "easein" | "easeout" | undefined;
  animationSpeed?: number;
  colorRanges?: { from: number; to: number; color: string }[];
  width?: string;
  height?: string;
}

export const ChartBar: React.FC<ChartProps> = ({
  data,
  categories = ["Jan", "Fev", "Mac", "Abr", "Mai", "Jun", "Jul"],
  animationEnabled = true,
  animationEasing = "easeinout",
  animationSpeed = 800,
  colorRanges = [
    { from: 100, to: 1000, color: "#271A45" },
    { from: 1000, to: 100000, color: "#7C3AED" },
  ],
  width = "100%",
  height = "400px",
}) => {
  useEffect(() => {
    ApexCharts.exec("basic-bar", "updateOptions", {
      chart: {
        animations: {
          enabled: animationEnabled,
          easing: animationEasing,
          speed: animationSpeed,
        },
      },
    });
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
      animations: {
        enabled: animationEnabled,
        easing: animationEasing,
        speed: animationSpeed,
      },
    },
    xaxis: {
      categories: categories,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: colorRanges,
        },
      },
    },
  };

  const series = [
    {
      name: "total vendido",
      data: data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={width}
      height={height}
    />
  );
};

