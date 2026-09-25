// 站点配置：书名等随项目变化的文字集中放在这里，
// tools/build.mjs、tools/pdf.mjs 和 .github/workflows/release.yml 都从这里读取。
export default {
  // 网页标题、侧栏顶部、PDF 封面标题、PDF 文件名 output/<title>.pdf、Release 标题
  title: '初三英语学习导览',
  // PDF 封面副标题
  subtitle: '词性 · 词源法记单词 · 简单句 · 复合句 · 时态',
  // PDF 封面上的面向对象
  audience: '面向河南中考的初三学生',
  // 网页 <meta name="description"> 和 PDF 文档属性里的主题
  description: '面向河南中考的初三英语学习导览：词性、词源法记单词、简单句、复合句、时态，附河南中考真题。',
  // 英文短名：Release 附件名 <slug>-guide-<标签>.pdf
  slug: 'learn-english',
  // pnpm pdf:sample 默认只排文件路径以此开头的页面
  sample: '1-pos/preposition',
  // 以这些词开头的段落在 PDF 里排成灰色小字（节末的依据行、出处行）
  citePrefixes: ['本义依据', '用法依据', '依据', '完成时的来源依据', '年份读法依据', '出处', '答案来源'],
  // 只在网页上出现、不排进 PDF 的页面（相对 content/ 的路径）
  webOnly: ['download.md'],
};
