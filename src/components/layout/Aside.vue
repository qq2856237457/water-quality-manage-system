<template>
    <el-aside>
      <div style="text-align: center; height: 60px;">
        <img src="../../assets/images/logo.png" style="background-size: cover; height: 48px; margin-top: 6px;" />
      </div>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" style="border: 0px; margin-top: 20px; height:100%">
        <el-menu-item index="1">
          <router-link to="/login"><span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span></router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span class="iconfont icon-shouye">&nbsp;&nbsp;一级导航菜单</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>

export default {
  name: 'Aside',
}
</script>

<style lang="less" scoped>

.el-aside {
  background-color: #ffffff;
  width: 300px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); // 不起作用
}

.is-active {
  color: #ffffff;
  border-left: 4px solid #0C8AFF;
  background-color: rgba(24, 144, 255, 0.7);
}

</style>
