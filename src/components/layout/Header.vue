<template>
    <el-header>
        <el-row>
            <el-col :span="12">
            <el-breadcrumb separator="/" style="margin-top: 25px; font-size: 12px;">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">监测点分布</a></el-breadcrumb-item>
            </el-breadcrumb>
            </el-col>
            <el-col :span="12" style="text-align: right;">
            <el-avatar :size="32" style="vertical-align: middle;">
                <img src="../../assets/images/yal.jpg" />  
            </el-avatar>&nbsp;
            <el-dropdown>
                <span class="el-dropdown-link" style="font-size: 14px;">
                文磊&nbsp;&nbsp;<strong style="font-size: 18px;">⋮</strong>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item style="border-top: 1px solid #f2f2f2;">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style lang="less" scoped>

.el-header {
  background-color: #ffffff;
  line-height: 60px;
  width: 100%;
  height: 60px;
  outline:none;
  // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); // 不起作用
}

</style>
