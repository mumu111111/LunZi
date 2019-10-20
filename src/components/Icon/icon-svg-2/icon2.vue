<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>

</template>

<script>
export default {
  name: "icon",
  props: {
    iconClass: {
      type: String,
      require: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

-------------------------------
//组件使用步骤

//1.引入svg组件
// import Icon from '@/components/Icon'

//2.全局注册icon组件
// Vue.component('icon', Icon)

//3.直接可以使用这个组件了  (注意大小写 iconClass)
// <icon icon-class="pass"/>
