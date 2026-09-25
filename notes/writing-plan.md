# 编写计划：并行编写各部分

本文件是写作单元的任务书。大纲以 plan.md 为准。第三、四节是最初并行编写时的任务和流程，文件名已过时，留作记录。

## 一、文件布局（2026-09-25 起）

- 内容在 `content/`，每页一个 Markdown 文件，页面顺序和侧栏目录由 `content/SUMMARY.md` 决定。
- 每页以一个 `#` 标题开头，页内小节用 `##`、`###`。
- 图片放在 `content/images/`，页面里用相对路径引用（如 `../images/prep-over.svg`）。
- 交叉引用写成“见第一部分‘介词’”或“第一部分：不定代词”，构建时自动变成链接；构建会列出没解析到的引用。
- `pnpm build` 生成网站到 `dist/`；`pnpm merge` 按目录顺序合并出单文件 `guide.md`（做 PDF 用，不提交）。

## 二、所有单元共同遵守的写作规范

**内容规则**
1. 中文讲解，英文例句，每个例句附中文翻译。
2. 只用初中词汇。超出初中范围的内容标注"高中内容"。
3. 例句围绕苹果串联（apple、eat、pick apples）。苹果不自然时换更合适的场景，不硬套。
4. 例句要完整、典型。完成时要带 by、before、already、since 这类时间标志。
5. 从本义推导一切：用法只取词典义项，但每个用法都要写出"本义 → 引申 → 用法"的推导链，推导的每一步要有 etymonline 或词典依据。不能只给结论，也不能按"固定搭配"直接列出。没有依据的推导不写；推不出来的词（如 if、invite）从英语本身的含义、用法和习惯出发来讲，不凭想象，不用中文总结的死记硬背口诀。范例：会话 f05c983d 对 important 的解析。
6. 真实英语优先，不迁就中考的固定说法。拿不准时查词典例句。
7. 推导必须写，但不引入历史单词原文（不写 importare、ān 这类拉丁语、古英语单词），只从分析角度讲清每个组成部分的来源，例如"im- 在这里是'进入'，port 是'搬运'，合起来是'带进来'"。
8. 每个词性按同一顺序讲：总览表列出分类 → 逐类讲用法和变化 → 容易混的地方。
9. 每个知识点的格式：一句话讲清是什么 → 例句 → **中考易错点**（一两条，写真实常错点）。

7a. 正文不交代说法的出处：不写"这是英语的习惯，不是词源推出来的"这类自我标注，也不写"etymonline 列出……""剑桥词典说……"，直接陈述内容。出处只放在节末的依据链接行。

5a. 没有词源可推的句法规则（五种句型、反意疑问句、主谓一致等）：按英语本身的含义、用法和说话习惯来讲，说清英语母语者为什么这样说，不生搬硬套，不用中文口诀。

**依据与引用**
10. 用法依据链接用剑桥词典中文版：`https://dictionary.cambridge.org/zhs/%E8%AF%8D%E5%85%B8/%E8%8B%B1%E8%AF%AD/<word>`。
11. 本义依据链接用 etymonline：`https://www.etymonline.com/word/<word>`。
12. 每节末尾写一行"用法依据："或"本义依据："，列出实际查过的词条链接。
13. 查证方法：剑桥网站会弹人机验证，不要尝试绕过；用 curl 抓牛津学习词典（`https://www.oxfordlearnersdictionaries.com/definition/english/<word>_1`，带浏览器 User-Agent）核对义项和例句，用 WebFetch 读 etymonline。没核对过的说法不写。 查词遇到障碍时，可以用 openetymology 接口：`curl -s "https://openetymology.com/api/words/<word>?mode=encn"`，返回 JSON，含组成部分拆解（morphemes 的 piece 与 gloss）、中文释义、例句和词源分析。它是补充来源，和 etymonline 说法冲突时以 etymonline 为准。

