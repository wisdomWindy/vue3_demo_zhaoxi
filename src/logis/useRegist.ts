import {reactive, ref} from 'vue'
import type { FormInstance } from 'element-plus'

const regist = () => {
  showRegist.value = true;
}

const showRegist = ref(false);

const registData = reactive({
  userName: '',
  password: ''
});

const registForm = (formRef:FormInstance|undefined) => {
  formRef?.validate((valid) => {
    if(valid){
      showRegist.value = false;
    }

  })
}
const resetRegist = (formRef:FormInstance|undefined) => {
  formRef?.resetFields();
  showRegist.value = false;
}
export default function (){
  return {
    regist,
    showRegist,
    registData,
    registForm,
    resetRegist
  }
}