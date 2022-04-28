<template>
  <el-container>
    <el-aside width="initial" style="height:100%">
      <!--
      <div style="text-align: center; height: 60px;">
        <img src="../assets/images/logo.png" style="background-size: cover; height: 48px; margin-top: 6px;" />
      </div>
      -->
      <el-menu style="height:940px" router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item id="logo">
          <el-icon style="font-size: 30px; color: #1d5299; margin-left: -15px;"><location /><img src="../assets/images/logo.png" style="background-size: cover; height: 50px; margin-top: -10px;"></el-icon>
          <span style="font-size: 15px; font-weight: bold;margin-right:-5px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水质智能监测与管理平台</span>
        </el-menu-item>
        <el-menu-item index="/layout/home">
          <el-icon class="iconfont icon-shouye"><location /></el-icon>
          <template #title><span>数据展示</span></template>
        </el-menu-item>
        <el-menu-item index="/layout/monitor">
          <el-icon class="iconfont icon-shishiboxingjiankongtu"><location /></el-icon>
          <template #title><span>实时监测</span></template>
        </el-menu-item>
        <el-menu-item index="/layout/notice">
          <el-icon class="iconfont icon-cheliangyujingxinxi"><location /></el-icon>
          <template #title><span>预警信息</span></template>
        </el-menu-item>
        <el-menu-item index="/layout/profile">
          <el-icon class="iconfont icon-icon7"><location /></el-icon>
          <template #title><span>个人中心</span></template>
        </el-menu-item>
        <el-sub-menu index="/layout/setting">
          <template #title>
            <el-icon class="iconfont icon-xitongshezhi"><location /></el-icon>
            <span>系统设置</span>
          </template>
            <el-menu-item index="/layout/project">&nbsp;&nbsp;项目管理</el-menu-item>
            <el-menu-item index="/layout/users">&nbsp;&nbsp;用户管理</el-menu-item>
            <el-menu-item index="/layout/logs">&nbsp;&nbsp;操作日志</el-menu-item>
        </el-sub-menu>
        <el-sub-menu>
          <template #title>
            <el-icon class="iconfont icon-jingyingyichang"><location /></el-icon>
            <span>异常页面</span>
          </template>
            <el-menu-item index="/layout/403">&nbsp;&nbsp;403</el-menu-item>
            <el-menu-item index="/layout/404">&nbsp;&nbsp;404</el-menu-item>
            <el-menu-item index="/layout/500">&nbsp;&nbsp;500</el-menu-item>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <!--
            <el-breadcrumb separator="/" style="margin-top: 25px; font-size: 12px;">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
            </el-breadcrumb>
            -->
            <el-icon @click="isCollapse = !isCollapse" v-if="isCollapse" style="cursor: pointer;"><Expand /></el-icon>
            <el-icon @click="isCollapse = !isCollapse" v-if="!isCollapse" style="cursor: pointer;"><Fold /></el-icon>
          </el-col>
          
          <el-col :span="12" style="text-align: right;">
            <el-avatar :size="32" style="vertical-align: middle;">
              <img src="../assets/images/yal.jpg" />  
            </el-avatar>&nbsp;
            <el-dropdown>
              <span class="el-dropdown-link" style="font-size: 14px;">
                NJUPT&nbsp;&nbsp;<strong style="font-size: 18px;">⋮</strong>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="onProfile">个人中心</el-dropdown-item>
                  <el-dropdown-item @click="dialogFormVisible = true">修改密码</el-dropdown-item>
                  <el-dropdown-item @click="onLogout" style="border-top: 1px solid #f2f2f2;">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="noneBar">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

  <el-dialog v-model="dialogFormVisible" title="修改密码" width="25%" center>
    <el-form :model="form" :label-position="labelPosition" label-width="100px">
      <el-form-item label="当前密码">
        <el-input v-model="form.oldPassword" autocomplete="off" placeholder="密码长度6到32为之间，包含数字和字母"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newPassword" autocomplete="off" placeholder="新密码和当前密码不能相同"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.confirmPassword" autocomplete="off" placeholder="确认密码与新密码必须保持一致"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { toRefs, reactive } from 'vue'
import { Fold, Expand } from '@element-plus/icons'

export default {
  name: 'Layout',
  data() {
    return {
      isCollapse: true,
    }
  },
  components: {
    Fold,
    Expand
  },
  methods: {//append-to-body="true" center
    onLogout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    onProfile() {
      this.$router.push('/layout/profile')
    }
  },
  setup() {
    const state = reactive({
      dialogFormVisible: false,
      labelPosition: 'top',
      form: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
    })
    return {
      ...toRefs(state),
    }
  },
}

</script>

<style lang="less" scoped>

.el-header {
  background-color: #ffffff;
  line-height: 60px;
  width: 100%;
  height: 60px;
  outline:none;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
}

.el-aside {
  background-color: #ffffff;
  // width: 300px;
  height: 100vh;
  // border-right: 5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 4px 0px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 0;
}

// .el-main {
//   background-color: #e9eef3;
// }

.el-menu-vertical-demo {
  border: 0px;
}

.el-menu-item {
  box-sizing: border-box;
  //border-left: 6px solid rgba(255, 255, 255, 0);
  //span {
  //  font-size: 12px;
  //}
}

.is-active {
  color: #ffffff;
  box-sizing:border-box;
  //border-left: 6px solid #0C8AFF;
  background-color: #409eff;
}

a {
  color: #000000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.router-link-active {
  text-decoration: none;
  color: #ffffff;
}

#logo {
  min-height: 60px; 
  margin-bottom: 20px;
}

</style>
