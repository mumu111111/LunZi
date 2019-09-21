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

<style scoped>

</style>