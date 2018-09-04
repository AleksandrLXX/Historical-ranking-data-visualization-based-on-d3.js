var isSupportFontFamily = function(f) {
//    f是要检测的字体
    if(typeof f != "string") {
        return false
    }
//    h是基础字体
    var h = "Arial";
    if(f.toLowerCase() == h.toLowerCase()) {
        return true
    }
//    设置一个检测的字符A,看他是否支持f字体
    var e = "a";
    var d = 100;
    var a = 100,
        i = 100;
    var c = document.createElement("canvas");
    var b = c.getContext("2d");
    c.width = a;
    c.height = i;
    b.textAlign = "center";
    b.fillStyle = "black";
    b.textBaseline = "middle";
    var g = function(j) {
        b.clearRect(0, 0, a, i);
//        字体是传入的j,或者是默认的h
        b.font = d + "px " + j + ", " + h;
        b.fillText(e, a / 2, i / 2);
//        获取所有的canvas图片信息
        var k = b.getImageData(0, 0, a, i).data;
//        k调用数组的 filter方法,筛选符合条件的。改变原数组。
      
        return [].slice.call(k).filter(function(l) {
            return l != 0
        });
    };
//    返回结果,如果h默认字体和输入待检测字体f.通过g函数检测得到的字符串不一致,说明自提生效
    return    g(h).join("") !== g(f).join("");
};