<template>
  <div id="contain"
       ref="container"
       style="height: 630px;width: 1380px"></div>
</template>
<script>
import * as echarts from "echarts"
export default {
  name: "Chart",
  mounted() {
    var dom = document.getElementById("contain")
    // let dom = document.getElementById("contain")
    var myChart = echarts.init(dom)

    var option

    option = {
      title: {
        text: "南京市各点水质检测情况",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["南邮内湖", "玄武湖", "经开区", "大黄水库", "新合工业园"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "南邮内湖",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "玄武湖",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "经开区",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "大黄水库",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "新合工业园",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    }
    option && myChart.setOption(option)
  },
}
</script>