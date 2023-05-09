import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";
import PieChart from "../src/components/PieChart"
import BarChart from '../src/components/BarChart';


Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Using Chart.js in React</p>
        <PieChart chartData={chartData} />
        <BarChart chartData={chartData}></BarChart>
      </header>
    </div>
  );
}

export default App;
