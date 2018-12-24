<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="home">
      <img slot="icon" src="static/img/lazybar/home@2x.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="group">
      <img slot="icon" src="static/img/lazybar/group@2x.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="cart">
      <img slot="icon" src="static/img/lazybar/cart@2x.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="user">
      <img slot="icon" src="static/img/lazybar/my@2x.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  name: "bottom-tabbar",
  data() {
    return {
      selected: "home"
    };
  },
  watch: {
    selected: function(val) {
      
      this.$router.push(val);
      window.localStorage.setItem("navTabIndex", val);
    }
  },
  created: function() {
    let localData = window.localStorage.getItem("navTabIndex");
    if(localData == null) return;
    this.selected = localData;
  }

};
</script>
