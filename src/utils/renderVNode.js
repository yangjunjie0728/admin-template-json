import { h } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

export default {
    props: ['form'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        console.dir(props)
        let VNode = () => h(ElForm, {
            'inline': true, size: "small", labelWidth: "70px"
        }, h(ElFormItem, {
            label: "标题"
        }, h(ElInput, {
            value: props.form.pageNum,
            'onUpdate': (value) => emit('update', value)
        })))
        // 返回渲染函数
        return VNode
    }
}