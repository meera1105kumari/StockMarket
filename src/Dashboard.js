import React, { useEffect, useState } from 'react';
import StockList from './stockList';
import StockChart from './stockChart';
import { fetchStockData } from './stockService';

const Dashboard = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch real-time stock data
    const fetchData = async () => {
      try {
        const data = await fetchStockData();
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Stock Market Dashboard</h2>
      <StockChart data={stockData} />
      <StockList data={stockData} />
    </div>
  );
};

export default Dashboard;
