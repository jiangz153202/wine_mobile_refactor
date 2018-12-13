<template>
  <div class="page-swipe">
    <mt-header title="多个按钮" flex="true">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <vue-lazy-component class="custom-transition" :timeout="1500">
      <swipe :list="indexCarousels"></swipe>
      <swipe-skeleton slot="skeleton"></swipe-skeleton>
    </vue-lazy-component>
    <p class="app-title">{{message}}</p>
    <p style="font-szie:5rem;">更新后发布的</p>
    <img src="../../assets/404.png" alt="" srcset="" style="width:100%;" />
  </div>
</template>
<script type="text/ecmascript-6">
import Swipe from "@/components/Swipe/Swipe";
import SwipeSkeleton from "@/components/Swipe/SwipeSkeleton";
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component'
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    Swipe,
    SwipeSkeleton,
    VueLazyComponent
  },
  data(){
    return{
      message:"这是测试一下",
    }
  },
  created() {
    this.$store.dispatch("contextBasic/getIndexBasicData");
  },
  mounted() {
    //console.log(JSON.stringify(this.$store.state.contextBasic.IndexBasicData));
  },
  computed: {
    count() {
      return this.$store.state.userinfo;
    },
    indexCarousels() {
      return this.$store.state.contextBasic.IndexBasicData.carousels;
    }
  },
  //此函数用于keep-alive 缓存页面之后 如果需要改变数据 就需要从activated函数进入
  activated(){
    
    
    this.message = "activated状态修改"+(new Date).toLocaleTimeString();
    
  }
};
</script>
<style lang="stylus" scoped>
  .app-title
    font-size 0.26rem
</style>

