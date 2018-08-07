var userName = document.querySelector('#userName');
// console.log(userName);
var pwd = document.querySelector('#pwd');
// console.log(pwd);
var phone = document.querySelector("#phone");
// console.log(phone);

// 用户名
userName.onblur = function() {
    var txt = $(this).val();
    // console.log(txt);
    var reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
    if (reg.test(txt) || txt.trim(txt)) {
        // console.log(1111);
        $(this).css('border-color', 'green');
    } else if ($(this).val() == "") {
        $(this).css('border-color', '');
    } else {
        $(this).css('border-color', 'red');
    }
}

// 密码
pwd.onblur = function() {
    var text = $(this).val();
    // console.log(text.length);
    var reg = /^[a-zA-Z0-9_-]{6,20}$/;
    if ((reg.test(text) && text.length >= 6) && text.length <= 20) {
        // console.log(666);
        $(this).css('border-color', 'green');
    } else if ($(this).val() == "") {
        $(this).css('border-color', '');
    } else {
        $(this).css('border-color', 'red');
    }
}

// 手机号
phone.onblur = function() {

    var text = $(this).val();
    // console.log(text);
    var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    // 判断手机号码
    if (reg.test(text) || text.trim(text)) {
        // console.log(1111);
        $(this).css('border-color', 'green');
    } else if ($(this).val() == "") {
        $(this).css('border-color', '');
    } else {
        $(this).css('border-color', 'red');
    }
}