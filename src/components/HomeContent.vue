<template>
  <div class="home_content">
    <el-container class="container">
      <el-header class="header">
        <div class="left">
          <router-link class="link" to="/loveFlower">爱情鲜花</router-link>
          <span>送让你心动的人</span>
        </div>
        <div class="right">订花热线</div>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <el-image class="image" src="./src/assets/c1.png"></el-image>
        </el-aside>
        <el-main class="main">
          <el-row justify="space-between">
            <el-col :xl="4" :lg="6" :md="8" :xs="24" v-for="(img, i) in imgs" :key="img">
              <el-image class="imgs_list"  :src="img.src"></el-image>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import mainStore from '../store'
const store = mainStore();
  const imgs = ref(store.imgs.concat(store.imgs).concat(store.imgs).slice(0,-1))
</script>
<style scoped>
.home_content{
  width:70%;
  height: 100%;
  margin: auto;
}
.main{
  width: auto;
}
.container{
  height: 100%;
}
.aside{
  width: 250px;
  height: auto;
  display: block;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link{
  color:#000;
  text-decoration: none;
  margin-right: 20px;
}
.image{
  width: 100%;
  height: 425px;
}
.imgs_list{
  width: 150px;
  height: 200px;
  margin-bottom:5px;
}
</style>