// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from './Backbutton';


const Dashboard = () => {
    const navigate = useNavigate();
 
    const [stocks, setStocks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
  
    useEffect(() => {
      const getStocksData = async () => {
        try {
          const response = await axios.get(
            'https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=pk_85f3a8219df849ab901a724fcc4d0046'
          );
  
          setStocks( response.data);
        } catch (e) {
          console.error('Fetching data error', e);
        }
      };
  
      getStocksData();
    }, []);
  
    const sortStocks = () => {
      let filteredStocks = [...stocks];
  
      
      if (searchTerm) {
        filteredStocks = filteredStocks.filter(
          (stock) =>
            stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
            stock.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      
      if (sortBy === 'symbol') {
        return filteredStocks.sort((a, b) => a.symbol.localeCompare(b.symbol));
      } else if (sortBy === 'latestPrice') {
        return filteredStocks.sort((a, b) => a.latestPrice - b.latestPrice);
      } else {
        return filteredStocks;
      }
    };
  
    const handleSortChange = (e) => {
      setSortBy(e.target.value);
    };


  
    return (
        <div className="stock-card-container">
          {stocks.map((stock) => (
            <div key={stock.symbol} className="stock-card">
              <h3>{stock.symbol}</h3>
              <p>{stock.companyName}</p>
              <p>Latest Price: {stock.latestPrice}</p>
            </div>
          ))}


<BackButton />

      </div>

     
    );


};

export default Dashboard;


