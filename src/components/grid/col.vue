<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "xCol",
  data() {
    return {
      gutter: 0
    };
  },
  props: {
    span: {
      type: [Number, String],
      validator(value) {
        return ["span"].indexOf(value) >= 0;
      }
    },
    offset: {
      type: [Number, String],
      validator(value) {
        return ["offset"].indexOf(value) >= 0;
      }
    },
    ipad: {
      type: Object,
      vlidator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.map(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    npc: {
      type: Object,
      vlidator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.map(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    pc: {
      type: Object,
      vlidator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.map(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    },
    wpc: {
      type: Object,
      vlidator(value) {
        let keys = Object.keys(value);
        let valid = true;
        keys.map(key => {
          if (!["span", "offset"].includes(key)) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    rowClass() {
      let { span, offset, pc, ipad, npc, wpc } = this;
      if (span) {
        return [`col-${span}`];
      }
      if (offset) {
        return [`offset-${offset}`];
      }
      if (ipad) {
        return [`col-ipad-${ipad.span}`, `offset-ipad-${ipad.offset}`];
      }
      if (npc) {
        return [`col-npc-${npc.span}`, `offset-npc-${npc.offset}`];
      }
      if (pc) {
        return [`col-pc-${pc.span}`, `offset-pc-${pc.offset}`];
      }
      if (wpc) {
        return [`col-wpc-${wpc.span}`, `offset-wpc-${wpc.offset}`];
      }
      return [];
    }
  }
};
</script>
<style scoped lang="scss">
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }

  @media (min-width: 557px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }

    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-npc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }

    $class-prefix: offset-npc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    
  }
  @media (min-width: 993px) {
  $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    
  }
  @media (min-width: 1201px) {
  $class-prefix: col-wpc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }

    $class-prefix: offset-wpc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    
  }
}
}
</style>


