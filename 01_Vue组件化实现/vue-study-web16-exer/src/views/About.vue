<template>
  <div>
   <from-comp></from-comp>
  </div>
</template>

<script>
import FromComp from '../components/form/index'
export default {
  name: 'About',
  components: {
    FromComp
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
