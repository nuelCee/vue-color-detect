<template>
  <div class="choose">
    <div class="choose__con">
      <div class="choose__con-action">
        <div class="choose__con-action--browse">
          <label for="image"
            ><eva-icon
              name="file"
              animation="pulse"
              :fill="`#${fill}`"
            ></eva-icon>
            <span :style="`color: #${fill}`"> Select File </span>
          </label>
          <input type="file" id="image" @change="preview($event)" />
        </div>
      </div>
      <img
        :src="placeholder"
        :style="placeholder === `` ? `display:none` : ``"
        id="preview"
        crossorigin="Anonymous"
      />
    </div>
  </div>
</template>

<script>
import { EvaIcon } from 'vue-eva-icons';
import getAverageColor from '../../mixins/getAverageColor';
import getHex from '../../mixins/getHex';

export default {
  name: 'ChooseFile',
  data() {
    return {
      placeholder: '',
      fill: 'f25f4c',
    };
  },
  mixins: [getAverageColor, getHex],
  props: {
    msg: String,
  },
  components: {
    [EvaIcon.name]: EvaIcon,
  },
  methods: {
    preview(e) {
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onload = () => {
        this.placeholder = reader.result;
        const image = document.querySelector('#preview');
        image.onload = () => {
          const { R, G, B } = this.averageColor(image, 4);
          document.body.style.background = `rgb(${R}, ${G},${B})`;
          const hex = this.rgbToHex(R, G, B);
          this.fill = this.invertHex(hex.substring(1));
          this.colorHex(hex, this.fill);
        };
      };
      reader.readAsDataURL(file);
    },
    colorHex(hex, fill) {
      this.$emit('color', hex);
      this.$emit('git-color', fill);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./style/choosefile.scss";
</style>
