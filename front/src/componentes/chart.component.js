import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
 
const ChartComponent = () => {

  useEffect(() => {

    const options = {

      series: [

        {

          name: "Sensor Temperatura",

          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],

        },

        {

          name: "Sensor Contador",

          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],

        },

        {

          name: "Sensor Umidade",

          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],

        },

        {

            name: "Sensor Luminosidade",

            data: [31, 45, 33, 28, 41, 51, 49, 58, 43],

          },

      ],

      chart: {

        type: "bar",

        height: 350,

      },

      plotOptions: {

        bar: {

          horizontal: false,

          columnWidth: "75%",

          endingShape: "rounded",

        },

      },

      dataLabels: {

        enabled: false,

      },

      stroke: {

        show: true,

        width: 2,

        colors: ["transparent"],

      },

      xaxis: {

        categories: [

          "Feb",

          "Mar",

          "Apr",

          "May",

          "Jun",

          "Jul",

          "Aug",

          "Sep",

          "Oct",

        ],

      },

      yaxis: {

        title: {

          text: "Sensores",

        },

      },

      fill: {

        opacity: 1,

      },

      tooltip: {

        y: {

          formatter: function () {

            return "Sensores " + " usados";

          },

        },

      },

    };
 
    const chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
 
    return () => chart.destroy();

  }, []);
 
  return (
<div

      id="chart"

      style={{

        width: "200%",  

        height: "500px", 

        margin: "0 auto",

      }}
></div>

  );

};
 
 
export default ChartComponent;

 