
const ElFormFn = ({ mini = "mini", inline = true, children }) => {
    return `<el-form :model="form" ${inline} label-width="70px" size="${mini}"> 
        ${children}
    </el-form>`
}
const ElFormItemFn = ({ label, children }) => {
    return `<el-form-item label="${label}"> 
        ${children} 
    </el-form-item>`
}
const ElInputFn = ({ key, placeholder }) => {
    return `<el-input v-model="form.${key}" placeholder="${placeholder}" />  `
}
export { ElFormFn, ElFormItemFn, ElInputFn }