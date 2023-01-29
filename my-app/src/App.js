import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per study session"],
  ["Zoning out", 4],
  ["Coffee breaks", 2],
  ["Agony", 2],
  ["Searching answers via Stack Overflow", 9],
  ["Actual coding", 7],
];

export const options = {
  title: "My Coding Activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
