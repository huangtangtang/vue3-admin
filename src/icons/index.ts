import { App } from 'vue'
// todo 
import SvgIcon from '@/icons/components/SvgIcon/index.vue'
// import SvgIcon from '@/components/SvgIcon/index.vue'
// 使用require.context加载./svg目录下所有svg文件
// const files = import.meta.globEager<any>("./svg/*.svg")
// 如果上面这句不行就把上面这句注释掉，使用下面这句
import'virtual:svg-icons-register'

export default (app: App) => {
    // 全局注册svg-icon组件
    app.component('svg-icon',SvgIcon)
}
