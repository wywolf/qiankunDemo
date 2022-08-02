import { registerMicroApps } from "qiankun";

// 仓库demo中有2个子项目，这里仅举例create-react-app的项目
registerMicroApps([
  {
    // 子应用唯一名称
    name: "app2",
    // 子应用入口
    entry: "//localhost:8002",
    // 子应用挂载的元素
    container: "#root",
    // 子应用匹配路径
    activeRule: "/app2",
  },
]);

start(); // 微前端 —— 启动
