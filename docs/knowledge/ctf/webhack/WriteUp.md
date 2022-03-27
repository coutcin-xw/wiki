# webhack的解题思路

## 题目信息

|题目名|类型|难度|
|-|-|-|
|webhack| MISC |中等|

## FLAG

* DASCTF{059fc16810ff3db79cac7a5a0527f490}

## 知识点

1. web流量分析
2. exe反编译
3. 简单加密

## 解题步骤

1. 打开附件流量包，可以看到里面是蚁剑的通信过程，猜测可能是通过蚁剑连接web木马上传文件

   ![](https://c.img.dasctf.com/images/202236/1646566478747-1bbd47e4-fefb-4285-8624-bb48a535484c.png)

   把所有文件导出

   ![](https://c.img.dasctf.com/images/202236/1646566696754-d39437b4-ba70-46aa-9e0f-4f1062dbfe99.png)

2. 对其中最大的文件进行分析，将其中十六进制数据写入文件，可以看出是一个程序

   ![](https://c.img.dasctf.com/images/202236/1646567615945-8e4046ee-b475-46d7-8763-0909635c3ec2.png)

3. 拖到ida分析，发现对其中数组数据进行了取反操作

   ![](https://c.img.dasctf.com/images/202236/1646567746748-706dbc99-77cf-4688-9897-4e8231968b28.png)

对数组进行解密

![](https://c.img.dasctf.com/images/202236/1646568231771-49977eb5-7d1d-4c6f-8ea8-8908dea18af4.jpg)

可以看出是一段shellcode，cs的shellcode在尾部会有明文的服务器地址，这里网址即为flag值

![](https://c.img.dasctf.com/images/202236/1646568038479-a003124f-efcc-4b47-98b9-9439296596e9.png)

