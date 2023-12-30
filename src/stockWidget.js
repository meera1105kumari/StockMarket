// components/StockWidget.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockWidget = ({ symbol }) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual IEX Cloud API key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
        
        const response = await axios.get(apiUrl);
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div className="stock-widget">
      {stockData ? (
        <div>
          <h2>{stockData.symbol}</h2>
          <p>{stockData.companyName}</p>
          <p>Last Price: ${stockData.latestPrice}</p>
          <p>Change: {stockData.change} ({stockData.changePercent}%)</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockWidget;
