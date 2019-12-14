<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :readonly="readonly" :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template >
      <x-icon name="error" class="icon-error"></x-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import xIcon from "./icon";
export default {
  name: "xInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: boolean,
      default: false
    },
    readonly: {
      type: boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    xIcon
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
      border-color: #fff;
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









