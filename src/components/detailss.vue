<template>
<div>
  <slot name="edit">
     <el-select v-model="value" filterable placeholder="请选择后续操作">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-switch
      v-model="isEdit"
      active-text="已处理"
      inactive-text="未处理">
    </el-switch>   
  </slot>
</div>

  

</template>

<script>
  export default {
    name:'detailss',
    props:["isEdit"],
    data() {
      return {
        options: [{
          value: '选项1',
          label: '加碱中和'
        }, {
          value: '选项2',
          label: '过滤'
        }, {
          value: '选项3',
          label: '蒸馏'
        }, {
          value: '选项4',
          label: '吸附'
        }, {
          value: '选项5',
          label: '投入消毒剂'
        },
        {
          value: '选项6',
          label: '加酸中和'
        }],
        value: ''
      }
    },
    mounted() {
      // console.log(this);
    }
  };
</script>
<style>

</style>