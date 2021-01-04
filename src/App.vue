<template>
  <div id="app">
    <router-view @color-change="colorHex" />
    <div id="nav">
      <a href="https://github.com/nuelCee/vue-color-detect"
        ><eva-icon name="github" animation="pulse" :fill="`#${fill}`"></eva-icon
      ></a>
    </div>
  </div>
</template>
<script>
import { EvaIcon } from 'vue-eva-icons';

export default {
  name: 'App',
  data() {
    return {
      fill: 'f25f4c',
    };
  },
  components: {
    [EvaIcon.name]: EvaIcon,
  },
  methods: {
    colorHex(value) {
      this.fill = value;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: unset;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
