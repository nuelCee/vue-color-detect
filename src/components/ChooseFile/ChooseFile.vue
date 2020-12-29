<template>
  <div class="choose">
    <div class="choose__con">
      <div class="choose__con-action">
        <div class="choose__con-action--browse">
          <label for="image"
            ><eva-icon name="file" animation="pulse" fill="#f25f4c"></eva-icon>
            <span> Select File </span>
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
        };
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./style/choosefile.scss";
</style>
