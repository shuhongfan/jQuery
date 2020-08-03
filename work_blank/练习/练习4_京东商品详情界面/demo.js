$(function () {
    // 1.对哪个/些元素绑定什么监听
    // 2.对哪个/些元素进行什么DOM操作
    showHide()
    hoverSubMenu()
    scarch()
    share()
    address()
    clickTabs()
    hoverMiniCart()
    clickProductTabs()
    moveMiniImg()
    hoverMiniImg()
    bigImg()
    function bigImg() {
        var $mediumImg=$('#mediumImg')
        var $mask=$('#mask')
        var $maskTop=$('#maskTop')
        var $largeImgContainer=$('#largeImgContainer')
        var $loading=$('#loading')
        var $largeImg=$('#largeImg')
        // 滑块的尺寸
        var maskWidth=$mask.width()
        var maskHeight=$mask.height()
        var maskTopWidth=$maskTop.width()
        var maskTopHeight=$maskTop.height()
        $maskTop.hover(function (event) {
            // 显示小黄块
            $mask.show()
            // 动态加载对应的大图
            var src=$mediumImg.attr('src').replace('-m.','-l.')
            $largeImg.attr('src',src)
            $largeImgContainer.show()
            // 绑定加载完成监听
            $largeImg.on('load',function () {
                // 得到大图的尺寸
                var $largeWidth=$largeImg.width()
                var $largeHeight=$largeImg.height()
                // 给largeimgcontainer设置尺寸
                $largeImgContainer.css({
                    width:$largeWidth/2,
                    heigth:$largeHeight/2
                })
                // 显示大图
                $largeImg.show()
                // 隐藏加载进度条
                $loading.hide()

                // 绑定mouseMove鼠标移动的监听
                $maskTop.mousemove(function (event) {
                    // 1.移动小黄块
                    // 计算小黄块 left/top
                    var left=0
                    var top=0
                    // 时间坐标
                    var eventLeft=event.offsetX
                    var eventTop=event.offsetY
                    left=eventLeft-maskWidth/2
                    top=eventTop-maskHeight/2
                    // left在[0,maskTopWidth-maskWidth]
                    if (left<0){
                        left=0
                    } else if (left>maskTopWidth-maskWidth){
                        left=maskTopWidth-maskWidth
                    }
                    // top在[0,maskTopHeight-maskHeight]
                    if (top<0){
                        top=0
                    } else if (top>maskTopHeight-maskHeight){
                        top=maskTopHeight-maskHeight
                    }
                    // 给mask重新定位
                    $mask.css({
                        left:left,
                        top:top
                    })

                    // 2.移动大图
                    // 得到大图的坐标
                    left=-left*$largeWidth/maskTopWidth
                    top=-top*$largeHeight/maskTopHeight
                    // 设置大图坐标
                    $largeImg.css({
                        left:left,
                        top:top
                    })
                })

            })
        },function () {
            $mask.hide()
            $largeImgContainer.hide()
            $largeImg.hide()
        })
    }
    function hoverMiniImg() {
        $('#icon_list>li').hover(function () {
            var $img=$(this).children()
            $img.addClass('hoverThumb')

            var src=$img.attr('src').replace('.jpg','-m.jpg')
            $('#mediumImg').attr('src',src)
        },function () {
            $(this).children().removeClass('hoverThumb')
        })
    }
    function moveMiniImg() {
        var $as=$('#preview>h1>a')
        var $backward=$as.first()
        var $forward=$as.last()
        var $ul=$('#icon_list')
        var SHOW_COUNT=5
        var imgCount=$ul.children('li').length
        var moveCount=0 // 移动次数 向右为正 向左为负
        var liWidth=$ul.children(':first').width()

        // 初始化更新
        if (imgCount>SHOW_COUNT){
            $backward.attr('class','forward')
        }
        $forward.click(function () {
            if (moveCount===imgCount-SHOW_COUNT){
                return false
            }
            moveCount++
            $backward.attr('class','backward')
            if (moveCount===imgCount-SHOW_COUNT){
                $forward.attr("class",'forward_disabled')
            }
            $ul.css({
                left:-moveCount*liWidth
            })
        })
        $backward.click(function () {
            if (moveCount===0){
                return false
            }
            moveCount--
            $forward.attr('class','forward')
            if (moveCount===0){
                $backward.attr("class",'backward_disabled')
            }
            $ul.css({
                left:-moveCount*liWidth
            })
        })
    }
    function showHide() {
        $('[name=show_hide]').hover(function () {
            $('#'+this.id+'_items').toggle()
        })
    }
    function hoverSubMenu() {
        $('#category_items>div').hover(function () {
            $(this).children(':last').toggle()
        })
    }
    function scarch() {
        $('#txtSearch').on('focus keyup',function () {
            if ($(this).val().trim()){
                $('#search_helper').show()
            }
        }).blur(function () {
            $('#search_helper').hide()
        })
    }
    function share() {
        var isOpen=false
        var $shareMore=$('#shareMore')
        var $parent=$shareMore.parent()
        var $as=$shareMore.prevAll('a:lt(2)')
        var $b=$shareMore.children('b')
        $shareMore.click(function () {
            if (isOpen){ // 去关闭
                isOpen=false
                $parent.css('width',155)
                $as.hide()
                $b.removeClass('backword')
            } else {
                isOpen=true
                $parent.css('width',200)
                $as.show()
                $b.addClass('backword')
            }
            // isOpen=!isOpen
        })
    }
    function address() {
        $('#store_select').hover(function () {
            $(this).children('div:gt(0)').show()
        },function () {
            $(this).children('div:gt(0)').hide()
        })

        $('#store_close').click(function () {
            $(this).hide()
            $('#store_content').hide()
        })
    }
    function clickTabs() {
        $('#store_tabs>li').click(function () {
            $(this).removeClass('hover')
        },function () {
            $(this).addClass('hover')
        })
    }
    function hoverMiniCart() {
        $('#minicart').hover(function () {
            $(this).toggleClass('minicart')
            $(this).children(':last').toggle()
        })
    }
    function clickProductTabs() {
        var $lis=$('#product_detail>ul>li')
        var $contents=$('#product_detail>div:gt(0)')
        $lis.click(function () {
            $lis.removeClass('current')
            $(this).addClass('current')

            $contents.hide()

            var index=$(this).index()
            $contents.eq(index).show()
            // $contents[index].style.display='block'
        })
    }
})
