<template>
  <el-row id="container">
    <el-col :span="4"
            style="padding-right: 5px;">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px;">
        <el-input v-model="input"
                  placeholder="请输入项目名称"
                  clearable>
          <template #suffix>
            <el-icon class="el-input__icon">
              <Search />
            </el-icon>
          </template>
        </el-input>
        <el-divider></el-divider>
        <div style="height: calc(100vh - 230px); overflow-x: hidden; overflow-y: scroll;">
          <el-card v-for="item in items"
                   class="box-card"
                   v-bind:class="{ 'card-active': itemIndex == item.id }"
                   shadow="never"
                   @click="switchItem(item)"
                   style="margin-top: 5px; margin-bottom: 5px; font-size: 14px; cursor: pointer;">{{ item.name }}</el-card>
        </div>
      </div>
    </el-col>
    <el-col :span="20"
            style="padding-left: 5px;">
      <el-row>
        <el-col :span="24"
                style="height: 120px; background-color: #ffffff; border-radius: 4px; margin-bottom: 10px; padding: 20px; padding-top: 0px;">
          <h4>{{ name }}</h4>
          <ul class="demo-icon-list">
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ latestData }}</span>
                <small>最新数据</small>
              </span>
            </li>

            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter1 }}</span>
                <small>ph值</small>
              </span>
            </li>
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter2 }}</span>
                <small>电导率</small>
              </span>
            </li>
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter3 }}</span>
                <small>温度</small>
              </span>
            </li>
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter4 }}</span>
                <small>浊度</small>
              </span>
            </li>
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter5 }}</span>
                <small>溶解氧</small>
              </span>
            </li>
            <li class="icon-item">
              <span class="demo-svg-icon">
                <span style="margin-bottom: 10px; font-weight: bold;">{{ parameter6 }}</span>
                <small>COD</small>
              </span>
            </li>
          </ul>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"
                style="height: calc(100vh - 230px); background-color: #ffffff; border-radius: 4px; padding: 20px;">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="项目信息"
                         name="tab1">
              <div style="height: calc(100vh - 300px); overflow-x: hidden; overflow-y: scroll;">
                <el-row>
                  <el-col :span="24">
                    <el-descriptions title=""
                                     column="2"
                                     style="padding: 20px 20px 0px 20px;"
                                     border>
                      <el-descriptions-item label="排水口:">{{ name }}</el-descriptions-item>
                      <el-descriptions-item label="污水类别:">{{ waterSourceType }}</el-descriptions-item>
                      <el-descriptions-item label="水质分类:">{{ waterQaulityType }}</el-descriptions-item>
                      <el-descriptions-item label="项目地址:">{{ address }}</el-descriptions-item>
                    </el-descriptions>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24"
                          style="padding: 0px 20px 0px 20px;">
                    <el-divider style=" margin-bottom: 0px;"></el-divider>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12"
                          style="padding: 20px 5px 0px 20px;">
                    <div id="project-map"
                         style="width: 100%; height: calc(100vh - 500px); border: 1px solid #f1f1f1; border-radius: 4px;"></div>
                  </el-col>
                  <el-col :span="12"
                          style="padding: 20px 20px 0px 5px;">
                    <el-carousel :interval="5000"
                                 arrow="always"
                                 height="calc(100vh - 500px)">
                      <el-carousel-item v-for="picture in pictures"
                                        :key="picture"
                                        style="display: block;">
                        <!--<img :src="picture" style="background-size: cover; width: 100%; height: 100%; border: 1px solid #f1f1f1; border-radius: 4px;" />-->
                        <el-image lazy
                                  :src="picture"
                                  style="background-size: cover; width: 100%; height: 100%; border: 1px solid #f1f1f1; border-radius: 4px;"></el-image>
                      </el-carousel-item>
                    </el-carousel>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane label="监测数据"
                         name="tab2">
              <div class="tab"
                   style="height: calc(100vh - 300px); overflow-x: hidden; overflow-y: scroll;">
                <el-form :inline="true"
                         :model="formInline"
                         class="demo-form-inline"
                         style="margin-top:-5px;">
                  <el-form-item label="">
                    <el-button-group style="margin-top: 5px;"
                                     size="mini">
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('ph值')">ph值</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('电导率')">电导率</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('温度')">温度</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('浊度')">浊度</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('溶解氧')">溶解氧</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('COD')">COD</el-button>
                      <el-button type="default"
                                 size="small"
                                 @click="handleMonitorData('悬浮物质')">悬浮物质</el-button>

                    </el-button-group>
                  </el-form-item>
                </el-form>
                <el-tabs style="magin-top:-5px"
                         v-model="dataPresentationTab">
                </el-tabs>
                {{ yLabel }}
                <line-bar :data="lineData"></line-bar>
              </div>

            </el-tab-pane>
          </el-tabs>

        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import AMap from "AMap" // 引入高德地图
