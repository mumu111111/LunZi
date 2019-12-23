<template>
  <svg class="g-icon" @click="$emit('click', $events)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "Icon",
  props: ["name"]
};
</script>

<style scoped lang="scss">
.g-icon {
  width: 1em;
  height: 1em;
}
</style>