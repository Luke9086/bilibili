<template>
  <div class="proxy-test">
    <h3>Proxy Test</h3>
    <button @click="testProxy" :disabled="loading">
      {{ loading ? 'Testing...' : 'Test Proxy' }}
    </button>
    <div v-if="result" class="result">
      <h4>Result:</h4>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
    <div v-if="error" class="error">
      <h4>Error:</h4>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUser } from '@/api/user'

const loading = ref(false)
const result = ref(null)
const error = ref(null)

const testProxy = async () => {
  loading.value = true
  result.value = null
  error.value = null
  
  try {
    const response = await getUser()
    result.value = response
    console.log('✅ Proxy test successful:', response)
  } catch (err) {
    error.value = err
    console.error('❌ Proxy test failed:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.proxy-test {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.result, .error {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
}

.result {
  background: #f6ffed;
  border: 1px solid #b7eb8f;
}

.error {
  background: #fff2f0;
  border: 1px solid #ffccc7;
}

pre {
  white-space: pre-wrap;
  word-break: break-all;
}
</style> 