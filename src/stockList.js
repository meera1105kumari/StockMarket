import React from 'react';

const StockList = ({ data }) => {
  return (
    <div>
      <h3>Stock List</h3>
      <ul>
        {data.map((stock) => (
          <li key={stock.symbol}>{stock.name} - {stock.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
