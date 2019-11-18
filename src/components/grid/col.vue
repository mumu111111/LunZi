<!-- 列 -->

<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "Col",
  props: {
    span: [Number, String],
    offset: [Number, String],
    //自定义不同尺寸适配 响应式  js就生成不同的类名   不同类名对应设置好的css样式  
    ipad: {},
    narrowPc: {},
    pc: {},
    widePc: {}
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    
  },
  computed: {
    colClass() {
      //判断 存不存在
     if(this.span){
       return {}
     }
     if(this.offset){
       return {}
     }
     //数据类型 数组 方法多 push 好操作
     //return {} 最后必须合二为一 所以在一开始先写一个[]  有什么操作结果都放在里面 一个里面

     //这么多操作且重复执行 可以放在一个函数里 好调用

      let { offset, span } = this;
      return {`col-${span}`, offset-${offset}`}      
      // return {} / [];
    },
    colStyle() {
      let { offset, span } = this;

      // return {} / [];
    }
  }
};
</script>

<style scoped>
@media (min-width: ) {
}
</style>