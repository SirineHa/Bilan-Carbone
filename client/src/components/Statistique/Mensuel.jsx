import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CustomLineChart = ({ specialite }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });

  // Noms des mois en français
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stats/GetStats');
        // Filtre les données pour l'année 2024 et par spécialité si non 'default'
        const filteredData = response.data.filter(d => 
          new Date(d.date).getFullYear() === 2024 && 
          (specialite === 'default' || d.spe === specialite)
        );

        const groupedData = filteredData.reduce((acc, item) => {
          const month = new Date(item.date).getMonth(); // Get month as an index
          acc[month] = acc[month] || [];
          acc[month].push(parseFloat(item.scoreTotal)); // Parse the scoreTotal to number
          return acc;
        }, {});

        // Prepare labels and data for the chart
        const labels = Object.keys(groupedData).sort().map(m => monthNames[m]);
        const scores = Object.keys(groupedData).sort().map(m => 
          (groupedData[m].reduce((sum, current) => sum + current, 0) / groupedData[m].length).toFixed(2)
        );

        setChartData({
          labels,
          datasets: [{
            label: `Score Moyen Mensuel pour ${specialite === "default" ? "toutes spécialités" : specialite}`,
            data: scores,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques mensuelles", error);
      }
    };

    fetchStats();
  }, [specialite]);  // Re-run when specialite changes

  return <Line data={chartData} />;
};

export default CustomLineChart;





  
 