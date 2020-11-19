<template>
  <div>
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>

  export default {
    name: 'k-input',
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      onInput(e) {
        console.log(e)
        this.$emit('input', e.target.value)
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
