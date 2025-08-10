import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', ()=>{
    const token = ref('');
    const _id = ref('');
    const username = ref('');
    const setToken = (token_value: string) => {
        token.value = token_value;
    }
    const setUser = (user_value: any) => {
        _id.value = user_value._id;
        username.value = user_value.username;
    }
  return { token, _id, username, setToken, setUser }
},{
    persist: true,
});