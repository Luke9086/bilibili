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
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" :loading="loading">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
 </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { login } from '@/api/user';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
defineOptions({
    name:'BiliLogin'
}
)
const router = useRouter();
const {setToken, setUser} = useUserStore();
const form = ref<{username:string,password:string}>({
    username: '',
    password: '',
});
const handleFinish = (values: any) => {
    loading.value = true;
    login(values).then((res) => {
        console.log(res);
        message.success(res.message);
        loading.value = false;
        setToken(res.token);
        setUser(res);
        router.push('/');
    }).catch((err) => {
        console.log(err);
        loading.value = false;
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