import LineBar from "@/components/echarts/LineBar"
let map = {}
import { Search } from "@element-plus/icons-vue"
import "echarts"
import { ref } from "vue"
const items = [
  {
    id: 1,
    name: "一号排水口",
    coordinate: ["118.555598", "32.062651"],
    pictures: [
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.yOG9gtZCTNWh_S-uQb2KngHaE7?w=263&h=180&c=7&r=0&o=5&pid=1.7",
    ],
    waterSourceType: "地表水",
    waterQaulityType: "三级水质",
    address: "蓄水池一",
    latestData: "2022-3-12 10:00:00",
    parameter1: 6.2,
    parameter2: 1000,
    parameter3: 65,
    parameter4: 2.2,
    parameter5: 1.7,
    parameter6: 500,
  },
  {
    id: 2,
    name: "二号排水口",
    coordinate: ["118.475575", "32.041979"],
    pictures: [
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.e9EbfnIbVwvJqMf7Z3d5VwHaEo?w=281&h=180&c=7&r=0&o=5&pid=1.7",
    ],
    waterSourceType: "地表水",
    waterQaulityType: "四级水质",
    address: "蓄水池二",
    latestData: "2022-3-12 10:00:00",
    parameter1: 9.0,
    parameter2: 1500,
    parameter3: 83,
    parameter4: 3.2,
    parameter5: 1.0,
    parameter6: 250,
  },
  {
    id: 3,
    name: "三号排水口",
    coordinate: ["118.524417", "32.084897"],
    pictures: [
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.kr9nmHIjxofCGtupxzQbkgHaE6?w=251&h=180&c=7&r=0&o=5&pid=1.7",
    ],
    waterSourceType: "地表水",
    waterQaulityType: "一级水质",
    address: "蓄水池三",
    latestData: "2022-3-12 10:00:00",
    parameter1: 7.0,
    parameter2: 600,
    parameter3: 55,
    parameter4: 1.1,
    parameter5: 2.8,
    parameter6: 100,
  },
  {
    id: 4,
    name: "四号排水口",
    coordinate: ["118.32914", "32.015949"],
    pictures: [
      "https://tse1-mm.cn.bing.net/th/id/R-C.fdcb3aaf30aa9ae3d1dc31b6a97a5265?rik=kyU0hT4YxFVXzQ&riu=http%3a%2f%2fpic0.huitu.com%2fres%2f20190112%2f1360054_20190112160153225132_1.jpg&ehk=OuI6pN1JBsHVVltZ9VbCtjSQEuVR2Nk62uk4jsCQ2ps%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
      ],
    waterSourceType: "地表水",
    waterQaulityType: "五级水质",
    address: "蓄水池四",
    latestData: "2022-3-12 10:00:00",
    parameter1: 5.5,
    parameter2: 1300,
    parameter3: 80,
    parameter4: 4.0,
    parameter5: 0.35,
    parameter6: 380,
  },
]

