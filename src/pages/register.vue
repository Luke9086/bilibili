<template>
 <div class="login-container">
    <div class="login-form">
        <a-form 
        :model="form" 
        :label-col="{ span: 8 }" 
        :wrapper-col="{ span: 16 }"
        @finish="handleFinish"
        :colon="false"
        >
            <a-form-item
            label="用户"
            name="username"
            :rules="[{ required: true, message: '请输入用户名' }]"
            >
                <a-input v-model:value="form.username" placeholder="Username">
                    <template #prefix>
                        <UserOutlined />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
            >
                <a-input-password v-model:value="form.password" placeholder="Password">
                    <template #prefix>
                        <LockOutlined />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item
            label="Confirm Password"
            name="confirmPassword"
            :rules="[
                { required: true, message: 'Please input your confirm password!' },
                confirmPasswordRules
            ]"
            >
                <a-input-password v-model:value="form.confirmPassword" placeholder="Confirm Password">
                    <template #prefix>
                        <LockOutlined />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :loading="loading">注册</a-button>
            </a-form-item>
        </a-form>
    </div>
 </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { register } from '@/api/user';
defineOptions({
    name:'BiliRegister'
})
const form = ref({
    username: '',
    password: '',
    confirmPassword: '',
});
const confirmPasswordRules = { validator: (_: any, value: string) => {
    if (!value || value === form.value.password) {
        return Promise.resolve();
    }
    return Promise.reject(new Error('The two passwords do not match!'));
    } 
}
const handleFinish = (values: any) => {
    console.log(values);
    loading.value = true;
    register(values).then((res) => {
        console.log(res);
    }).finally(() => {
        loading.value = false;
    }).catch(()=>{
    });
};
const loading = ref(false);
</script>
<style lang="scss" scoped>
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 500px;
    position: relative;
    background-color: #eee;
    .login-form{
        width: 400px;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        :deep(.ant-form-item .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before) {
            content: none; /* 直接去掉生成内容 */
        }
    }
}
</style>