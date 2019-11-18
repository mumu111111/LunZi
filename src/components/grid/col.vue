<!-- 列 -->

<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "Col",
  props: {
    span: [Number, String],
    offset: [Number, String],
    ipad: {},
    narrowPc: {},
    pc: {},
    widePc: {}
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    
  },
  computed: {
    colClass() {
      let { offset, span } = this;
      return {`col-${span}`, offset-${offset}`}      
      // return {} / [];
    },
    colStyle() {
      let { offset, span } = this;

      // return {} / [];
    }
  }
};
</script>

<style scoped>

</style>