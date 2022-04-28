<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
html,body,#app{
  height: 100%;
  margin: 0 auto;
  padding: 0 auto;
}
#app {
  font-size: 12px;
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
