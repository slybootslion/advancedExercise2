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
  mounted () {
    this.test()
  },
  methods: {
    test () {
      console.log(1);

      setTimeout(() => {
        console.log(2);
        new Promise((resolve) => {
          console.log(3);
          resolve();
        }).then(() => {
          console.log(4);
        });
      });

      new Promise((resolve) => {
        console.log(5);
        resolve();
      }).then(() => {
        console.log(6);
      });

      setTimeout(() => {
        console.log(7);
        new Promise((resolve) => {
          console.log(8);
          resolve();
        }).then(() => {
          console.log(9);
        });
      });

      console.log(10)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
