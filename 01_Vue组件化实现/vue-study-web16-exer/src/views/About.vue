<template>
  <div>
    <k-input v-model="userInfo.username"></k-input>
    <p>{{username}}</p>
  </div>
</template>

<script>
import KInput from "@/components/form/KInput";

export default {
  name: 'About',
  components: {
    KInput
  },
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
