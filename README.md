# webpack-start

> 纯前端项目 webpack 打包

## Development

- `git clone https://github.com/ccqgithub/koa-start.git`
- `npm install`
- `npm run dev` (打开 http://127.0.0.1:9000/)， 见`config/server.conf.js`

## Env

- `process.env.NODE_ENV`: 主要配置 `本地开发调试` 和 `发布` 的区别，development, production.
- `process.env.APP_ENV`: 配置不同发布环境：local, it, uat 等...

## Cli

> 见 `package.json` > `scripts`.

- `npm run dev`: 本地开发
- `npm run build-dev`: 测试打包，调试打包
- `npm run build-prod`: 测试打包，调试打包

## Configs

> `entry`入口js放在`src/entry/`下, 模板文件放在`src/html`下，输出的`html`文件发布在`public/_view/`目录。
> 一个`entry`文件对应一个同名的`模板文件`: `src/entry/admin.js` => `src/html/admin.html`。

- `config/define.conf.js`: 配置webpack打包过程中的常量替换，见[webpack.DefinePlugin](https://webpack.js.org/plugins/define-plugin/).
- `config/public.conf.js`: webpack输出配置.
- `config/server.conf.js`: dev-server 配置.

## Features

- hot reload
- vue
- react
- router
- ...

## Dependencies

- node@8.x (support async await, or use `babel register` with lower versions)
- webpack@3.x
