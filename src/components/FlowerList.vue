<template>
  <div class="flowerList">
    <el-container>
      <el-header class="header">首页/列表页</el-header>
      <el-container>
        <el-aside class="aside">
          <div class="list">
            <div class="list_item" v-for="(item, i) in list" :key="item.name">
              <div class="left">
                <el-image class="image" fit="cover" src="./src/assets/c1.png"></el-image>
                <span>{{ item.name }}</span>
              </div>
              <div class="links">
                <el-link v-for="(link, i) in links" :key="link">{{ link.name }}</el-link>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <el-image class="header_img" src="./src/assets/c1.png"></el-image>
          <div class="img_list">
            <el-image v-for="(img, i) in imgList" class="img" :src="img.src"></el-image>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import mainStore from '../store'
const store = mainStore();
const links = ref(store.links);
const imgList = ref(store.imgs.concat(store.imgs).concat(store.imgs).concat(store.imgs));
const list = ref([{
  name: '用途'
}, {
  name: '用途'
}, {
  name: '用途'
}, {
  name: '用途'
}]);
</script>
<style scoped>
.flowerList
{
  width: 70%;
  margin: auto;
}

.header
{
  height: auto;
}

.aside
{
  height: auto;
}

.list
{
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
}

.list_item
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.links
{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 20px;
  flex: 1;
}

.image
{
  width: 100px;
  height: 100px;
  display: block;
}

.img_list
{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
}

.img
{
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
}

.header_img
{
  height: 100px;
}
</style>