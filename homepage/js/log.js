
function log() {
     var _checked=document.getElementById("checked");/*登录*/
     var _tt=document.getElementById("tt");/*注册*/
    var _btn=document.getElementById("tologin-btn");/*登录暖岛*/
    var _login=document.getElementById("J_loginOtherSNS");/*更多*/
    var _loginOther=document.getElementById("J_loginOtherSNSMain");
    var _shao=document.getElementById("J_shao2-helper");/*二维码*/
    var _sha=document.getElementById("sha");
    _checked.onclick=function () {
        _tt.style.color="#999";
        _checked.style.color=" #303030";
        _btn.innerHTML="登录暖岛";
    }
    _tt.onclick=function () {
        _checked.style.color="#999";
        _tt.style.color=" #303030";
        _btn.innerHTML="同意注册";
    }
    _login.onmousedown=function () {
        _loginOther.style.display="block";
    }
    _login.onmouseleave=function () {
        _loginOther.style.display="none";

    }
    _shao.onclick=function () {
        _sha.style.display="block";
    }
    _shao.onmouseleave=function () {
        _sha.style.display="none";

    }


}
function main() {
    $("#tologin-btn").click(function () {
        var user=$("#uemail").val();
        var pwd_f = $("#upassword").val();
        var _params = {
            "user": user,
            "password": pwd_f
        };
        $.post("api/login.php", _params, function (data,textStatus) {
            try{
                if(data=="0"){
                    $("#top").html("<a href=\"log.html\">login</a>");
                }else{
                    alert("欢迎:"+data+" 光顾!!");
                    window.location.href="home.html";
                }
            }catch (e){
                alert("忘记密码了吗?");
            }
        });
    });
}
window.onload=function(){
        log();
        main();
}
