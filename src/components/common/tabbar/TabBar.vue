<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
/*设置TabBar的布局*/
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /*让TabBar移动到最下方*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 设置TabBar的过度阴影 */
  box-shadow: 0 -2px 4px rgba(100,100,100,0.1);
}

</style>
