import { Radar } from "react-chartjs-2"

const RadarChart = ({ chartData }) => {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
            <Radar
                data={chartData}
                options={{
                    plugins: {
                        scales: {
                            y: {
                                ticks: {
                                    display: false
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default RadarChart