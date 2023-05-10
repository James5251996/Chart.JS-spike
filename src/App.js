import logo from './logo.svg';
import '../src/App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { useState, useRef } from "react";
import { Data } from "./utils/Data";
import PieChart from "../src/components/PieChart"
import BarChart from '../src/components/BarChart';
import DoughnutChart from '../src/components/DoughnutChart';
import { CircleSlider } from "react-circle-slider";
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
  
  const [value, setChangeValue] = useState(200);
  const slider = useRef(null);

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
        <DoughnutChart chartData={chartData} />
        <LineChart chartData={chartData}/>
        <RadarChart chartData={chartData}/>
        <h2>Circluar Slider</h2>
        <div className='AppCircle'>
      <div className="textContainer">
        {value}
        <div className="minute">MINUTES</div>
      </div>
        <CircleSlider
          ref={slider}
          value={value}
          stepSize={1}
          onChange={value => setChangeValue(value)}
          size={250}
          max={501}
          gradientColorFrom="#6ce5e8"
          gradientColorTo="#2f5f98"
          knobRadius={15}
          circleWidth={20}
          // disabled={true}
        />
        </div>
        <input type="number" onChange={(event) => setChangeValue(event.target.value)}></input>
      </header>
    </div>
  );
}

export default App;
