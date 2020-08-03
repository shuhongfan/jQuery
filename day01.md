1.了解jquery
    * 是什么？
        * 一个JS函数库：write less，do more
        * 封装简化DOM操作（CURD）/Ajax
    * 为什么用它？
        * 强大选择器：方便快速查找DOM元素
        * 隐式遍历/迭代：一次操作多个元素
        * 读写合一：读数据/写数据用的是一个函数方法
        * 事件处理
        * 链式调用
        * DOM操作（CURD）CREATE UPDATE READ DELETE
        * 样式操作
    * 如何使用？
        * 引入jquery库
            * 本地引入与CDN远程引入
            * 测试版与生产版（压缩版）
        * 使用jquery
            * 使用jquery函数： $/jQuery
            * 使用jquery对象： $.xxx(执行$()得到的)
2.jquery的2把利器
    * jquery函数： $/jQuery
        * jquery向外暴露的就是jquery函数，可以直接使用
        * 当成一般函数使用：$(param)
            * param是function：相当于window.onload=function(文档加载完成监听)
            * param是选择器字符串：查找所有匹配DOM元素，返回办函所有DOM元素的jquery对象
            * param是DOM元素：将DOM元素对象包装为jquery对象返回 $(this)
            * param是便签字符串：创建标签DOM元素对象并包装为jquery对象返回
        * 当成对象使用：$.xxx
            * each(obj/arr,function(key,value){})
            * trim(str)
        * jquery对象
            * 包含所有匹配的n个DOM元素的伪数组对象
            * 执行$()返回的就是jquery对象
            * 基本行为：
                * length/size():得到dom元素的个数
                * [index]：得到执行下标对应的dom元素
                * each(function(index,domEle){}):遍历所有dom元素
                * index():得到当前dom元素在所有兄弟元素中的下标
3.选择器
    * 是什么？
        * 有特定语法规则(css选择器)的字符串
        * 用来查找某个/某些DOM元素：$(selector)
    * 分类
        * 基本
            * #id
            * tagName/*
            * .class
            * selector1,selector2:并集
            * selector1selector3:交集
        * 层次
            * 查找子孙后代，兄弟元素
            * selector1>selector2:子元素
            * selector1 selector2:后代元素
        * 过滤
            * 在原有匹配元素中筛选出其中一些
            * :first
            * :last
            * :eq(index)
            * :not(selector)
            * :lt
            * :gt
            * :odd
            * :even
            * :hidden
            * :visible
            * [attrName]
            * [attrName=value]
        * 表单
            * :input
            * :text
            * :checkbox
            * :radio
            * :checked
4.属性
    * 操作便签的属性，标签文本
    * attr(name)/attr(name,value):读写非布尔值的标签属性
    * prop(name)/prop(name,value):读写布尔值的标签属性
    * removeAttr(name)/removeProp(name):删除属性
    * addClass(classValue):添加class
    * removeClass(classValue):移除指定class
    * val()/val(value):读写标签的value
    * html()/html(htmlString):读写标签体文本
5.伪数组/类数组
    * 具有length属性
    * 按索引方式存储数据
    * 不具有数组的push,pop等方法
