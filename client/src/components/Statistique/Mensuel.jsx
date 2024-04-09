

import React, { useState, useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const CustomLineChart = ({ specialite }) => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  const testStatistics = [
    {
      name: 'Test Statistique 1',
      mode: 'Normal',
      score: '75',
      date: new Date('2024-01-15'),
      promo: 'ING INFO'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-02-15'),
      promo: 'ING ENER'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '95',
      date: new Date('2024-03-15'),
      promo: 'ING INFO'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-04-15'),
      promo: 'ING TELECOM'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-05-15'),
      promo: 'ING INSTRU'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-06-15'),
      promo: 'ING MACS'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-07-15'),
      promo: 'ING INFO'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-08-15'),
      promo: 'ING ENER'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-09-15'),
      promo: 'ING INSTRU'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-10-15'),
      promo: 'ING TELECOM'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-11-15'),
      promo: 'ING MACS'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-12-15'),
      promo: 'ING ENER'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '85',
      date: new Date('2024-02-15'),
      promo: 'ING INFO'
    }
  ];

  const groupByMonth = (stats) => {
    const groupedData = {};

    stats.forEach(stat => {
      const month = `${stat.date.getFullYear()}-${stat.date.getMonth() + 1}`;
      if (!groupedData[month]) {
        groupedData[month] = { totalScore: 0, count: 0 };
      }
      groupedData[month].totalScore += Number(stat.score);
      groupedData[month].count += 1;
    });

    return Object.entries(groupedData).map(([month, data]) => {
      return {
        month,
        averageScore: data.totalScore / data.count
      };
    });
  };

  useEffect(() => {
    const filteredData = specialite === "default"
      ? testStatistics // Si "default", utilisez toutes les données
      : testStatistics.filter(stat => stat.promo === specialite);

    const monthlyData = groupByMonth(filteredData);

    setChartData({
      labels: monthlyData.map(data => data.month),
      datasets: [{
        label: 'Score mensuel moyen',
        data: monthlyData.map(data => data.averageScore),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    });
  }, [specialite]);

  useEffect(() => {
    if (chartRef.current && chartData.datasets?.length > 0) {
      const chartContext = chartRef.current.getContext('2d');
      const lineChart = new Chart(chartContext, {
        type: 'line',
        data: chartData,
      });
  
      return () => lineChart.destroy();
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default CustomLineChart;

  
 