import React from 'react';
import { Line } from 'react-chartjs-2';

const StockChart = ({ data }) => {
  // Convert data to a format suitable for Chart.js
  const chartData = {
    labels: data.map((stock) => stock.date),
    datasets: [
      {
        label: 'Stock Price',
        data: data.map((stock) => stock.price),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h3>Stock Chart</h3>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;
