# AURA / 01 — Quantitative Futures

一个面向股票量化研究公司的多页面商业官网。项目将实时市场信息、系统化模型展示与欧洲古典艺术语言结合，并以牛皮纸、撕边拼贴、旧版画和克制的高饱和强调色构建统一视觉体系。

![AURA / 01](public/brand/aura-scene-mark-512.png)

## 项目特色

- 纯 HTML、CSS 与 JavaScript，无需构建工具即可运行
- 英语、简体中文、繁体中文三语言切换
- 模拟实时市场行情、模型置信度与风险收益展示
- 完整模型总账：收益、波动率、换手率、因子暴露与风险预算
- 响应式桌面端、平板端和移动端布局
- 多页面信息架构：研究、策略、量化实验室、团队理念、视觉图谱与联系页面
- Scene Distillation / Gathered Scenes Zine 风格的古典艺术素材
- 本地打开即可使用，也可部署到 GitHub Pages 或任意静态托管平台

## 页面结构

| 页面 | 文件 | 内容 |
| --- | --- | --- |
| 首页 | `index.html` | 品牌主张、市场数据、模型总账、研究方法与联系入口 |
| 量化研究 | `research.html` | 数据体系、模型研究与风险科学 |
| 策略体系 | `strategies.html` | 趋势动量、相对价值与动态配置 |
| 量化实验室 | `quant.html` | 动态行情、收益路径、波动率、因子模型、相关矩阵与理论计算 |
| 理念与团队 | `studio.html` | 古典技艺与现代计算的品牌理念 |
| 视觉图谱 | `archive.html` | 结构、周期、迁徙与尺度四个视觉主题 |
| 联系 | `contact.html` | 机构合作与研究交流入口 |

## 本地使用

1. 下载或克隆仓库。
2. 保持所有文件与 `public` 文件夹的相对位置不变。
3. 双击 `index.html` 即可打开首页。

无需执行 `npm install`，也无需启动开发服务器。

## 项目文件

```text
.
├── index.html
├── research.html
├── strategies.html
├── quant.html
├── studio.html
├── archive.html
├── contact.html
├── styles.css
├── main.js
├── pages.js
├── archive.js
├── localization-extra.js
├── market-localization.js
└── public/
    ├── art/
    ├── brand/
    └── cutouts/
```

## GitHub Pages

仓库上传后，可在 GitHub 的 **Settings → Pages** 中选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

保存后即可通过 GitHub Pages 访问。

## 数据说明

网站中的股票行情、收益表现、因子暴露、风险预算与模型指标均为视觉演示数据，不代表真实投资业绩，也不构成投资建议。

## License

网页代码可用于项目展示与二次开发。艺术素材、品牌标识及视觉资产的商业使用权请由项目所有者另行确认。

---

## English

A multilingual static website for a quantitative equity research firm, combining institutional market telemetry with a classical European paper-collage aesthetic.

The site runs directly from `index.html`, requires no build tools, and includes responsive layouts plus English, Simplified Chinese, and Traditional Chinese localization.
