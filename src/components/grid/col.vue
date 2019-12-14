<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return;
  },
  props: {
    span: {
      type: [Number, String],
      validator(value) {
        return ["offset"].indexOf(value) >= 0;
      }
    },
    offset: {
      type: [Number, String],
      validator(value) {
        return ["offset"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    rowStyle() {
      return {};
    },
    rowClass() {
      if (span) {
        return [`span-${span}`];
      }
      if (offset) {
        return [`offset-${offset}`];
      }

      return [];
    }
  }
};
</script>
<style scoped lang="scss">
.col {
  @for $n from 1 through 24 {
    &.span-#{$n} {
      width: $n/24*100%;
    }
    &.offset-#{$n} {
      margin-left: $n/24*100%;
    }
  }
}
</style>


