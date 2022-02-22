// variables.scss.d.ts scss类型声明文件
// ts中使用sass变量 需要类型声明

export interface ScssVariables {
    menuText: string;
    menuActiveText: string;
    subMenuActiveText: string;
    menuBg: string;
    menuHover: string;
    subMenuBg: string;
    subMenuHover: string;
    sideBarWidth: string;
  }
  
  export const variables: ScssVariables
  
  export default variables
  