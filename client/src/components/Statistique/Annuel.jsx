import React, { useState, useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const CustomLineYearChart = ({ specialite }) => {
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
      score: '75',
      date: new Date('2025-02-15'),
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
      date: new Date('2023-04-15'),
      promo: 'ING TELECOM'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '25',
      date: new Date('2024-05-15'),
      promo: 'ING INSTRU'
    },
    {
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '105',
      date: new Date('2025-06-15'),
      promo: 'ING MACS'
    },{
      name: 'Test Statistique 2',
      mode: 'Normal',
      score: '45',
      date: new Date('2023-07-15'),
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
      score: '95',
      date: new Date('2025-09-15'),
      promo: 'ING INSTRU'
    }
  ];
  const filteredStatistics = specialite === 'default' || specialite === 'all'
  ? testStatistics 
  : testStatistics.filter(stat => stat.promo === specialite);
  // Regrouper et calculer la moyenne par année
  const groupByYear = (stats) => {
    const sums = {};
    const counts = {};
    stats.forEach(stat => {
      const year = stat.date.getFullYear();
      if (!sums[year]) {
        sums[year] = 0;
        counts[year] = 0;
      }
      sums[year] += Number(stat.score);
      counts[year]++;
    });
    return Object.keys(sums).map(year => ({
      year,
      averageScore: sums[year] / counts[year]
    }));
  };
  useEffect(() => {
    // Groupe les données filtrées par année et calcule la moyenne
    const groupedData = groupByYear(filteredStatistics);

    setChartData({
      labels: groupedData.map(data => data.year),
      datasets: [{
        label: `Moyenne des scores par année ${specialite !== 'default' && specialite !== 'all' ? '- ' + specialite : ''}`,
        data: groupedData.map(data => data.averageScore),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    });
  }, [specialite]); // Inclure specialite dans les dépendances de l'effet

  useEffect(() => {
    if (chartRef.current && chartData.labels) {
      const chartContext = chartRef.current.getContext('2d');
      const lineChart = new Chart(chartContext, {
        type: 'line',
        data: chartData,
      });

      return () => lineChart.destroy();
    }
  }, [chartData]);
  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};


export default CustomLineYearChart;