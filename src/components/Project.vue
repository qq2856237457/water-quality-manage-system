<template>
  <el-row id="container">
    <el-col :span="24">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; text-align: right;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="项目名称">
                <el-input v-model="formInline.username" placeholder="项目名称" />
            </el-form-item>
            <el-form-item label="水源类型">
                <el-input v-model="formInline.phone" placeholder="水源类型" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Search /></el-icon>查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Plus /></el-icon>新增项目</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin-top: 15px;"></el-divider>
        <div style="height: calc(100vh - 260px);">
            <el-table :data="tableData" stripe style="width: 100%; text-align: center;" max-height="550">
                <el-table-column prop="id" label="序号" align="center" width="50" />
                <el-table-column prop="name" label="设备安装位置" align="center" />
                <el-table-column prop="type" label="监测水源类型" align="center" />
                <el-table-column prop="population" label="监测水质类别" align="center" />
                <el-table-column prop="device" label="设备状态" align="center" width="140" />
                <!-- <el-table-column prop="parameter" label="监测参数" align="center" width="140" /> -->
                <el-table-column prop="datetime" label="监测时间" align="center" />
                <el-table-column prop="" label="操作" align="center" width="200px">
                    <template #default="scope">
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                    </template>
                </el-table-column>
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

import { Search, Plus } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'

export default {
  name: 'Project',
  components: {
    Search,
    Plus
  },
  data() {
    return {
      formInline: {
        username : '',
        phone: '',
      },
      tableData: [
        {
            id: '1',
            name: '排水口1',
            type: '有机废水',
            population: '三级水质',
            device: '监测中',
            parameter: '',
            datetime: '2022-3-12 10:21:22',
        },
        {
            id: '2',
            name: '排水口2',
            type: '热污染废水',
            population: '四级水质',
            device: '监测中',
            parameter: '',
            datetime: '2022-3-12 10:21:22',
        },
        {
            id: '3',
            name: '排水口3',
            type: '无机废水',
            population: '一级水质',
            device: '监测中',
            parameter: '',
            datetime: '2022-3-12 11:45:42',
        },
        {
            id: '4',
            name: '排水口4',
            type: '重金属废水',
            population: '五级水质',
            device: '监测中',
            parameter: '',
            datetime: '2022-3-12 12:36:22',
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