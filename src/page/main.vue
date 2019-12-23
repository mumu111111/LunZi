<template>
  <div class="main">
      <aside></aside>
      <div>
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
import aside from "./aside.vue";
import input from "./input.vue";
import grid from "./grid.vue";
export default {
  components: {
    aside,
    input,
    grid
  }
};
</script>
<style>
ul,
li,
a {
  text-decoration: none;
}
.main {
  width: 100%;
  height: 100%;
}
.left {
  width: 33%;
  height: 100%;

  border: 1px solid #eee;
}
.right {
  width: calc(100%-33%);
  height: 100%;

  border: 1px solid #eee;
}
</style>

