<template>
  <div id="app">
    <keep-alive include="home">
        <router-view/>
    </keep-alive>
    <bottom-tabbar v-if="$route.meta.showBottomTabbar" />
  </div>
</template>

<script>
import BottomTabbar from './views/layout/bottom-tabbar'
export default {
  name: 'App',
  components:{BottomTabbar},
  created(){
  },
  mounted(){
    //启动监听
    window.addEventListener("visibilitychange",()=>{
        // debugger;
        if(document.hidden){
           // console.log("我暂时离开页面了",(new Date).toLocaleString());
           // this.mes = "被挂起了"+(new Date).toTimeString()
           
        }else{
            //console.log('i am back!',(new Date).toLocaleString());
        }
        
   })
  }
}
</script>