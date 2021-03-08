<template>
  <div>
    <input type="text" v-model="searchTxt" @input="inputChange">
    <p>{{ searchTxt }}</p>
  </div>
</template>

<script>

const debounce = (fn, delay = 500) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
      timer = null
    }, delay)
  }
}

export default {
  name: 'lu-form',
  components: {},
  data () {
    return {
      searchTxt: ''
    }
  },
  methods: {
    inputChange: debounce(function () {
      this.search()
    }, 1000),
    search () {
      console.log(this.searchTxt)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
