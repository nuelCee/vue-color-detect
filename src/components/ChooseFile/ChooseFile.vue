<template>
  <div class="choose">
    <div class="choose__con">
      <div class="choose__con-action">
        <div class="choose__con-action--browse">
          <label for="image">Select file</label>
          <input type="file" id="image" @change="preview($event)" />
        </div>
      </div>
      <img :src="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseFile',
  data() {
    return {
      placeholder:
        'https://images.unsplash.com/photo-1504568758572-1c648768a420?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    };
  },
  props: {
    msg: String,
  },
  methods: {
    preview(e) {
      const reader = new FileReader();
      const file = e.target.files;
      reader.onload = () => {
        this.placeholder = reader.result;
      };

      console.log(file);
      reader.readAsDataURL(file);

      // console.log(e);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./style/choosefile.scss";
</style>
