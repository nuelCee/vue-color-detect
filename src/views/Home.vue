<template>
  <div class="home">
    <choose-file msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ChooseFile from '../components/ChooseFile/ChooseFile.vue';

export default {
  name: 'Home',
  components: {
    ChooseFile,
  },
};
</script>
