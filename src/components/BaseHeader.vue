<template>
  <div class="header">
    <el-row>
      <el-col :span="4" :offset="20">
        <el-space class="space">
          <el-link :underline="false" href="/login">登录</el-link>
          <el-link :underline="false" href="/register">注册</el-link>
        </el-space>
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="4" :offset="4">
        <el-image src=""></el-image>
        <span>朝夕教育</span>
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search, Service } from '@element-plus/icons-vue'
let input1 = ref('');
let activeIndex = ref('1');
const handleMenuSelect = (index: string): void => {
  activeIndex.value = index;
}
const handleInputChange = (value:string):void => {

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
</style>