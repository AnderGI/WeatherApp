import Chart from "chart.js/auto";
import { getTempInfo } from "../utils/temperature";
import { dateFormatter } from "../utils/date";
import { $ } from "../utils/selectors";

const ctx = document.getElementById("chart");

export function renderGraph(groupedData, isTempInC) {
  //getChart -> Static Method that taking the id of the chart as the parameter
  //it will return the chart instance or undefined
  let chartStatus = Chart.getChart("chart"); // <canvas> id
  if (chartStatus) {
    chartStatus.destroy();
  }
  const selectedWeatherCardName = $("article.selected").dataset.dayname;
  const dayForecast = groupedData.forecastInfo[selectedWeatherCardName];
  const xLabels = dayForecast.map(({ date_txt }) =>
    dateFormatter(date_txt, "p")
  );
  const yLabels = dayForecast.map(({ temp }) => {
    const { C, F } = getTempInfo(temp);
    return isTempInC ? C : F;
  });

  new Chart(ctx, {
    type: "line",
    data: {
      labels: xLabels,
      datasets: [
        {
          label: "Daily 3h forecast Temperature",
          data: yLabels,
          borderWidth: 1,
        },
      ],
    },
    options: {
      elements: {
        line: {
          tension: 0,
        },
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function (value, index, ticks) {
              const tempSymbol = isTempInC ? " C" : " F";
              return value + "º" + tempSymbol;
            },
          },
        },
      },
    },
  });
}
