import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    base: '/study_project/',
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/index.md',
            },
            {
                text: "markdownlint相关",
                children: [
                    { text: '侧边栏1', link: "/markdownlint/index.md" },
                    { text: '侧边栏2', link: "/markdownlint/other.md" }
                ]
            }
        ],
        sidebar: {
            '/markdownlint/': [
                {
                    text: 'markdownlint相关',
                    children: [
                        { text: '侧边栏1', link: "/markdownlint/index.md" },
                        { text: '侧边栏2', link: "/markdownlint/other.md" }
                    ],
                },
            ],
        }
    }),
})