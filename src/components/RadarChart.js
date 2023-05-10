import { Radar } from "react-chartjs-2"
import React, { useState, useRef } from "react";
import { CircleSlider } from "react-circle-slider";

const RadarChart = ({ chartData }) => {
    const [mScore, setMScore] = useState(150);
    const [sleepScore, setSleepScore] = useState(125);
    const [foodScore, setFoodScore] = useState(34);
    const [oScore, setOScore] = useState(78);
    const [aScore, setAScore] = useState(80);
    const DataforRadarChart = [
        {
            title: "Movement",
            balanceScore: mScore
        },
        {
            title: "Sleep",
            balanceScore: sleepScore
        },
        {
            title: "Food",
            balanceScore: foodScore
        },
        {
            title: "Occupation",
            balanceScore: oScore
        },
        {
            title: "Activity",
            balanceScore: aScore
        },
    ]

    const [radarChartData, setRadarChartData] = useState({
        labels: DataforRadarChart.map(data => data.title),
        datasets: [
            {
                label: "Balance Score",
                data: DataforRadarChart.map(data => data.balanceScore),
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

    function TotalBalanceScore () {
        let sum = Number(mScore) + Number(sleepScore) + Number(foodScore) + Number(oScore) + Number(aScore)
        if( sum > 500) {
            setChangeValue(500)
        } else {
        setChangeValue(sum)
        }

    }




    const [value, setChangeValue] = useState(200);
    const slider = useRef(null);




    return ( <>
    <input placeholder="Movement" type="number"  onChange={(event) => setMScore(event.target.value)}></input>
    <input placeholder="Sleep" type="number"  onChange={(event) => setSleepScore(event.target.value)}></input>
    <input placeholder="Food" type="number"  onChange={(event) => setFoodScore(event.target.value)}></input>
    <input placeholder="Occupation" type="number"  onChange={(event) => setOScore(event.target.value)}></input>
    <input placeholder="Activity" type="number"  onChange={(event) => setAScore(event.target.value)}></input>
        <div>
            <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
            <Radar
                data={radarChartData}
                options={{

                        scales: {
                            r: {
                                ticks: {
                                    color: "#6ce5e8",
                                    font: 1,
                                    showLabelBackdrop: true
                                }
                            }
                        }
                    
                }}
            />
        </div>
        <button onClick={TotalBalanceScore}>Submit</button>
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
            disabled={true}
         />
         </div>
         
         </> )
}

export default RadarChart