<template>
  <el-row id="container">
    <el-col :span="24">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; text-align: right;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="项目">
                <el-select v-model="formInline.name" placeholder="项目名称">
                    <el-option label="全部地点" value="全部地点"></el-option>
                    <el-option label="蓄水池1" value="蓄水池1"></el-option>
                    <el-option label="蓄水池2" value="蓄水池2"></el-option>
                    <el-option label="蓄水池3" value="蓄水池3"></el-option>
                    <el-option label="蓄水池4" value="蓄水池4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间">
                <el-date-picker v-model="formInline.date" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间" :default-time="defaultTime1"></el-date-picker>
            </el-form-item>
            <el-form-item label="处理状态">
                <el-select v-model="formInline.status" placeholder="处理状态">
                    <el-option label="全部" value="全部"></el-option>
                    <el-option label="已处理" value="已处理"></el-option>
                    <el-option label="未处理" value="未处理"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Search /></el-icon>查询</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin-top: 15px;"></el-divider>
        <div style="height: calc(100vh - 260px);">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="id"
                  label="蓄水池"
                  width="64">
                </el-table-column>
                <el-table-column
                  prop="startTime"
                  label="起始监测时间"
                  width="190">
                </el-table-column>
                <el-table-column
                  prop="endTime"
                  label="终止监测时间"
                  width="190">
                </el-table-column>
                <el-table-column
                  prop="level"
                  label="水质等级"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="pollutionAnalyse"
                  label="污染分类"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="measure"
                  label="处理情况"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="measureEffect"
                  label="处理效果"
                  width="100">   
                </el-table-column>
                <el-table-column
                  prop="depth"
                  label="水质评分"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="updateTime"
                  label="处理时间"
                  width="190">
                </el-table-column>
                <el-table-column
                  prop="monitorPointId"
                  label="监测设备"
                  width="80">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="200">                
                  <detailss></detailss>
                </el-table-column>
              </el-table>         
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import { Search } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'
import axios from 'axios'
import Detailss from './detailss.vue'

export default {
  name: 'Notice',
  components: {
    Search,
    Detailss
  },
  data() {    
    return {
      
      showModal: false,
      formInline: {
        name: '',
        date: '',
        status: '',
      },
      tableData:[
        {
          "id": 1,
          "title": "ph值",
          "startTime": "2022-02-11 10:12:20",
          "endTime": "2022-02-12 10:12:20",
          "level": '三级水质',
          "pollutionAnalyse": "有机废水",
          "measure": "暂未处理",
          "measureEffect": "较差",
          "monitorPointNodeId": 1,
          "monitorPointId": '一号设备',
          "depth": 75,
          "createTime": "2022-02-11 10:12:20",
          "creatorId": 1,
          "updateTime": "待处理",
          "editorId": 1
        },
        {
          "id": 2,
          "title": "ph值",
          "startTime": "2022-02-11 10:12:20",
          "endTime": "2022-02-12 10:12:20",
          "level": '四级水质',
          "pollutionAnalyse": "热污染废水",
          "measure": "降低pH值",
          "measureEffect": "较差",
          "monitorPointNodeId": 1,
          "monitorPointId": '二号设备',
          "depth": 68,
          "createTime": "2022-02-11 10:12:20",
          "creatorId": 1,
          "updateTime": "2022-02-11 10:12:20",
          "editorId": 1
        },
        {
          "id": 3,
          "title": "ph值",
          "startTime": "2022-02-11 10:12:20",
          "endTime": "2022-02-12 10:12:20",
          "level": '一级水质',
          "pollutionAnalyse": "无机废水",
          "measure": "暂无需处理",
          "measureEffect": "好",
          "monitorPointNodeId": 1,
          "monitorPointId": '三号设备',
          "depth": 92,
          "createTime": "2022-02-11 10:12:20",
          "creatorId": 1,
          "updateTime": "无需处理",
          "editorId": 1
        },
        {
          "id": 4,
          "title": "ph值",
          "startTime": "2022-02-11 10:12:20",
          "endTime": "2022-02-12 10:12:20",
          "level": '五级水质',
          "pollutionAnalyse": "重金属废水",
          "measure": "加碱、过滤",
          "measureEffect": "差",
          "monitorPointNodeId": 1,
          "monitorPointId": '四号设备',
          "depth": 55,
          "createTime": "2022-02-11 10:12:20",
          "creatorId": 1,
          "updateTime": "2022-02-11 10:12:20",
          "editorId": 1
        },
      ],
      
    }
  },
  methods: {
    handleClickLook() {
      this.$router.replace('/detailss')
    },
    handleClickEdit() {
      this.$router.replace('/detailss')
    },
    open() {
        this.$prompt('请输入要执行的操作', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的操作是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
  },

  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      defaultTime1: [new Date(2000, 1, 1, 12, 0, 0)], // '12:00:00'
      defaultTime2: [
        new Date(2000, 1, 1, 12, 0, 0),
        new Date(2000, 2, 1, 8, 0, 0),
      ], // '12:00:00', '08:00:00'
    })

    return toRefs(state)
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