**版式规则**
14. 用 Markdown，不考虑排版。同类内容合成一张表；Markdown 不能合并单元格，同组的后续行第一列留空。
15. 表格单元格里换行用 `<br/>`。
16. 不写"待写"占位块。本单元的内容要全部写完。
17. 每个知识点篇幅适中：一张表 + 两三段说明为宜，不写长篇议论。

**简笔画（只有介词单元需要）**
18. 有空间、相对位置或时间关系的介词配一幅简笔画，放在本义单元格文字下方；没有这类关系的介词（of、for、with、about 等）不配图。
19. 风格和已有图一致：参考 images/prep-on.svg。180×120 的 viewBox，底色 `#fffdf7` 圆角矩形，黑色 2px 描边，苹果红 `#e53935`，叶子绿 `#66bb6a`，树干棕 `#6d4c41`，表示关系的标记用橙色 `#ff8f00`。图里不写中文。

**禁止事项**
20. 不改其他单元的文件，不改 plan.md、writing-plan.md、guide.md。
21. 不下载需要登录的 Word 或 PDF 文件。可以读公开网页和网页里的图片。

## 三、各单元任务书

### U1 第一部分开篇、名词、代词 → parts/10-pos-overview-noun-pronoun.md
- 以 `## 第一部分：十大词性` 开头，保留现有开篇两段（见 guide.md 第一部分开头）。
- 开篇：一句话串起十种词性（Wow! I ate two red apples quickly under the tree, and they were sweet.），逐词标出词性；再给一张十大词性总览表（词性、英文名、作用、例词）。
- 名词：可数与不可数；普通与专有（含 apple 与 Apple 的区别）；复数规则变化与不规则变化；所有格（'s 与 of）；不可数名词的计量（a piece of、a bottle of）。
- 代词：总览表（人称代词主格与宾格、物主代词形容词性与名词性、反身代词、指示代词、不定代词、疑问代词）；不定代词重点：some 与 any、each 与 every、both、all、either、neither、other 与 another；it 的用法。

### U2 形容词、副词、数词、冠词 → parts/11-adj-adv-num-article.md
- 形容词：三个位置（名词前、系动词后、something 这类词后）；比较级和最高级的规则与不规则变化；-ed 与 -ing（interested 与 interesting）。
- 副词：总览表（时间、地点、方式、程度、频度）；-ly 构词；在句子里的位置；比较级；形副同形与易混（hard 与 hardly、late 与 lately）。
- 数词：基数词与序数词；分数、年份、日期、时刻读法；hundred 与 hundreds of。
- 冠词：a 与 an 看读音不看字母；the 的用法；零冠词；by bus、play football 与 play the piano。

### U3 动词四大类 + 非谓语 → parts/12-verb.md
- 以 `### 动词：四大类` 开头，保留现有开头段落。
- 四类总览表：实义、系、助、情态动词，列作用、能否单独当谓语、例词、例句。
- 实义动词：及物与不及物；五种形式；规则变化与常见不规则动词表（只收初中词汇）；短语动词（只收词典有的）。
- 系动词：be；感官类 look、taste、smell、sound、feel；变化类 become、get、turn、grow；保持类 keep、stay。
- 助动词：be、do、have、will 各自的作用；同一个词的两种身份（have lunch 与 have eaten）。
- 情态动词：can、could、may、might、must、should、need、have to；本义与推测；must 与 have to、needn't 与 mustn't。
- 非谓语形式：概念；不定式；动名词；分词基础用法。现有"动词后面接 to do 还是 doing"一节原样保留，只在需要时补 try、begin、start。

