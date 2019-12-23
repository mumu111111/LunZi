
<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GRow",
  props: {
    // 传入的参数 可以控制元素间隔
    gutter: {
      type: [Number, String]
    },
    align: {
      //left right center
      type: String,
      validator(value) {
        //检测是否存在 true false 有时候不一定有
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this; //取gutter  gutter = this.gutter
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>
<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>










