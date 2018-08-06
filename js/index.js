$(function () {
    onload = function () {
        setHTML();

        // 为了在pc端更好的去调试
        onresize = function () {
            setHTML();
        }

        function setHTML() {
            // 基础值
            var baseVal = 100;
            // 设计稿的宽度
            var pageWidth = 640;
            // 要适配的屏幕的宽度?
            var screenWidth = document.querySelector("html").offsetWidth;
            // 要设置的fontsize
            var fontsize = screenWidth * baseVal / pageWidth;

            // 设置到html标签的中
            document.querySelector("html").style.fontSize = fontsize + "px";

        }
    }
    $.ajax({
        type: 'GET',
        url: 'http://193.112.55.79:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (res) {
            console.log(res);    
            var data = res.result;
            var tbody = template('sss',{"data":data});
            $(".content").html(tbody);                          
        }
    })
})