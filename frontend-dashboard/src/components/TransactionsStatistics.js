import React, { useState, useEffect } from 'react';
import { getCombinedData } from '../api';

const TransactionsStatistics = ({ month }) => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const data = await getCombinedData(month);
      setStatistics(data.statistics);
    };
    fetchStatistics();
  }, [month]);

  return (
    <div>
      {statistics ? (
        <div>
          <p>Total Sales: {statistics.totalSales}</p>
          <p>Sold Items: {statistics.soldItems}</p>
          <p>Unsold Items: {statistics.unsoldItems}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionsStatistics;
