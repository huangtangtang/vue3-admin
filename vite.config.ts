import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// svg icon 引入插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 自动注册路由插件
import VitePages from "vite-plugin-pages";
const path = require("path");
import { resolve } from "path";
const fs = require("fs-extra");
//gray-matter 的功能，可以获取相关文件中的 front-matter，并将其处理为一个对象
const matter = require("gray-matter");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 使用 alias 配置可以将文件打包的识别路径用别名进行替换，避免在文件引入别的组件的时候使用很长的相对路径
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__",
    }),
    VitePages({
      extensions: ["vue", "md"], //需要包含的文件类型，这里显然是 .vue 和 .md 文件
      pagesDir: "src/views", //寻找文件的目录，这里选择了项目根目录下的 views 目录
      extendRoute(route) {
        //提供一个方法，对每个文件产生路由做一些加工，这里是对 route.meta 的处理
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),
  ],
  server: {
    host: true,
  },
  build: {
    sourcemap: true,
  },
});
