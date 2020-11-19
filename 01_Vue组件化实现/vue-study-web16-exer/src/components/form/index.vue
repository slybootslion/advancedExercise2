<template>
  <div>
    <!-- 1:11:11 -->
    <KInput v-model="userInfo.username"></KInput>
  </div>
</template>

<script>
import KInput from '@/components/form/KInput.vue'
  export default {
    data() {
      return {
        userInfo: {
          username: '',
          password: ''
        },
        rules: {
          username: [{required: true, message: '输入用户名'}],
          password: [{required: true, message: '输入密码'}]
        }
      }
    },
    components: {
      KInput,
    },
  }
</script>

<style lang="scss" scoped>
</style>
