<template>
  <el-row id="container">
    <el-col :span="6" style="padding-right: 5px;">
      <div style="height: calc(100vh - 100px); padding: 20px; box-sizing: border-box; background-color: #FFFFFF; border-radius: 4px; overflow-x: hidden; overflow-y: scroll;">
        <div style="text-align: center;">
          <el-image style="width: 100px; height: 100px;" :src="require('@/assets/images/yal.jpg')"></el-image>
          <p style="font-size: 20px; font-weight: 500; margin-bottom: 0px;">文磊</p>
          <p style="font-size: 14px;">天行健，君子以自强不息</p>
        </div>
        <div style="padding: 30px; padding-top: 10px; padding-bottom: 0px; font-size: 14px;">
          <p><el-icon :size="14"><avatar /></el-icon>&nbsp;西南石油大学</p>
          <p><el-icon :size="14"><briefcase /></el-icon>&nbsp;计算机科学学院</p>
          <p><el-icon :size="14"><home-filled /></el-icon>&nbsp;物联网工程</p>
        </div>
        <el-divider></el-divider>
        <div style="font-size: 14px; padding-left: 20px;">
          <p>标签</p>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">诚实可靠小郎君</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">一尘不染美少年</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">风流倜傥</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">大长腿</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">帅哥</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">高富帅</el-tag>
        </div>
        
        <el-divider></el-divider>
        <div style="font-size: 14px; padding-left: 20px;">
          <p>项目</p>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">四川省成都市双流区江安河</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">四川省成都市双流区南湖湿地公园</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">四川省成都市温江区金马河</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">陕西省安康市紫阳县城关镇双坪村</el-tag>
          <el-tag type="info" style="margin-right: 5px; margin-left: 5px; margin-top: 10px;">青海省海西自治州乌兰县柯柯镇</el-tag>
        </div>
       
      </div>
    </el-col>
    <el-col :span="18" style="padding-left: 5px;">
      <el-row>
        <el-col :span="24" style="height: calc(100vh - 100px); background-color: #ffffff; border-radius: 4px; padding: 20px;">
          <el-tabs v-model="activeTab" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="tab1">
                <div style="height: calc(100vh - 194px); overflow-x: hidden; overflow-y: scroll;">
                  <el-form label-position="top" label-width="100px" :model="userInfoForm">
                    <el-form-item label="用户名">
                      <el-input v-model="userInfoForm.username" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="个人简介">
                      <el-input type="textarea" v-model="userInfoForm.profile" maxlength="80" show-word-limit clearable></el-input>
                    </el-form-item>
                    <el-form-item label="国家/地区">
                      <el-select v-model="userInfoForm.nation" placeholder="Select" style="100%;" clearable>
                        <el-option key="中国" label="中国" value="中国">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="所在省市">
                      <el-select v-model="userInfoForm.province" placeholder="Select" style="100%;" clearable>
                        <el-option key="成都市" label="成都市" value="成都市">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="邮箱">
                      <el-input v-model="userInfoForm.email" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                      <el-input v-model="userInfoForm.phone" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary">提  交</el-button>
                    </el-form-item>
                  </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane label="项目管理" name="tab2">
              <el-empty description="暂无数据"></el-empty>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

import { Avatar, Briefcase, HomeFilled } from '@element-plus/icons-vue'

export default {
  name: 'Profile',
  components: {
    Avatar,
    Briefcase,
    HomeFilled,
  },
  data() {
    return {
      activeTab: 'tab1',
      userInfoForm: {
        username: '文磊',
        profile: '天行健，君子以自强不息',
        nation: '中国',
        province: '成都',
        email: '0111qwejq@136.com',
        phone: '18603211669',
      },
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
</style>