<template>
  <el-row id="container">
    <el-col :span="24">
      <div style="height: 100%; padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; text-align: right;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="用户名称">
                <el-input v-model="formInline.username" placeholder="用户名称" />
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input v-model="formInline.phone" placeholder="联系电话" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Search /></el-icon>查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit"><el-icon class="el-icon--left"><Plus /></el-icon>新增用户</el-button>
            </el-form-item>
        </el-form>
        <el-divider style="margin-top: 15px;"></el-divider>
        <div style="height: calc(100vh - 260px);">
            <el-table :data="tableData" stripe style="width: 100%; text-align: center;" max-height="550">
                <el-table-column prop="id" label="序号" align="center" width="50" />
                <el-table-column prop="username" label="用户名称" align="center" />
                <el-table-column prop="nation" label="国家/地区" align="center" />
                <el-table-column prop="province" label="所在省市" align="center" />
                <el-table-column prop="email" label="邮箱" align="center" />
                <el-table-column prop="phone" label="联系电话" align="center" />
                <el-table-column prop="profile" label="是否可用" align="center" />
                <el-table-column prop="" label="操作" align="center" width="260px">
                    <template #default="scope">
                        <el-button size="mini">编辑</el-button>
                        <el-button size="mini" type="danger">删除</el-button>
                        <el-button size="mini">分配权限</el-button>
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
  name: 'Users',
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
            username: '凯文化工厂',
            profile: '启用',
            nation: '中国',
            province: '南京',
            email: '2108119690@qq.com',
            phone: '18629881669',
        },
        {
            id: '2',
            username: '安科化工厂',
            profile: '停用',
            nation: '中国',
            province: '吉林',
            email: 'wf9426555@163.com',
            phone: '15590208650',
        },
        {
            id: '3',
            username: '摩登化工厂',
            profile: '停用',
            nation: '中国',
            province: '上海',
            email: '541684615@163.com',
            phone: '18608452134',
        },
        {
            id: '4',
            username: '阿斯顿化工厂',
            profile: '停用',
            nation: '美国',
            province: '华盛顿',
            email: '987564123@163.com',
            phone: '18654321654',
        },
        {
            id: '5',
            username: '范德萨化工厂',
            profile: '停用',
            nation: '中国',
            province: '天津',
            email: '321654897@163.com',
            phone: '13289541265',
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