

<template>
  <div class="template">
    <el-form :model="form" inline label-width="70px" size="mini">
      <el-form-item label="标题" v-for="(item,index) in form" :key="index">
        <span>{{ item }}</span>
        <!-- <el-input v-model="item" /> -->
      </el-form-item>
      <!-- <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="性别">
          <el-option v-for="(item,index) in form.sex.select" :key="index"
                     :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item> -->
    </el-form>
    <el-table :data="tableData" border stripe align="center" v-loading="loading"
              @selection-change="handleSelectionChange">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="form.pageNum" :page-size="form.pageSize"
                   :total="form.total" :page-sizes="[5, 10, 50, 300, 1000]"
                   layout="total, sizes, prev, pager, next, jumper"></el-pagination>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { keys } from "./json";
const loading = ref(false);
const tableData = ref([{ name: "123" }]);
const multipleSelection = ref([] as Array<object>);
// 搜索使用的变量
const form = ref({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
// 编辑使用的变量
const dialogForm = ref({});

// 勾选tabel
const handleSelectionChange = (value: Array<object>) => {
  multipleSelection.value = value;
};

//改变一页多少条数据时触发
const handleSizeChange = (e: number) => {
  form.value.pageNum = 1;
  form.value.pageSize = e;
};
//改变当前页时触发
const handleCurrentChange = (e: number) => {
  form.value.pageNum = e;
};
</script>
<style lang="scss">
</style>
