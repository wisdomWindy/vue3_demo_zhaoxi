<template>
  <div class="footer">
    <el-row justify="center">
      <el-link v-for="(link, i) in map" :key="link" :href="link.path" :underline="true" class="gap">{{link.label}}</el-link>
    </el-row>
    <el-row justify="center">
      <el-link>友链</el-link>
        <el-link v-for="(link, i) in links" :key="link" :href="link.path" :underline="true" class="link">{{link.label}}</el-link>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const map = ref([{
  label:'首页',
  path:'/home'
}, {
    label: '关于我们',
    path: '/home'
  },{
    label: '媒体报道',
    path: '/home'
  }, {
    label: '企业团购',
    path: '/home'
  }, {
    label: '花店入驻',
    path: '/home'
  }, {
    label: '友情链接',
    path: '/home'
  }, {
    label: '在线补救',
    path: '/home'
  }, {
    label: '为什么选择朝夕鲜花网',
    path: '/home'
  }])
const links = ref([{
  label:'朝夕教育',
  path:'/'
}, {
    label: '朝夕教育',
    path: '/'
  }, {
  label: '腾讯课堂',
    path: '/'
  }, {
    label: '朝夕教育',
    path: '/'
  }, {
  label: '腾讯课堂',
    path: '/'
  }, {
    label: '朝夕教育',
    path: '/'
  }, {
  label: '腾讯课堂',
    path: '/'
  }, {
    label: '朝夕教育',
    path: '/'
  }, {
  label: '腾讯课堂',
    path: '/'
  }, {
    label: '朝夕教育',
    path: '/'
  }])
</script>
<style scoped>
.footer{
  color: #fff;
  background-color: #000;
  padding:15px 0;
}
.link{
  font-size: 10px;
}
.gap{
  padding:0 10px;
}
</style>