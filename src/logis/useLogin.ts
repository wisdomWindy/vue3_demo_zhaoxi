import {reactive, ref} from 'vue'
import type { FormInstance } from 'element-plus'
const formData = reactive({
  userName: '',
  password: ''
});

const showLogin = ref(false);

const login = () => {
  showLogin.value = true;
}
const loginForm = (formRef:FormInstance|undefined) => {
  console.log(formRef)
  formRef?.validate((valid) => {
    if(valid){
      showLogin.value = false;
    }
  });
}
const resetLogin = (formRef:FormInstance|undefined) => {
  formRef?.resetFields();
  showLogin.value = false;
}

export default function () {
  return {
    formData,
    showLogin,
    login,
    loginForm,
    resetLogin
  }
}