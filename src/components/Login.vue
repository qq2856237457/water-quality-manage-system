<template>
  <el-row>
    <el-col :span="16">
      <div class="left"></div>
    </el-col>
    <el-col :span="8">
      <div class="right">
        <div class="login">
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item>
              <p style="font-weight: bold; font-size: 32px;">基于GraphQL的水质监测系统</p>
            </el-form-item>
            <el-form-item prop="username" style="margin-top: 50px;">
              <el-input 
                v-model="form.username" 
                style="width:80%;" 
                placeholder="请输入用户名" 
                clearable>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" style="margin-top: 50px;">
              <el-input 
                v-model="form.password" 
                style="width:80%;" 
                placeholder="请输入密码" 
                show-password 
                clearable>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-top: 50px;">
              <el-button 
                type="primary" 
                style="width:80%; 
                font-weight: 500;" 
                @click="onSubmit('form')">登  录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="position: fixed; bottom: 0; font-size: 12px; color: #999; width: 34%;">
          -----水质检测-----
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '文磊',
        password: '123456',
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          },
        ]
      }
    }
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if ( this.form.username === '文磊' && this.form.password === '123456') {
            ElMessage({
              message: '登录成功，欢迎使用！',
              type: 'success',
              center: true,
              duration: 1000,
              onClose: () => {
                this.$router.push('/layout')
              }
            })
            localStorage.setItem('token', 'xxx')
          } else {
            ElMessage({
              message: '登录失败，用户名或密码错误！',
              type: 'error',
              center: true,
              duration: 3000,
            })
            localStorage.removeItem('token')
          }
        } else {
          return false
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.left {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/water.png');
  background-size: cover;
}

.right {
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
  position:relative;
  text-align: center;
}

.login {
  width: 90%;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}

/deep/ .el-form-item__error {
  margin-left: 10%;
  margin-right: 10%;
}
</style>
