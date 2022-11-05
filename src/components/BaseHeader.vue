<template>
  <div class="header">
    <el-row>
      <el-col :span="4" :offset="20">
        <el-space class="space">
          <span class="link" @click="login">登录</span>
          <span class="link" @click="regist">注册</span>
          <span class="link" @click="personCenter">个人中心</span>
        </el-space>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="4" :offset="4">
        <el-image src=""></el-image>
        <span>logoname</span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input1" size="default" class="w-50 m-2" placeholder="商品搜索" :suffix-icon="Search"
          @change="handleInputChange" />
      </el-col>
      <el-col class="col" :span="4" :offset="3">
        <el-icon class="icon">
          <Service />
        </el-icon>在线客服
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-menu mode="horizontal" :default-active="activeIndex" :ellipsis="false" :router="true"
        @select="handleMenuSelect">
        <el-menu-item route="/home" index="1">首页</el-menu-item>
        <el-menu-item route="/loveFlower" index="2">爱情鲜花</el-menu-item>
        <el-menu-item route="/birthdayFlower" index="3">生日鲜花</el-menu-item>
        <el-menu-item route="/friendFlower" index="4">友情鲜花</el-menu-item>
        <el-menu-item route="/weddingFlower" index="5">婚庆鲜花</el-menu-item>
      </el-menu>
    </el-row>
    <el-dialog v-model="showLogin">
      <el-form :model="formData" ref="formRef" :label-width="100">
        <el-form-item label="用户名" prop="userName">
          <el-input placeholder="请输入用户名" v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-model="formData.password">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginForm(formRef)">Submit</el-button>
          <el-button @click="resetLogin(formRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-model="showRegist">
      <el-form :model="registData" ref="formRef" :label-width="100">
        <el-form-item label="用户名" prop="userName">
          <el-input placeholder="请输入用户名" v-model="registData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-model="registData.password">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registForm(formRef)">Submit</el-button>
          <el-button @click="resetRegist(formRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Search, Service } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import useLogin from '../logis/useLogin'
import useRegist from '../logis/useRegist'
import {useRouter} from 'vue-router'

const router = useRouter();
let {login, formData, showLogin, loginForm, resetLogin} = useLogin();
let {regist, registData, showRegist, registForm, resetRegist} = useRegist();
let input1 = ref('');
let activeIndex = ref('1');
const formRef = ref<FormInstance>();
const handleMenuSelect = (index: string): void => {
  activeIndex.value = index;
}
const handleInputChange = (value:string):void => {

}
const personCenter = () => {
  router.push({path:'/personCenter'})
}
</script>
<style scoped>
.icon
{
  color: red;
}

.col
{
  display: flex;
  align-items: center;
}

.space
{
  padding: 10px 0;
}
.link{
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>