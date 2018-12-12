<template>
    <mt-swipe :auto="time">
        <mt-swipe-item v-for="(item, index) in list" :key="index">
            <a href="#">
                <img :src="item.imgUrl" class="swipe-item-img" />
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        name:"dd-swipe",
        props:{
            list:Array,
            time:{
                type:Number,
                default:() => {
                    return 3000
                }

            }
        }
    }
</script>
<style lang="stylus">
    .mint-swipe-indicators
        bottom 0.18rem
        .mint-swipe-indicator
            width 0.3rem
            height 6px
            background #f5f5f5
            border-radius: 0.1rem
            opacity 0.8
            &.is-active
                background #e6ac01
                opacity 1  
</style>


