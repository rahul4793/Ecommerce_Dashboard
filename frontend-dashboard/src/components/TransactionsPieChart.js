import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { getCombinedData } from '../api';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionsPieChart = ({ month }) => {
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const fetchPieChartData = async () => {
      const data = await getCombinedData(month);
      setPieChartData(data.pieChart);
    };
    fetchPieChartData();
  }, [month]);

  const chartData = {
    labels: Object.keys(pieChartData || {}),
    datasets: [
      {
        data: Object.values(pieChartData || {}),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4
      }
    ]
  };

  return (
    <div>
      {pieChartData ? <Pie data={chartData} /> : <p>Loading...</p>}
    </div>
  );
};

export default TransactionsPieChart;
