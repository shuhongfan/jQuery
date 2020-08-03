$(function () {
    var $container=$('#container')
    var $list=$('#list')
    var $points=$('#pointsDiv>span')
    var $prev=$('#prev')
    var $next=$('#next')
    var PAGE_WIDTH=600 // 一页的宽度
    var TIME=400 // 翻页的持续时间
    var ITEM_TIME=20 // 单元移动的间隔时间
    var imgCount=$points.length
    var index=0 // 当前下标
    var moving=false // 标识是否正在翻页 默认没有

    // 点击左右图标 平滑切换到上下一页
    $next.click(function () {
        // 平滑翻到下一页
        nextPage(true)
    })
    $prev.click(function () {
        // 平滑翻到上一页
        nextPage(false)
    })
    // 每隔1s自动滑动
    var intervalID=setInterval(function () {
        nextPage(true)
    },1000)
    // 鼠标移入停止定时器
    $container.hover(function () {
        clearInterval(intervalID)
    },function () {
        intervalID=setInterval(function () {
            nextPage(true)
        },1000)
    })

    // 点击圆点切换
    $points.click(function () {
        // 目标页下表
        var targetIndex=$(this).index()
        // 只有点击的不是当前页的原点才翻页
        if (targetIndex!=index){
            nextPage(targetIndex)
        }
    })

    // 平滑翻页
    // true 下一页
    // false 上一页
    function nextPage(next) {
        // 如果正在翻页 直接结束
        if (moving){
            return false
        }
        // 标识正在翻页
        moving=true

        // 总的偏移量 offset
        var offset=0
        // 得到当前的left值
        var currentLeft=$list.position().left
        // 计算offset
        if (typeof next==='boolean'){
            offset=next?-PAGE_WIDTH:PAGE_WIDTH
        } else {
            offset=-(next-index)*PAGE_WIDTH
        }
        // 计算出目标处的left值
        var targetLeft=currentLeft+offset

        // 总的时间 TIME=400
        // 单元移动的间隔时间 ITEM_TIME=20
        // 单元移动的偏移量 itemOffset=offset/(TIME/ITEM_TIME)
        var itemOffset=offset/(TIME/ITEM_TIME)

        // 启动循环定时器
        var intervalID=setInterval(function () {
            // 计算出最新的currentleft
            currentLeft+=itemOffset
            // console.log(itemOffset)
            if (targetLeft===currentLeft){ // 到达目标位置
                clearInterval(intervalID)
                // 标识翻页停止
                moving=false

                // console.log(imgCount)
                // 如果到达最右边的图片 跳转到第二张图片
                if (currentLeft-1<=-(imgCount+1)*PAGE_WIDTH){
                    currentLeft=-PAGE_WIDTH
                } else if (currentLeft>=-1){
                    // 到达最左边坨 跳转到倒数第二张图片
                    currentLeft=-imgCount*PAGE_WIDTH
                }
            }
            // 设置left
            $list.css('left',currentLeft)
        },ITEM_TIME)

        // 更新圆点
        updatePoints(next)
    }
    function updatePoints(next) {
        // 计算出目标圆点的下标targetindex
        var targetIndex=0
        if (typeof next==='boolean'){
            if (next){
                targetIndex=index+1
                if (targetIndex===imgCount){ // 1.jpg===第一个圆点
                    targetIndex=0
                }
            } else {
                targetIndex=index-1
                if (targetIndex===-1){ // 5.jpg===第5个圆点
                    targetIndex=imgCount-1
                }
            }
        } else {
            targetIndex=next
        }

        // 将当前index的span的class移除
        // $points.eq(index).removeClass('on')
        $points[index].className=''
        // 给目标圆点添加class=‘on''
        // $points.eq(targetIndex).addClass('on')
        $points[targetIndex].className='on'
        // 将index更新为targetIndex
        index=targetIndex
    }
})
