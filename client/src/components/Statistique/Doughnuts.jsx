import React from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components outside of the CustomChart component. No need to export this.
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

function CustomChart({ data }) {
    const chartRef = React.useRef(null);
  
    React.useEffect(() => {
      const chartContext = chartRef.current.getContext('2d');
      const doughnutChart = new Chart(chartContext, {
        type: 'doughnut', 
        data: data,
        options: {
          plugins: {
            legend: {
              position: 'bottom',
              align: 'start', // Alignement de la légende.
              labels: {
                // Génération des labels avec les valeurs de pourcentage.
                generateLabels: function (chart) {
                  const data = chart.data;
                  if (data.labels.length && data.datasets.length) {
                    return data.labels.map((label, i) => {
                      const meta = chart.getDatasetMeta(0);
                      const total = meta.total;
                      const value = data.datasets[0].data[i];
                      const percentage = ((value / total) * 100).toFixed(2) + '%';
      
                      return {
                        text: `${label}: ${value} (${percentage})`,
                        fillStyle: data.datasets[0].backgroundColor[i],
                      };
                    });
                  } else {
                    return [];
                  }
                }
              }
            }
          }
        }
      });

      // Proper cleanup: destroy chart instance when the component unmounts
      return () => {
        doughnutChart.destroy();
      };
    }, [data]);
  
    return <canvas ref={chartRef} />;
}

// Export CustomChart as the default export
export default CustomChart;
