<template>
  <div class="home">
    <el-carousel height="200px">
      <el-carousel-item v-for="(img,i) in imgs" :key="i">
        <el-image class="img" :src="img.src"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const imgs = ref([{
  src:'./src/assets/c1.png'
}, {
    src: './src/assets/c2.png'
  },{
    src: './src/assets/c3.png'
  }]);
</script>
<style scoped>
.home
{
  width: 100%;
  height: 100%;
}
.img{
  height: 100%;
}
</style>