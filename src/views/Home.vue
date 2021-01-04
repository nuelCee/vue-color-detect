<template>
  <div class="home">
    <choose-file @color="colorHex" @git-color="gitColor" />
    <div>
      <div :style="`color: #${fill}`">
        <div>{{ hex }}</div>
        <div style="font-weight: 600">Accent Color</div>
      </div>
    </div>
  </div>
</template>

<script>
import ChooseFile from '../components/ChooseFile/ChooseFile.vue';

export default {
  name: 'Home',
  data() {
    return {
      hex: '',
      fill: '',
    };
  },
  components: {
    ChooseFile,
  },
  methods: {
    colorHex(value) {
      this.hex = value;
    },
    gitColor(value) {
      this.$emit('color-change', value);
      this.fill = value;
    },
  },
};
</script>
