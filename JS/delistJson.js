/**
 * Created by Administrator on 2017/6/24 0024.
 */

$(function () {

    var arr = [];

    var buy = $('.buy');

    $.ajax({
        type:"get",
        url:"json/json2.json",

        success:function(data){

            var msg = data;
            arr = msg;
            for(var i=0;i<msg.length;i++){
                var obj = msg[i]; //{id: "01", name: "美迪惠尔A:PE镇定祛痘面膜10片舒缓补水，镇定肌肤，消除痘印", img: "image/001.jpg", unit: "￥", price: "78"}
                var dl = $('<dl class="odl"></dl>');
                var dt = $("<dt><a href='javascript:;'><img src="+obj.img+"></a></dt>").appendTo(dl);
                var dd = $('<dd>'+obj.name+'</dd>').appendTo(dl);
                var p = $('<p class="dl_p"><span>'+obj.unit+'</span><a href="javascript:;">'+obj.price+'</a></p>').appendTo(dl);
                dl.appendTo(buy)
            }
        }
    });
    //   给每个dl  添加点击事件
    $('.buy').on('click',".odl",function () {

        var index = $(this).index();   //  获取dl下标
        console.log(index);
        var obj = arr[index];    //  获取id
        console.log(obj);
        // 跳转详情页
        location.href = "index2.html?id="+obj.id;

    })





});

