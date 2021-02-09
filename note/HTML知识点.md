# HTML知识点

## 语义化标签
[What are Semantic Elements?](https://www.w3schools.com/html/html5_semantic_elements.asp)

[我们到底如何使用语义化标签？](https://zhuanlan.zhihu.com/p/81693094)

## 头部元素
1. title
2. link
3. style
4. base 描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接
5. meta 元数据
```HTML
<!-- 为网页定义关键词 -->
<meta name="keywords" content="kw1, kw2, kw3">
<!-- 为网页定义描述内容 -->
<meta name="description" content="这个网页内容不可描述">
<!-- 定义网页作者 -->
<meta name="author" content="zhengdx">
<!-- 指定网页编码 -->
<meta charset="utf-8">
<!-- 每30秒刷新当前页面 -->
<meta http-equiv="refresh" content="30">
<!-- 在指定时间后重定向到其他网站 -->
<meta http-equiv="refresh" content="5;www.dogedoge.com">
```