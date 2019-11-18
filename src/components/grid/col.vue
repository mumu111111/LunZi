<!-- 列 -->

<template>
  <div class="col" :class="" :style="">
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
    span: {},
    offset: {},
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
  methods: {},
  computed: {
    colClass() {},
    colStyle() {}
  }
};
</script>

<style scoped>

</style>