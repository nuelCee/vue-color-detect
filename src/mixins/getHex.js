export default {
  methods: {
    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    },
    rgbToHex(r, g, b) {
      return `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`;
    },
    invertHex(hex) {
      return `${(`000000${(0xFFFFFF ^ parseInt(hex.substring(1), 16)).toString(16)}`).slice(-6)}`;// eslint-disable-line no-bitwise
    },
  },
};
