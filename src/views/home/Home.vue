<template>
  <div id="home">
  <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res);
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #f6f6f6;
  }
</style>
