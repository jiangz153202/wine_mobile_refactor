<template>
    <div class="swipe-skeleton">
        <div class="swipe-skeleton-container">
            <span class="swipe-skeleton-inset">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:"dd-swipe-skeleton"
}
</script>

<style lang="less" scoped>
    .swipe-skeleton{
        display: flex;
        flex: 1;
        height: 3.4rem;
        .swipe-skeleton-container{
            background-color: #eaeaea;
            flex: 1;
            position: relative;
            .swipe-skeleton-inset{
                display: flex;
                left: 0;
                position: absolute;
                bottom: 0.18rem;
                height: 6px;
                justify-content: center;
                align-items: center;
                width: 100%;
                i{
                   
                    width: 0.3rem;
                    height: 6px;
                    background: white;
                    margin:0px 5px;
                    border-radius: 4px;
                }
            }
        }
    }
    
</style>

