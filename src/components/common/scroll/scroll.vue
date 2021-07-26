<template>
    <div class="warpper" ref="warpper">
        <div class="content"><slot></slot></div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
    name:'scroll',
    data() {
        return {
            scroll: null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullingUpload:{
            type:Boolean,
            default:false
        }

    },
    mounted(){
        this.scroll = new BScroll(this.$refs.warpper, {
            probeType: this.probeType,
            observeDOM:true,
            click:true,
            pullUpLoad:this.pullingUpload
        });
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
        });
        if(this.pullingUpload){
            this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
        })
        }
        
    },
    methods:{
        scrollto(x, y,time=500){
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped>
</style>