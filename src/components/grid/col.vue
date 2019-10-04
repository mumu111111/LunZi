<template>
<!-- 列 -->
  <div class="col" :class="" :style="">
    <slot></slot>
  </div>
</template>

<script>
//自定义验证
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
    //根据那些变量可以改变列的布局 不同大小屏幕 也不一样
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
  methods: {
    //传入不同的参数 对应不同的 类名 对应 不同的样式
  },
  computed: {
    colClass() {
      //创建class名
    },
    colStyle() {
      //padding-left/right
    }
  }
};
</script>

<style scoped>

</style>