### U4 介词 → parts/13-preposition.md
- 以 `### 介词：先记住一幅空间画面` 开头，现有内容（对比表、真实英语习惯说明、on/in/at/by 对照表）原样保留。
- 补齐全部常见介词和初中涉及的介词，按组各做一张对照表（列：介词、本义、用法、例句）：核心空间 to、from、into、out of；位置 over、above、under、below、near、beside、between、among、behind、in front of；方向 across、through、along、around；时间 before、after、during、since、for、until；抽象 of、for、with、without、about、like、except。对照表里已有的 on、in、at、by 不重复。
- 对比小节：at church 与 in church；over 与 above；across 与 through；时间 in、on、at；between 与 among。
- 按规范第 18、19 条画简笔画，存到 images/prep-<word>.svg。

### U5 连词、感叹词 → parts/14-conj-interj.md
- 连词：并列连词 and、but、or、so；从属连词按引导的从句分组（宾语从句、状语从句），只点到为止，详细用法指向第四部分；although 不和 but 连用、because 不和 so 连用。
- 感叹词：oh、wow、oops 等，一段带过；感叹句指向第三部分。

### U6 第二部分：词源法记单词 → parts/20-etymology.md
- 以 `## 第二部分：词源法记单词` 开头，保留现有开头段落和"否定前缀"整节。
- 补：拆词原理与四步法；方向和程度前缀表（re-、pre-、en-、de-、ex-、inter-、over-、under- 等）；后缀表约 25 个，按变成名词、形容词、动词、副词分组（含 -ant、-ious）；词根表约 20 个，只收初中例词多的词根；同词根词性变化示例（act、action、active、actively）；词源法的局限（例：important、improve 里的 im- 不是否定前缀）。
- 例词只用初中词汇，能用 eat 派生的就用 eat。本义依据用 etymonline。

### U7 第三部分：简单句 → parts/30-simple-sentence.md
- 以 `## 第三部分：简单句` 开头，保留现有开头段落和"五种基本句型"整节。
- 补：句子成分（主语、谓语、宾语、表语、定语、状语、补语）；四种句子用途（陈述、疑问、祈使、感叹，含 what 与 how 感叹句）；反意疑问句；主谓一致；there be 句型；被动语态（一般现在、一般过去、一般将来时的被动，情态动词的被动）。

### U8 第四部分复合句 + 第五部分时态 → parts/40-compound-sentence.md、parts/50-tense.md
- 复合句：以 `## 第四部分：复合句` 开头，保留现有开头段落和"宾语从句"整节。补：并列句；主语从句和表语从句各点一句；定语从句（that、which、who、whose、where、when 怎么选）；状语从句（时间、条件、原因、结果、目的、让步、比较）；主将从现。
- 时态：以 `## 第五部分：时态` 开头，保留现有"16 种时态总表"整节。补：8 种初中时态逐个详解（构成、时间轴说明、例句、标志词）；易混时态对比（一般过去时与现在完成时，现在完成时的 for 与 since）。

### U9 附录 → parts/90-appendix.md
- 以 `## 附录：真题自测` 开头，保留现有 2024 年河南卷语篇填空第一节及答案。
- 补：学习建议（按什么顺序学，每天怎么练，一段即可）。
- 补河南中考真题：河南卷没有单项选择题，语法集中在"语篇填空"。从近几年河南中考试卷里找语篇填空原文（可从中考网 zhongkao.com 的试卷图片版读题），每篇给原文、答案、每空对应本导览哪一部分。答案必须有可查的出处，找不到出处的空不写答案并注明。目标：覆盖第一、三、四、五部分，每部分约 10 空；第二部分用词形变化题，有多少用多少。
- 最后列参考来源。

## 四、流程

1. 并行写作：U1 到 U9 同时写，各自写完自己的文件。
2. 一致性审校：一个审校代理通读全部文件，检查：部分编号和交叉引用；例句是否违反规范；同一个知识点有没有在两个单元重复讲；附录答案表里的"对应部分"是否指向真实存在的小节。审校只报告问题，并直接修正明确的机械错误（编号、引用）。
3. 合并：脚本按文件名顺序拼接 parts/*.md 生成 guide.md。
4. 由主会话检查简笔画和审校报告，向用户汇报。
