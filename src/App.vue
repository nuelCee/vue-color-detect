<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/docs"
        ><eva-icon name="github" animation="pulse" fill="#f25f4c"></eva-icon
      ></router-link>
    </div>
  </div>
</template>
<script>
import { EvaIcon } from 'vue-eva-icons';

export default {
  name: 'App',
  components: {
    [EvaIcon.name]: EvaIcon,
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
