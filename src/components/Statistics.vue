<template>
  <el-row id="container">
    <el-col :span="8" style="padding-right: 5px;">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; ">
        <el-radio-group v-model="radio1" style="margin-bottom: 10px; width: 100%; text-align: center;">
            <el-radio-button label="单点统计" round></el-radio-button>
            <el-radio-button label="多点统计"></el-radio-button>
        </el-radio-group>
        <el-input v-model="input" placeholder="请输入项目名称" clearable>
          <template #suffix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
        </el-input>
        <el-divider></el-divider>
        <div style="height: calc(100vh - 290px); overflow-x: hidden; overflow-y: scroll;">
          <el-card v-for="item in items" class="box-card" v-bind:class="{ 'card-active': itemIndex == item.id }" shadow="never" @click="switchItem(item)" style="margin-top: 5px; margin-bottom: 5px; font-size: 14px; cursor: pointer;">{{ item.name }}</el-card>
        </div>
      </div>
    </el-col>
    <el-col :span="16" style="padding-left: 5px;">
      <el-row>
        <el-col :span="24" style="height: 100px; padding: 30px; background-color: #ffffff; border-radius: 4px; margin-bottom: 10px;">
            
            <el-button-group style="margin-top: -5px; margin-right: 20px;">
              <el-button type="default">近一周</el-button>
              <el-button type="default">近一月</el-button>
              <el-button type="default">近一年</el-button>
            </el-button-group>
            <el-date-picker v-model="formInline.date" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间" :default-time="defaultTime1"></el-date-picker>
            
            <!--
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                    <el-button-group style="margin-top: -5px;">
                        <el-button type="default">近一周</el-button>
                        <el-button type="default">近一月</el-button>
                        <el-button type="default">近一年</el-button>
                    </el-button-group>
                </el-form-item>
                <el-form-item>
                    <el-date-picker v-model="formInline.date" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间" :default-time="defaultTime1"></el-date-picker>
                </el-form-item>
            </el-form>
            -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="height: calc(100vh - 210px); background-color: #ffffff; border-radius: 4px; padding: 20px;">
          <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="数据表格" name="data-tab">
              <el-table :data="tableData" stripe style="width: 100%; text-align: center;" height="calc(100vh - 300px)">
                <el-table-column prop="serialNumber" label="序号" align="center" width="50" />
                <el-table-column prop="parameter" label="参数" align="center" />
                <el-table-column prop="datetime" label="时间" align="center" />
                <el-table-column prop="parameterValue" label="数值" align="center" />
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

import { Search } from '@element-plus/icons-vue'
import { reactive, toRefs, ref } from 'vue'

import "echarts"

const items = [
  {
    id: 1,
    name: "江苏省南京市南京邮电大学校内湖",
    coordinate: ["118.555598", "32.062651"],
    pictures: ["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"],
    waterSourceType: "地表水",
    waterQaulityType: "Ⅰ类",
    address: "江苏省南京市南京邮电大学",
    latestData: "2022-01-01 10:10:00",
    parameter1: 1.3,
    parameter2: 18.1,
    parameter3: 3.8,
    parameter4: 43,
    parameter5: 43,
    parameter6: 65,
  },
  {
    id: 2,
    name: "江苏省南京市玄武湖公园",
    coordinate: ["118.475575", "32.041979"],
    pictures: ["https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg", "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"],
    waterSourceType: "地表水",
    waterQaulityType: "Ⅰ类",
    address: "江苏省南京市玄武湖公园",
    latestData: "2022-01-01 05:00:00",
    parameter1: 11.1,
    parameter2: 26.1,
    parameter3: 7.1,
    parameter4: 23,
    parameter5: 45,
    parameter6: 76,
  },
  {
    id: 3,
    name: "江苏省南京市经济技术开发区",
    coordinate: ["118.524417", "32.084897"],
    pictures: ["https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"],
    waterSourceType: "地表水",
    waterQaulityType: "Ⅳ类",
    address: "江苏省南京市经济技术开发区",
    latestData: "2022-01-01 18:00:00",
    parameter1: 1.8,
    parameter2: 23.5,
    parameter3: 8,
    parameter4: 18,
    parameter5: 33,
    parameter6: 89,
  },
  {
    id: 4,
    name: "江苏省南京市大黄水库",
    coordinate: ["118.32914", "32.015949"],
    pictures: ["https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"],
    waterSourceType: "地表水",
    waterQaulityType: "Ⅱ类",
    address: "江苏省南京市大黄水库",
    latestData: "2021-12-31 01:00:00",
    parameter1: 5.4,
    parameter2: 14,
    parameter3: 7,
    parameter4: 23,
    parameter5: 65,
    parameter6: 46,
  },
  {
    id: 5,
    name: "江苏省南京市新合民营工业园",
    coordinate: ["118.543541", "32.09194"],
    pictures: ["https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"],
    waterSourceType: "地下水",
    waterQaulityType: "劣Ⅴ类",
    address: "江苏省南京市新合民营工业园",
    latestData: "2021-11-01 00:00:00",
    parameter1: 3.3,
    parameter2: 24.1,
    parameter3: 5,
    parameter4: 44,
    parameter5: 41,
    parameter6: 87,
  }
]

export default {
  name: 'Statistics',
  components: {
      Search
  },
  mounted () {
    this.switchItem(items[0])
  },
  data() {
    return {
      input: '',
      items: items,
      itemIndex: 1,
      activeTab: 'data-tab',
      formInline: {
        date: '',
      },
      tableData: [
        {
          serialNumber: '1',
          parameter: '电导率',
          datetime: '2021-12-21 10:00:00',
          parameterValue: '150',
        },
        {
          serialNumber: '2',
          parameter: '电导率',
          datetime: '2021-12-21 10:10:00',
          parameterValue: '230',
        },
        {
          serialNumber: '3',
          parameter: '电导率',
          datetime: '2021-12-21 10:20:00',
          parameterValue: '224',
        },
        {
          serialNumber: '4',
          parameter: '电导率',
          datetime: '2021-12-21 10:30:00',
          parameterValue: '218',
        },
        {
          serialNumber: '5',
          parameter: '电导率',
          datetime: '2021-12-21 10:40:00',
          parameterValue: '135',
        },
        {
          serialNumber: '6',
          parameter: '电导率',
          datetime: '2021-12-21 10:50:00',
          parameterValue: '147',
        },
        {
          serialNumber: '7',
          parameter: '电导率',
          datetime: '2021-12-21 11:00:00',
          parameterValue: '260',
        },
        {
          serialNumber: '8',
          parameter: '电导率',
          datetime: '2021-12-21 11:10:00',
          parameterValue: '321',
        },
      ],
    }
  },
  methods: {
    switchItem(item) {
      this.itemIndex = item.id
      this.name = item.name
      this.coordinate = item.coordinate
      this.pictures = item.pictures
      this.waterSourceType = item.waterSourceType
      this.waterQaulityType = item.waterQaulityType
      this.address = item.address
    }
  },
}
</script>

<style lang="less" scoped>
#container {
  width:100%; 
  height:100%; 
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

.chart {
  margin-top: 30px;
  height: calc(100vh - 400px);
}
</style>