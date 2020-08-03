* 动画效果
    * slideDown()/slideUp()/slideToggle()
    * fadeOut()/fadeIn()/fadeToggle()
    * show()/hide()/toggle()
    * animate({结束时的样式},time,fun)
    * stop()
* 插件机制
    * 扩展jquery函数对象方法
        $.extend({
            xxx:function(){} // this是$
        })
        $.xxx()
    * 扩展jquery对象的方法
        $.fn.extend({
            xxx:function(){} // this是jquery对象
        )
        $obj.xxx()
        
