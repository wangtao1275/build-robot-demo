<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import br from "build-robot";
// import Vue from "vue";

export default {
  name: "HelloWorld",
  components: {},
  props: {
    msg: String
  },
  created() {
    // console.log(1111, br, this.$store, this.$router);
    // Vue.use(
    //   br.default,
    //   this.$store,
    //   this.$router
    // );
    console.log(222, this.$brController);
    // // 实例化br
    window.br = this.$root.br = this.$brController(
      {
        data: {
          isShow: false
        },
        init: {
          options: {}
        }
      },
      this.$store,
      this.$router
    );

    window.br.isShow = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
