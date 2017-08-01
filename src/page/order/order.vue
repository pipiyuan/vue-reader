<template lang="pug">
    #order    order
        
</template>

<script>
export default {
    // name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted(){
        console.log(1)
    }
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
    $a: #aaa;
    #footbar{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        width:100%;height: 1.95rem;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        .navitation-tabs{
            display: flex;
            height: 100%;
            .tab{
                flex: 1;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                .icon_style{
                    width: .8rem;
                    height: .8rem;
                    fill: #ccc;
                }
                span{
                    font-size: .45rem;
                    color: #666;
                }
            }
        }
    }
</style>



