// 注意: base的值为github仓库的名称
module.exports = {
    base: '/pug-components-api/', /* 基础虚拟路径: */
    dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: 'pug 组件库', // 标题
    description: '学习使用 pug 组件', // 标题下的描述
    // 使用一个主题
    // theme: 'reco',
    themeConfig: { // 主题配置
      logo: '/images/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '关于', link: 'https://yydha.gitee.io/' },
      ],
      sidebar: [ // 左侧导航
        {
            title: '简介', // 标题
            collapsable: false, // 下级列表不可折叠
            children: [ // 下级列表
            '介绍/由来',
            ]
        },
        {
          title: 'pug 组件库目录', // 标题
          collapsable: false, // 下级列表不可折叠
          children: [ // 下级列表
            '组件库目录/01. HotNew（新闻头条）',
            '组件库目录/02. NewsList （新闻列表）',
            '组件库目录/03. SlideNav （侧边导航）',
            '组件库目录/04. FriendshipLinks （友情链接）',
            '组件库目录/05. CmPage （分页）',
            '组件库目录/06. Location （当前位置）',
            '组件库目录/07. CmTab （切换）',
            '组件库目录/08. NewsPicCarousel （轮播）',
            '组件库目录/09. Banner （大图轮播）',
            '组件库目录/10. DetailsTable （详情顶部的表格）',
            '组件库目录/11. DatePicker （日期选择器）',
            '组件库目录/12. CmCard （卡片）'
          ]
        }
      ]
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./images/favicon.ico` }]
    ]
  }