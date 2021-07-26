import Toast from './Toast'

const obj = {}
obj.install = function (Vue) {
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    //2.通过new 创建一个toast对象
    const toast = new toastConstructor()

    //3.将组建元素手动挂载在某一个元素上
    toast.$mount(document.createElement('div'))
    //4.toast.el对应的是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast

}

export default obj