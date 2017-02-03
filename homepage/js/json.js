
function json() {
   /* this.ss = function () {*/
        $.get("json/shouji.json", null, function (data, textStatus) {
            $(".cp-modem").append("<a ></a>");
            $.each(data["shouji"]["k1"]["l1"]["nv1"], function (i, n) {
             _boox.innerHTML =["zi:"+ i], ["html:" + n], ["href:" + n] ;
               /* _boox.appendChild(data);*/
            });
        });
    /*}*/
}