## vue-punch (PU打卡)

### 特性
* typescript
* less

### 目录结构
```bash
├── /build/          # webpack配置文件
├── /config/         # vue基本配置文件
├── /static/         # 静态资源，不使用webpack打包
├── /src/            # 项目源码目录
│ ├── /api/          # api接口与view目录相对应
│ ├── /styles/       # 公用样式
│ │ ├── /index.less/        # index
│ │ ├── /reset.less/        # reset
│ │ ├── /base.less/         # 基本样式
│ │ ├── /common.less/       # common
│ │ ├── /variable.less/     # UI变量
│ │ └── /mixin.less/        # mixin
│ ├── /components/          # UI组件
│ │ ├── /button/            # 按钮组件
│ │ └── /avatar/            # 头像组件
│ ├── /views/               # 页面相关容器组件
│ │ ├── /start/             # 开始打卡页面
│ │ ├── /end/               # 结束打卡页面
│ │ └── /finish/            # 完成打卡页面
│ ├── /router/          # 路由
│ ├── /store/           # vuex状态
│ ├── /utils/           # 工具函数
│ │ ├── config.js       # 项目常规配置
│ │ ├── request.js      # 异步请求函数
│ │ └── cookie.js       # cookies
│ ├── App.vue           # 根组件
│ ├── main.ts           # 入口文件
│ └── vue-shim.d.ts     #
├── package.json        # 项目信息
├── .eslintrc.js        # eslint风格检查
├── .editorconfig       # 编辑风格设置
├── .postcssrc.js       # postcss配置文件
├── .eslintignore       # eslint忽略文件
├── index.html          # 入口
├── .babelrc            # babel配置文件
├── tsconfig.json       # ts配置文件
├── tslint.json         # ts代码风格检查
├── .babelrc            # babel配置文件
├── .gitignore          # git忽略文件
└── README.md           # 项目说明
```

### 移动端1像素细线实现方法
``` css
.box {
    height: 10px;
    width: 100%;
    border-top: 1px solid #ddd;
    transform: scaleY(0.5);
}
.box1 {
    box-sizing: border-box;
    line-height: 0;
    background-color: rgb(239, 239, 239);
    width: 100%;
    height: 1px;
}
.box2 {
    border-bottom: 1px solid #eceef0;
    box-shadow: 0 1px 1px #fff;
}
.box3 {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(0deg, #ddd 50%, transparent 50%);
}
```
# vue-punch
