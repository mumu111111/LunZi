<template>
  <div id="app">
    <h2>input</h2>
    <ginput value="中文"></ginput>
    <ginput value="中文" disabled></ginput>
    <ginput value="中文" readonly></ginput>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import grow from "./components/grid/row.vue";
// import gcol from "./components/grid/col.vue";
// import gicon from "./components/icon/icon-svg-1/icon.vue";
import Ginput from "./components/input/input.vue";

export default {
  name: "app",
  // data: {
  //   disabled: false
  // },
  components: {
    // Row,
    // Col,
    // Icon,
    Ginput
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