export default {
  name: "tab",
  mounted() {
    this.switchItem(items[0])
  },
  components: {
    Search,
    LineBar,
  },
  data() {
    return {
      input: "",
      items: items,
      itemIndex: 1,
      id: 1,
      name: "",
      coordinate: [],
      pictures: [],
      waterSourceType: "",
      waterQaulityType: 0,
      address: "",
      latestData: "",
      parameter1: 0,
      parameter2: 0,
      parameter3: 0,
      parameter4: 0,
      parameter5: 0,
      parameter6: 0,
      activeTab: "tab1",
      formInline: {},
      dataPresentationTab: "chart",
      tableData: [],
      lineData: [],
      yLabel: "ph值",
    }
  },
  methods: {
    createMap(item) {
      map = new AMap.Map("project-map", {
        center: item.coordinate,
        resizeEnable: true,
        zoom: 12,
      })
      var marker = new AMap.Marker({
        position: item.coordinate,
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      })
      marker.setMap(map)
    },
    switchItem(item) {
      this.itemIndex = item.id
      this.name = item.name
      this.coordinate = item.coordinate
      this.pictures = item.pictures
      this.waterSourceType = item.waterSourceType
      this.waterQaulityType = item.waterQaulityType
      this.address = item.address
      this.latestData = item.latestData
      this.parameter1 = item.parameter1
      this.parameter2 = item.parameter2
      this.parameter3 = item.parameter3
      this.parameter4 = item.parameter4
      this.parameter5 = item.parameter5
      this.parameter6 = item.parameter6
      this.createMap(item)
    },

    handleMonitorData(label) {
      this.yLabel = label
      switch (label) {
        case "ph值":
          this.lineData = [6.2,6.3,6.3,6.4,6.5,6.7,6.3,6.4,6.2,6.3,6.2,6.2]
          break
        case "电导率":
          this.lineData = [855,870,960,1020,1080,1150,1200,1100,1040,1060,1020,980]
          break
        case "温度":
          this.lineData = [62,65,67,65,68,72,78,76,69,64,62,61]
          break
        case "浊度":
          this.lineData = [2.2,2.1,2.3,2.1,2.2,2.3,2.4,2.6,2.2,2.3,2.4,2.1]
          break
        case "溶解氧":
          this.lineData = [1.5,1.2,1.4,1.6,1.8,1.9,1.8,2.1,2.2,2.5,2.4,2.6]
          break
        case "COD":
          this.lineData = [550,580,680,620,520,410,420,320,350,450,430,450]
          break
        case "悬浮物质":
          this.lineData = [210,190,180,190,210,220,225,240,220,240,245,255]
      }
    },
  },
  setup: () => {
    const option = ref({
      grid: {
        left: 60,
        right: 50,
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
        },
      ],
      xAxis: {
        type: "category",
        data: [
          "2021-12-21 10:00:00",
          "2021-12-21 10:10:00",
          "2021-12-21 10:20:00",
          "2021-12-21 10:30:00",
          "2021-12-21 10:40:00",
          "2021-12-21 10:50:00",
          "2021-12-21 11:00:00",
          "2021-12-21 11:10:00",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          symbolSize: 8,
          data: [150, 230, 224, 218, 135, 147, 260, 321],
        },
      ],
    })
    const option2 = ref({
      grid: {
        left: 60,
        right: 50,
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 0,
          end: 100,
        },
      ],
      xAxis: {
        type: "category",
        data: [
          "2021-12-21 10:00:00",
          "2021-12-21 10:10:00",
          "2021-12-21 10:20:00",
          "2021-12-21 10:30:00",
          "2021-12-21 10:40:00",
          "2021-12-21 10:50:00",
          "2021-12-21 11:00:00",
          "2021-12-21 11:10:00",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          symbolSize: 8,
          data: [150, 130, 224, 218, 135, 147, 260, 321],
        },
      ],
    })

    return {
      option,
      option2,
    }
  },
}
</script>


<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  // background-color: #FFFFFF;
}

::-webkit-scrollbar {
  width: 0px;
}

.card-active {
  color: #ffffff;
  background-color: #409eff;
}

.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: -6px;
}
.demo-icon-list .icon-item {
  text-align: center;
  color: var(--el-text-color-regular);
  font-size: 12px;
  transition: background-color var(--el-transition-duration);
}
.demo-icon-list .icon-item .demo-svg-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  margin-left: 10px;
}

.chart {
  margin-top: 30px;
  height: calc(100vh - 500px);
}
</style>