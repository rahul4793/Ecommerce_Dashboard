import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { getCombinedData } from '../api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionsBarChart = ({ month }) => {
  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const data = await getCombinedData(month);
      setBarChartData(data.barChart);
    };
    fetchBarChartData();
  }, [month]);

  const chartData = {
    labels: Object.keys(barChartData || {}),
    datasets: [
      {
        label: 'Price Range',
        data: Object.values(barChartData || {}),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      {barChartData ? <Bar data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};
export default TransactionsBarChart;
