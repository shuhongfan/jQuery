(function () {
    // 扩展核心函数方法
    $.extend({
        min:function (a,b) {
            return a<b?a:b
        },
        max:function (a,b) {
            return a>b?a:b
        },
        leftTrim:function (str) {
            return str.replace(/^\s+/,'')
        },
        rightTrim:function (str) {
            return str.replace(/\s+$/,'')
        }
    })
    // 扩展jquery对象的方法
    $.fn.extend({
        checkAll:function () {
            this.prop('checked',true)
        },
        unCheckAll:function () {
            this.prop('checked',false)
        },
        reverseCheck:function () {
            // this是jquery对象
            this.each(function () {
                // this是dom元素
                this.checked=!this.checked
            })
        }
    })
})()
