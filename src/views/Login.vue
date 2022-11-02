<template>
  <div class="login">
    <el-form ref="form" :label-width="120" :model="formData" :rules="rules" class="form">
      <el-form-item prop="userName" label="用户名" placeholder="请输入用户名">
        <el-input v-model="formData.userName" />
      </el-form-item>
      <el-form-item  label="密码" placeholder="请输入密码" prop="password">
        <el-input v-model="formData.password" />
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="submitForm()">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, Ref,ref } from 'vue';
import {useRouter} from 'vue-router'
import {FormRules} from 'element-plus'

const formData = reactive({
  userName:'',
  password:''
});
const router = useRouter();
const form:Ref = ref(null);
const rules = reactive<FormRules>({
  userName:[{
    required:true,
    trigger:'blur',
    message:'用户名不能为空'
  }],
  password:[{
    required:true,
    trigger:'blur',
    message:'密码不能为空'
  }]
})
const submitForm = () => {
  form.value.validate((valid:boolean) => {
    if(valid){
      router.push({path:'/'});
    }
  })
}
</script>

<style scoped>
.form{
  width:50%;
  height: auto;
  padding:20px 0;
  margin-top:227px;
}
.login{
  height: 100%;
  width: 100%;
	display: flex;
	justify-content: center;
}
.button{
  margin: auto;
}
</style>