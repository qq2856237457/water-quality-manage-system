<template>
  <el-row id="container">
    <el-col :span="24">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; text-align: right;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="操作类型">
                <el-select v-model="formInline.name" placeholder="操作类型">
                    <el-option label="全部" value="全部"></el-option>
                    <el-option label="Search" value="Search"></el-option>
                    <el-option label="Update" value="Update"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="操作时间">
                <el-date-picker v-model="formInline.operationTime" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间" :default-time="defaultTime1"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Search /></el-icon>查询</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin-top: 15px;"></el-divider>
        <div style="height: calc(100vh - 260px);">
            <el-table :data="tableData" stripe style="width: 100%; text-align: center;" max-height="550">
                <el-table-column prop="logId" label="序号" align="center" width="50" />
                <el-table-column prop="operationType" label="操作类型" align="center" />
                <el-table-column prop="operationContent" label="操作内容" align="center" />
                <el-table-column prop="operator" label="操作人" align="center" />
                <el-table-column prop="operationTime" label="操作时间" align="center" />
                <el-table-column prop="ipAdreess" label="IP地址" align="center" />
            </el-table>
            <div class="block" style="margin-top: 10px; text-align: center;">
                <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
            </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import { Search } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'

export default {
  name: 'Notice',
  components: {
    Search
  },
  data() {
    return {
      formInline: {
        operationType : '',
        operationTime: '',
      },
      tableData: [
        {
          logId: '1',
          operationType: '查询',
          operationContent: '查询水质信息',
          operator: '张三',
          operationTime: '2021-12-20 12:20:53',
          ipAdreess: '127.0.0.1'
        },
        {
          logId: '2',
          operationType: '处理污水',
          operationContent: '加酸中和',
          operator: '李四',
          operationTime: '2021-12-20 11:20:00',
          ipAdreess: '127.0.0.2'
        },
        {
          logId: '3',
          operationType: '查询',
          operationContent: '查询水质信息',
          operator: '王五',
          operationTime: '2021-12-23 12:00:00',
          ipAdreess: '127.0.0.1'
        },
        {
          logId: '4',
          operationType: '处理污水',
          operationContent: '加入沉降剂',
          operator: '杨六',
          operationTime: '2021-12-24 8:00:00',
          ipAdreess: '127.0.0.1'
        },
        {
          logId: '5',
          operationType: '检查',
          operationContent: '设备检查',
          operator: '丁二',
          operationTime: '2021-12-25 18:00:00',
          ipAdreess: '127.0.0.1'
        },
      ],
    }
  },
  setup() {
    const operationTime = reactive({
      value1: '',
      value2: '',
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
      defaultTime2: [
        new Date(2000, 1, 1, 12, 0, 0),
        new Date(2000, 2, 1, 8, 0, 0),
      ], // '12:00:00', '08:00:00'
    })
    return toRefs(operationTime)
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
</style>