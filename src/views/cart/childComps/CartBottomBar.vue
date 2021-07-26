<template>
    <div class="bottombar">
        <div class="checkbutton">
            <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
            <span>全选</span>
        </div>
        
        <div class="total">总计:{{totalprice}}</div>
        <div class="number" @click="btnpay">结算:({{listlength}})</div>
    </div>
</template>

<script>
import CheckButton from "@/components/content/checkbutton/CheckButton.vue"
import {mapGetters} from 'vuex'
export default
  {
    name:'bottombar',
    components: { CheckButton }, 
    computed:{
        ...mapGetters(['cartlist','listlength']),
        totalprice(){
            return '￥' + this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((prevalue, item) => {
                return prevalue + item.price * item.count
            },0)
        },
        isSelectAll(){
            if (this.cartlist.length === 0) return false
            return  !this.cartlist.find(item => !item.checked)
        },
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){
                this.cartlist.forEach(item => item.checked = false)
            } else {
                this.cartlist.forEach(item => item.checked = true)
            }
            // this.cartlist.forEach(item => item.checked = !this.isSelectAll)  有问题
        },
        btnpay() {
            this.$toast.show('suiyi', 1000)
        }
    }
   
}
</script>

<style scoped>
.bottombar{
    position: relative;
    display: flex;
    background-color:#eee;
    height: 40px;
    bottom: 40px;
   justify-content: center;
    align-items: center;
}
.checkbutton{
    display: flex;
    flex: 1;
    padding: 5px;
}
.total{
    flex: 1;
}
.number{
    width: 100px;
    height: 40px;
    background-color: orangered;
    text-align: center;
    line-height: 40px;
    color: black;
}
</style>