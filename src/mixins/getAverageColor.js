export default {
  methods: {
    averageColor(imageElement, ratio) {
      const canvas = document.createElement('canvas');

      canvas.height = imageElement.height;
      canvas.width = imageElement.width;
      const { height } = canvas;
      const { width } = canvas;
      const context = canvas.getContext('2d');
      context.drawImage(imageElement, 0, 0);

      let data;
      let length;
      let i = -4;
      let count = 0;

      try {
        data = context.getImageData(0, 0, width, height);
        length = data.data.length;
      } catch (err) {
        return {
          R: 0,
          G: 0,
          B: 0,
        };
      }
      let R = 0;
      let G = 0;
      let B = 0;

      /* eslint no-cond-assign: "error" */

      while ((i += ratio * 4) < length) {
        ++count;
        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
      }
      R = Math.round(R / count);
      G = Math.round(G / count);
      B = Math.round(B / count);

      return {
        R,
        G,
        B,
      };
    },
  },
};
