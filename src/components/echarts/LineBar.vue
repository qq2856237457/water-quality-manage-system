<template>
  <div id="contain"
       ref="container">
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: "LineBar",
  props: ["data"],
  watch: {
    data: {
      deep: true,
      handler(newValue) {
        this.createBar()
      },
    },
  },
  data() {},
  methods: {
    createBar() {
      let chartDom = this.$refs.container
      let myChart = echarts.init(chartDom)
      let option

      option = {
        xAxis: {
          type: "category",
          data: ["8:00", "8:10", "8:20", "8:30", "8:40", "8:50", "9:00",'9:10','9:20','9:30','9:40','9:50'],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.data,
            type: "line",
          },
        ],
      }

      option && myChart.setOption(option)
    },
  },

  mounted() {
    this.createBar()
  },
}
</script>

<style scoped>
#contain {
  width: 1000px;
  height: 500px;
}
</style>