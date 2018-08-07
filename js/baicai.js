// table栏
onload = function() {
    bcjnav();

    function bcjnav() {
        var bcj_nav = document.querySelector('.bcj-nav ul');
        // console.log(bcj_nav);
        var lis = document.querySelectorAll('.bcj-nav li');
        // console.log(lis);
        var myScroll = new IScroll('.bcj-nav', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
        itcast(bcj_nav).tap(function(e) {
            var liDom = e.target;
            myScroll.scrollToElement(liDom);
            activeLi(liDom);
        });

        function activeLi(dom) {
            for (var i = 0; i < lis.length; i++) {
                var li = lis[i];
                li.classList.remove("active");
            }
            dom.classList.add("active");
        }
    }
}


$(function() {
    init();
    // 初始化
    function init() {
        getbaicaijiatitle();
        getInfo(0);
        tap();
        backTop();

    }
})

function getbaicaijiatitle() {
    $.ajax({
        url: "http://193.112.55.79:9090/api/getbaicaijiatitle",
        type: 'get',
        dataType: 'json',
        success: function(data) {
            var listIndex = data.result;
            // console.log(listIndex);
            var htmlStr = template("templateBaiList", { arr: listIndex });
            // console.log(htmlStr);
            // 渲染页面
            $(".bcj-nav ul").html(htmlStr);

            var lis = $(".bcj-nav-bar").find('li');
            // console.log(lis);
            var ulWidth = 0;
            lis.each(function(index, value) {
                ulWidth += $(value).width();
                // console.log(ulWidth);
            })
            $(".bcj-nav-bar").width(ulWidth);
            // console.log($(".bcj-nav-bar").width(ulWidth));
        }
    })
}

function tap() {
    $(".bcj-nav-bar").on("tap", function(e) {
        // console.log(e.target);

        var data = $(e.target);

        // var id = e.target.dataset.titleId;
        var id = data.attr('data-titleIdid');
        // console.log(id);

        getInfo(id);
    })
}

function getInfo(id) {
    // console.log(id);
    $.get("http://193.112.55.79:9090/api/getbaicaijiaproduct", { titleid: id }, function(res) {
        // console.log(res);

        var html = template("listTemp", { list: res.result, id: id });
        // console.log(html);
        $('.bcj-connect').html(html);
    });
}



// 滚动事件 
$.fn.scrollTo = function(options) {
    var defaults = {
        toT: 0, //滚动目标位置
        durTime: 500, //过渡动画时间
        delay: 30, //定时器时间
        callback: null //回调函数
    };
    var opts = $.extend(defaults, options),
        timer = null,
        _this = this,
        curTop = _this.scrollTop(), //滚动条当前的位置
        subTop = opts.toT - curTop, //滚动条目标位置和当前位置的差值
        index = 0,
        dur = Math.round(opts.durTime / opts.delay),
        smoothScroll = function(t) {
            index++;
            var per = Math.round(subTop / dur);
            if (index >= dur) {
                _this.scrollTop(t);
                window.clearInterval(timer);
                if (opts.callback && typeof opts.callback == 'function') {
                    opts.callback();
                }
                return;
            } else {
                _this.scrollTop(curTop + index * per);
            }
        };
    timer = window.setInterval(function() {
        smoothScroll(opts.toT);
    }, opts.delay);
    return _this;
};


// 返回顶部 
function backTop() {
    $('.foot_return').on('tap', function() {
        $(window).scrollTo({
            toT: 0
        });
        // $(window).scrollTop(0);
    })
    $(window).on('scroll', function() {
        // console.log($(window).scrollTop());
        // $(window).scrollTop(0);
    })
}