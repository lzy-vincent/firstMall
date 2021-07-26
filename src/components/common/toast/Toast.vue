<template>
    <div class="toast" v-show="isshow">
        <div >{{message}}</div>
    </div>
</template>

<script>
export default {
    name:'toast',
    data(){
        return {
            message: '',
            isshow: false
        }
    },
    methods:{
        show(message='请选择', showtime= 1500){
            this.message = message
            this.isshow = true

            setTimeout(() => {
                this.message = ''
                this.isshow = false
            }, showtime)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top:50%;
    left: 50%;
    padding: 10px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: silver;
    z-index: 15;
}
</style>