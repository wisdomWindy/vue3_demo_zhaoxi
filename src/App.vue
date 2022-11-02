<template>
  <el-container class="container">
    <el-header class="header">
      <BaseHeader></BaseHeader>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <BaseFooter></BaseFooter>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
</script>

<style scoped>
.main,
.container {
  width: 100%;
  height: 100%;
}
.header{
  height: auto;
}
</style>

