import Vue from 'vue'

function create(vComponent, props) {
  // Vue如何获取组件的构造函数？两种方法
  // 1.Vue.extend()
  // 2.render()
  const vm = new Vue({
    render: h => h(vComponent, { props })
  }).$mount() // 不指定节点，创建真实dom，但是不会追加

  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]
  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export {
  create
}
