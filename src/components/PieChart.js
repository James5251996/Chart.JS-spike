import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  const DataforPieChart = [
    {
      title: "Movement",
      balanceScore: 150
    },
    {
      title: "Sleep",
      balanceScore: 50
    }, 
    {
      title: "Food",
      balanceScore: 125
    },
    {
      title: "Occupation",
      balanceScore: 300
    },
    {
      title: "Activity",
      balanceScore: 100
    },
  ]

    const [pieChartData, setPieChartData] = useState({
      labels: DataforPieChart.map(data => data.title),
      datasets: [
        {
          label: "Balance Score",
          data: DataforPieChart.map(data => data.balanceScore),
          backgroundColor: [
            "#31356e",
            "#6ce5e8",
            "#41b8d5",
            "#2f5f98 ",
            "#704e85"
  
          ],
          borderColor: "white",
          borderWidth: 1
        }
      ]

    })






    return (
      <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
        <Pie
          data={pieChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Balance Score for the Day"
              }
            }
          }}
        />
      </div>
    );
  }
  export default PieChart;