export default {
  up() {},

  down(size) {
    const sizes = {
      xs: "575.98",
      sm: "767.98",
      md: "991.98",
      lg: "1199.98",
      xl: "1599.98",
      xxl: "1999.98"
    }

    return `@media(max-width: ${sizes[size]}px)`; // @media(max-width: 500px)
  }
};