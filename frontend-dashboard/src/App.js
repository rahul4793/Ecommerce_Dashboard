import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import TransactionsPieChart from './components/TransactionsPieChart';
import './App.css';  
const App = () => {
  const [selectedMonth, setSelectedMonth] = useState('March');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div>
      <h1>Transactions Dashboard</h1>

      <select value={selectedMonth} onChange={handleMonthChange}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <TransactionsStatistics month={selectedMonth} />
      <TransactionsTable month={selectedMonth} />

      
      <div className="chart-container">
        <TransactionsBarChart month={selectedMonth} />
      </div>

    
      <div className="chart-container">
        <TransactionsPieChart month={selectedMonth} />
      </div>
    </div>
  );
};

export default App;
