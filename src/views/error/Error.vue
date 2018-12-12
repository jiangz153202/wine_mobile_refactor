<template>
    <div>
        <img src="../../assets/404.png" class="error_img" />
    </div>
</template>
<script>
export default {
    name:'ErrorModel',
    data(){
        return{
            url:'static/assets/404.png'
        }
    }
}

</script>
<style lang="stylus" scoped>
    div
        display flex
        justify-content center
        justify-items center
        .error_img
            width 200px
            height 200px
</style>

