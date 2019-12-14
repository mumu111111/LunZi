<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :readonly="readonly" :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template >
      <gicon name="error" class="icon-error"></gicon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Gicon from "../icon/icon-svg-1/icon.vue";
export default {
  name: "Ginput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    Gicon
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: inline-flex;
  align-items: center;
  > input {
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 8px;
    &:hover {
      border-color: #666;
    }
    &:focus {
      box-shadow: inset 0 1px 3px #eee;
      outline: none;
    }
    //不能用状态的样式
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    //当error状态时
    > input {
      border: red;
    }
    .icon-error {
      fill: red;
    }
    .errorMessage {
      color: red;
    }
  }
}
</style>









