import { Line } from "react-chartjs-2";

const LineChart = ({chartData}) => {
    return (
        <div>
    <h2 style={{ textAlign: "center" }}>Line Chart</h2>
    <Line
    data={chartData}
    />
    </div>
    )
}

export default LineChart;

