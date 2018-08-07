// var btn = document.querySelector("#btn");
// console.log(btn);
$('#btn').on('tap', function() {
    // console.log(1111);
    if ($("#userName").val() == "" || $("#pwd").val() == "") {
        $("#tip").text("用户名或密码不能为空...")
    } else {
        location.href = "../index.html";
    }
})