import { Legend, plugins } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
    return (
    <div>
        <h2 style={{ textAlign: "center" }}> Doughnut Chart</h2>
        <Doughnut
        data={chartData}
        options={{
            plugins:{
            legend: {
                display: false,
            },
            subtitle: {
                display: true,
                text: "Balance Score"
            },
            backgroundColor: "#31356e"
            }}
        }>
        </Doughnut>
    </div>)
}

export default DoughnutChart;