<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    因为slot会被组件调用时的值所覆盖，所以需要在外加一层div来保证属性有效-->
    <div v-if="!isActive">
    <slot name="item-icon"></slot>
    </div>

    <div v-else>
    <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle" class="text">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      // isActive : true
    }
  },
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'blue'
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    //因为css无法直接调用props里的变量，所有通过动态绑定style来更改字体的颜色
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    /*常用高度*/
    height: 49px;
    font-size: 15px;
  }

  .tab-bar-item img{
    height: 30px;
    width: 30px;
    margin-bottom: 0;
    vertical-align: center;
    margin-top: 0;
  }

  .text{
    position: relative;
    top: -8px;
  }

</style>
