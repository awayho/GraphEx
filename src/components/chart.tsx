//import {CurrencyDollarIcon} from '@heroicons/react/24/outline'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const data = {
  labels: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  datasets: [
    {
      label: "FAF4",
      data: [33, 53, 85, 41, 44, 65, 76, 41, 46, 65, 76, 41],
      fill: true,
      backgroundColor: "rgba(0, 217, 84,0.2)",
      borderColor: "rgba(0, 217, 84,1)"
    },
    {
      label: "FAT1",
      data: [33, 25, 35, 51, 54, 76, 85, 31, 26, 55, 36, 51],
      fill: false,
      backgroundColor: "#FF7272",
      borderColor: "#FF0000"
    },
    {
      label: "FAT2",
      data: [40, 20, 15, 69, 51, 46, 76, 41, 30, 20, 32, 65],
      fill: false,
      backgroundColor: "#E2DBFF",
      borderColor: "#9681EB"
    }
  ]
};

const Chart = () => {
  return (
    <div className="w-5/6">
      {/* <span className="flex flex-row items-center ml-2 mb-2 font-bold text-[14px] text-oceanblue">
        <CurrencyDollarIcon className="w-5 h-5 mr-2" color="rgba(0, 217, 84,1)" />
        Testing Chart
      </span> */}
      <div style={{width: 700}}></div>
      <Line data={data} />
    </div>
  )
}

export default Chart;