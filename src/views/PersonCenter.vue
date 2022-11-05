<template>
  <div class="personCenter">
    <el-container class="container">
      <el-header>首页/人中心</el-header>
      <el-main>
        <el-table :data="tableData">
          <el-table-column v-for="(column, i) in columns" :key="column.label" :label="column.label" :prop="column.prop"></el-table-column>
        </el-table>
        <el-pagination 
        :page-size="pageSize" 
        :default-page-size="10" 
        :total="total" 
        :pager-count="7" 
        :current-page="currentPage" 
        :default-current-page="1"
        @size-change="sizeChange"
        @current-change="currentPageChange"
        @pre-click="prePage"
        @next-click="nextPage"></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
const tableData = ref([
  {
    orderDate:'2022-10-20',
    orderNum:'1224325677',
    goodsTitle:'爱情鲜花',
    price:100
  }
]);
const columns = ref([{
  label:'订单日期',
  prop:'orderDate'
}, {
    label: '订单号',
    prop:'orderNum'
  }, {
    label: '商品标题',
    prop:'goodsTitle'
  }, {
    label: '价值',
    prop:'price'
  }]);
const total = computed(() => {
  return tableData.value.length;
});
const pageSize = ref(10);
const currentPage = ref(1);
const sizeChange = (pagesize:number) => {
  pageSize.value = pagesize;
}
const currentPageChange = (current:number) => {
  currentPage.value = current;
}
const prePage = () => {
  currentPage.value--;
}
const nextPage = () => {
  currentPage.value++;
}
</script>
<style scoped>
.container{
  width: 70%;
  margin: auto;
}
</style>