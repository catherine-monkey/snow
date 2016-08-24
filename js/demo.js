
var i = 0;
var minSize = 5;//雪片的最小的尺寸
var maxSize = 50;
var newOn = 80;//雪片多长时间产生一个，单位是毫秒，越小，雪下得越大
var flake = $("<div></div>").css({ "position": "absolute", "top": "-50px" }).html("❄");//创建了一个雪片的对象
$(function () {
    $(".ig").eq(0).show().siblings().hide();//页面打开之后，第一张图片显示，其余的图片隐藏
    setInterval(function () {//图片间隔3s轮播一次
        i++;
        if (i == 6) {
            i = 0;
        }
        $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    }, 3000);

    var documentHeight = $(document).height();//获取到页面的高度
    var documentWidth = $(document).width();//获取到页面的宽度
    setInterval(function () {
        var startPositionLeft = Math.random() * documentWidth;//雪片一开始距离浏览器的左边的随机值
        var sizeFlake = minSize + Math.random() * maxSize;//雪片的随机大小
        var endPositionLeft = Math.random() * documentWidth;////雪片落到最下面距离浏览器的左边的随机值
        var durationFall = documentHeight * 10 + Math.random() * 3000;//雪片下落的时间
        var startOpacity = 0.7 + 0.3 * Math.random();//雪片产生的时候，一开始的透明度
        var endOpacity = 0.5 * Math.random();//雪片落到下面的时候，一开始的透明度
        flake.clone().appendTo($("body")).css({
            "left": startPositionLeft,
            "opacity": startOpacity,
            "font-size": sizeFlake,
            "color": "#fff"
        }).animate({
            "top": documentHeight - 40,
            "left": endPositionLeft,
            "opacity": endOpacity
        }, durationFall, function () {
            $(this).remove();
        });
    }, newOn);
});