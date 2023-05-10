import logo from './logo.svg';
import '../src/App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState, useRef } from "react";
import { Data } from "./utils/Data";
import PieChart from "../src/components/PieChart"
import BarChart from '../src/components/BarChart';
import DoughnutChart from '../src/components/DoughnutChart';

import LineChart from './components/LineChart';
import RadarChart from './components/RadarChart';


Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Balance Score",
        data: Data.map((data) => data.userGain),
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
  });
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Using Chart.js in React</p>
        <PieChart chartData={chartData} />
        <BarChart chartData={chartData}></BarChart>
        <DoughnutChart chartData={chartData} />
        <LineChart chartData={chartData}/>
        <RadarChart chartData={chartData}/>
       
      </header>
    </div>
  );
}

export default App;
