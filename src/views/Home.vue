<template>
  <div class="home">
    <el-carousel height="200px">
      <el-carousel-item v-for="(img,i) in imgs" :key="img">
        <el-image class="img" :src="img.src"></el-image>
      </el-carousel-item>
    </el-carousel>
    <HomeContent></HomeContent>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import mainStore from '../store'
import HomeContent from '@/components/HomeContent.vue'
const store = mainStore();
const imgs = ref(store.imgs);
</script>
<style scoped>
.home
{
  width: 100%;
  height: 100%;
  display: flow-root;
}
.img{
  height: 100%;
}

</style>