import { h } from 'vue'

export default {
    setup(props) {
        console.dir(props)
        // 返回渲染函数
        return () => h('div', '123')
    }
}