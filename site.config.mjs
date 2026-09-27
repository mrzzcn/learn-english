// 站点配置：书名等随项目变化的文字集中放在这里，
// tools/build.mjs、tools/pdf.mjs 和 .github/workflows/release.yml 都从这里读取。
export default {
  // 网页标题、侧栏顶部、PDF 封面标题、PDF 文件名 output/<title>.pdf、Release 标题
  title: '初中英语学习导览',
  // PDF 封面副标题
  subtitle: '词性 · 词源法记单词 · 简单句 · 复合句 · 时态',
  // PDF 封面上的面向对象
  audience: '面向初中生',
  // 网页 <meta name="description"> 和 PDF 文档属性里的主题
  description: '面向初中生的英语学习导览：词性、词源法记单词、简单句、复合句、时态，附河南中考真题。',
  // PDF 封面插图（相对项目根目录）：铺满第一页，书名和副标题叠在顶部夜空，面向对象和日期叠在底部。
  // 留空则用纯文字封面。coverColors 是叠在图上的文字颜色和图片没盖住处的底色。
  cover: 'content/images/cover.jpg',
  coverColors: { background: '#021a3c', title: '#fffdf7', subtitle: '#f3d27a', footer: '#c9d3e6' },
  // 英文短名：Release 附件名 <slug>-guide-<标签>.pdf
  slug: 'learn-english',
  // pnpm pdf:sample 默认只排文件路径以此开头的页面
  sample: '1-pos/preposition',
  // 以这些词开头的段落在 PDF 里排成灰色小字（节末的依据行、出处行）
  citePrefixes: ['本义依据', '用法依据', '依据', '完成时的来源依据', '年份读法依据', '出处', '答案来源'],
  // 网页上默认折叠的小节：标题以这些词开头的小节（如真题的“答案”）先隐藏，点 Show Answer 才展开；PDF 照常显示
  answerHeadings: ['答案'],
  // 只在网页上出现、不排进 PDF 的页面（相对 content/ 的路径）
  webOnly: ['download.md'],
};
