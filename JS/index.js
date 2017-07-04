$(function () {

    $('.searchbox .search span').click(function () {
        $('.search input').val(' ');
    });
    $('.searchbox .search').hover(function () {
        $('.search input').css('background','#fafafa');
    },function () {
        $('.search input').css('background','#fff');
    })
});
// 回到顶部
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>800){
            $("#go_Top").fadeIn(400);
        }
        else
        {
            $("#go_Top").fadeOut(300);
        }
    });
    $("#go_Top").click(function(){
        $('body,html').stop().animate({scrollTop:0},300);

    });
});
//跳转到购物车
$(function () {

    $('.shoppingcart').click(function () {
        location.href = 'cart.html';
    })
});
//    轮播图
var i =0;
var timer;
$(function () {

    showtime();

   $('.show_nav').children('li').hover(function () {

        i = $(this).index();
       show();
        clearInterval(timer);

    }, function () {
        showtime()
    });

    $('.show .list').children('li').hover(function () {
        show();
        clearInterval(timer);
    },function () {
        showtime()
    })

});

function show() {
    $('.list').children('li').eq(i).stop().fadeIn('slow').siblings('li').stop().fadeOut('slow');

    $('.show_nav').children('li').eq(i).addClass('selected').siblings().removeClass('selected');
    $('.show').children('.show_right').eq(i).stop().fadeIn('slow').siblings('.show_right').stop().fadeOut('slow');
}

function showtime() {
    timer = setInterval(function () {
        i++;
        if(i==4){
            i=-1;
        }
        show()
    },4000)
}

//  轮播
/*var list = $('.list');
$(function () {
    $.get('json/Carousel.json',function (res) {
        var res1 = res.data;

        for(var i=0;i<res1.length;i++){
            var obj = res1[i]; //Object {id: "1", img: "image/1.jpg"}
            var lis = $('<li></li>');
            $('.list').append(lis);
            lis.css("background-image","url("+obj.img+")");
            var oli = $('<li>'+obj.id+'</li>');
            $('.show_nav').append(oli);
        }
    })

});*/

//    轮播图

$(function () {

    $('.head .hear_list li:first-child').hover(function () {
        $('.dropdown').stop().slideDown(200);
    },function () {
        $('.dropdown').stop().slideUp(200)
    });
    $('.dropdown div').hover(function () {
        $(this).css('color','red')
    },function () {
        $(this).css('color','')
    })
});


$(function () {
    $('.skin_right ul li .toplist').mouseenter(function () {

        /*$(this).hide().next("div").show().parent("a").parent("li").siblings("li").find(".toplist").show().next().hide()*/
        $(this).hide().next('div').show().parent('li').siblings().find('.toplist').show().next().hide()
    })

});

$(function () {
    $(window).on('scroll',null,function () {

        var topH = $('.head').height();
        var headH = $('#headbox').height();
        var scrollTop = $('body').scrollTop();
        if(scrollTop>=800){
            $('#main_nav').css('position','fixed').css('top',0);
            $('.show').css('marginTop',topH);
            $('.ul_big').hide()

        }else {
            $('#main_nav').css('position','static');
            $('.show').css('marginTop',0);
            $('.ul_big').show()
        }
    })
});

$(function () {

    $('.sale .tab').children('li').mouseenter(function () {
        var tempIndex = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.sale').children('.products1').eq(tempIndex).show().siblings('.products1').hide()
    })
});

$(function () {

    var inlist = $('.inlist');
    var right = $('.right');

    $('.secondlist').hide();

    $.ajax({
        type:"get",
        url:"json/json1.json",

        success:function(msg){
            /*************************二级导航  1****************************/
            //   左边区域
            for(var i=0;i<msg.list.length;i++){
                var obj = msg.list[i];  //Object {name: "精华步骤", txt: "基底 精华素 原液 精油"}
                var objNname = obj.name;//   卸妆步骤   洁肤步骤  打印出每个 name
                var objTxt = obj.txt;  //卸妆油 卸妆乳/霜 眼唇卸妆 卸妆水 卸妆啫喱 洁肤卸妆2合1

                var oli = $('<li><strong>'+objNname+'</strong></li>').appendTo(inlist);

                var objTxtSp= objTxt.split(' ');  //["基底", "精华素", "原液", "精油"]
                var oDiv = $('<div class="box"></div>').appendTo(oli);
                for(var j=0;j<objTxtSp.length;j++){

                    var arroTxt = objTxtSp[j];

                    var oA= $('<a href="javascript:void(0)">'+ arroTxt+'</a>');
                    oA.appendTo(oDiv)
                }
            }
            //  右边区域

            for(var i=0;i<msg.brand.length;i++){

                var objBrand = msg.brand[i];
                var brandH2 = objBrand.head;   //推荐品牌
                var h2 = $('<ul><h2>'+brandH2+'</h2></ul>').appendTo(right);

                var brandBtm = objBrand.btm; //兰蔻 雅诗兰黛 倩碧 娇韵诗 迪奥 碧欧泉 兰芝 科颜氏 fresh SK-Ⅱ

                var brandBtmSp = brandBtm.split(' ');  //["兰蔻", "雅诗兰黛", "倩碧", "娇韵诗", "迪奥"]

                for(var k=0;k<brandBtmSp.length;k++){
                    var brandBtmTxt = brandBtmSp[k];
                    var rLis = $('<li><a href="javascript:void(0)">'+brandBtmTxt+'</a></li>').appendTo(h2)

                }
            }
            //   右边区域图片

            for(var x=0;x<msg.img.length;x++){
                var imgPz = msg.img[x];    // Object {pz: "images/1.jpg"}
                var pzPic = imgPz.pz;    //   images/1.jpg

                var oDivImg = $('<div><a href="javascript:void(0)"><img src="images/1.jpg"></a></div>').appendTo(right);

            }
        }


    });

   $('.ul_big').find('ul').hover(function () {

       $('.secondlist').show();


   },function () {

       $('.secondlist').hide();
   });

});




//  轮播下面三张图
$(function () {
    $.get('json/json3.json',function (reg) {

        var obj = reg.data;
        for(var i=0;i<obj.length;i++){
            var res =  obj[i];               //   {img: "image/a1.jpg image/a2.jpg image/a3.jpg"}
            for(var j in res){
               var reg1 = res[j].split(' ');  //["image/a1.jpg", "image/a2.jpg", "image/a3.jpg"]

                for(var k=0;k<reg1.length;k++){
                    var oImg = $('<img>');
                    oImg.addClass('lazy');
                    oImg.attr('data-original',reg1[k]);
                    oImg.attr('src',reg1[k]);


                    $('.adiv').append(oImg);

                }
           }

        }
    })
});

//  品牌活动
$(function () {

    $.get('json/json3.json',function (d) {
        var res = d.pp;
        for(var i=0;i<res.length;i++){
            var res1 = res[i] ;//{img: "image/30.jpg image/31.jpg image/32.jpg image/33.jpg"}
            for(var j in res1){
                var data = res1[j].split(' '); // ["image/30.jpg", "image/31.jpg", "image/32.jpg", "image/33.jpg"]

                for(var k=0;k<data.length;k++){
                    var oDiv = $('<div class="brandbox_img"></div>');
                    var oImg = $('<img>');
                    oImg.appendTo(oDiv);
                    oImg.attr('src',data[k]);
                    oImg.attr('data-original',data[k]);
                    oImg.addClass('lazy')
                    $('.brand_img').append(oDiv);

                }
            }
        }
    })

});

// men's
$(function () {

    $.get('json/json4.json',function (d) {

        var str = '';
        for (var i=0;i<d.length;i++){
            var obj = d[i]; // {img: "image/m1.jpg", dd1: "碧欧泉男士水动力保湿乳", icon: "￥", price: "225.", sm: "00"…}

            str += '<dl class="smbox">' +
                '<dt><a href="#"><img src="'+obj.img+'" class="lazy" data-original="'+obj.img+'" alt="" width="180" height="180"></a></dt> ' +
                '<dd><a href="javascript">'+obj.dd1+'</a></dd> ' +
                '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.sm+'</b>'+obj.em+'</dd> ' +
                '</dl>';

        }
        $('#mens_wapeer .mens_bigbox').append(str);
    })
});

//美体美发
$(function () {

    $.get('json/json5.json',function (d) {

        var str1 = '';
        for (var i=0;i<d.length;i++){
            var obj = d[i]; // {img: "image/m1.jpg", dd1: "碧欧泉男士水动力保湿乳", icon: "￥", price: "225.", sm: "00"…}

            str1 += '<dl class="smbox">' +
                '<dt><a href="#"><img src="'+obj.img+'" class="lazy" data-original="'+obj.img+'" alt="" width="180" height="180"></a></dt> ' +
                '<dd><a href="javascript">'+obj.dd1+'</a></dd> ' +
                '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.sm+'</b>'+obj.em+'</dd> ' +
                '</dl>';

        }
        $('#bodyhari .mens_bigbox').append(str1);
    })
});

// 护肤

$(function () {

    var str3 = '';
    var str4 = '';
    var str5 = '';
    $.get('json/json6.json',function (d) {

        //  左边大图
        for(var i=0;i<d.length;i++){
            var d2 = d[i];
            var data1 = d2.data;
            for(var j=0;j<data1.length;j++){
                var obj = data1[j];  // {bigImg: "image/40.jpg"}

                   str3 += '<a href="#">' +
                             '<img  class="lazy" data-original="'+obj.bigImg+'" alt="" src="'+obj.bigImg+'">' +
                        '</a>'

            }
            $('.ld').append(str3);
        }
        //kose
        var top = d2.top1;
       for(var k=0;k<top.length;k++){
           var obj = top[k];   //{smImg: "image/sk1.jpg", dd1: "Kose 高丝 雪肌精化妆水180ml", dd2: "平衡盈润新配方，更丰盈水润", icon: "￥", price: "165."…}
       str4 += '<dl class="skindl_1">' +
                   '<dt><a href="#"><img  class="lazy" data-original="'+obj.smImg+'" src="'+obj.smImg+'" alt="" width="180" height="180"></a></dt> ' +
                       '<div class="skindd">' +
                       '<dd><a href="#">'+obj.dd1+'<br></a></dd>' +
                       '<dd><a href="#">'+obj.dd2+'</a></dd>' +
                       '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.ob+'</b>'+obj.last+'</dd>' +
                   '</div>' +
             '</dl>';
       }

        $('#sk .kose').append(str4);

        // 底部  中国官网可查防伪
       var btm = d2.btm;
        for(var i=0;i<btm.length;i++){
            var obj = btm[i]  //{dd1: "雅漾清爽倍护便携防晒乳", dd2: "中国官网可查防伪", icon: "￥", price: "145.", ob: "00"…}
                str5 += '<dl class="skindl_2">' +
                '<dd><a href="#">'+obj.dd1+'</a></dd>' +
                '<dd><a href="#">'+obj.dd2+'</a></dd>' +
                '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.ob+'</b>'+obj.last+'</dd>' +
                '<dd><a href="#"><img  class="lazy" data-original="'+ obj.smImg+'" src="'+obj.smImg+'" alt="" width="180" height="180"></a></dd>' +
                '</dl>'
        }
        $('#sk .sum').append(str5);
    });

});

// 彩妆

$(function () {


    $.get('json/json6.json',function (d) {
        var str = '';

        for(var i=0;i<d.length;i++){
            var d2 = d[i];  // {data: Array(1), top1: Array(2), btm: Array(3), data1: Array(1), top2: Array(2)…}
            var d3 = d2.top2;
            for(var j=0;j<d3.length;j++){
                var obj = d3[j];  //{smImg: "image/cz1.jpg", dd1: "Estee Lauder雅诗兰黛", dd2: "持久完美粉底气垫BB粉", dd3: "控油持妆 隐匿毛孔", icon: "￥"…}

            str += '<dl class="skindl_1">' +
                '<dt><a href="#"><img class="lazy" data-original="'+obj.smImg+'" src="'+obj.smImg+'" alt="" width="180" height="180"></a></dt> ' +
                '<div class="skindd">' +
                '<dd><a href="#">'+obj.dd1+'<br>'+obj.dd2+'</a></dd>' +
                '<dd><a href="#">'+obj.dd3+'</a></dd>' +
                '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.ob+'</b>'+obj.last+'</dd>' +
                '</div>' +
                '</dl>'
            }

            var str2 = '';
            var bt = d2.btm1;
            for(var k=0;k<bt.length;k++){

               var obj = bt[k];  //{dd1: "妙巴黎天鹅绒唇彩釉", dd2: "液态唇膏 有漆光般效果", icon: "￥", price: "99.", ob: "00"…}

            str2 += '<dl class="skindl_2">' +
                '<dd><a href="#">'+obj.dd1+'</a></dd>' +
                '<dd><a href="#">'+obj.dd2+'</a></dd>' +
                '<dd><b>'+obj.icon+'</b><span>'+obj.price+'</span><b>'+obj.ob+'</b>'+obj.last+'</dd>' +
                '<dd><a href="#"><img  class="lazy" data-original="'+obj.smImg+'src" src="'+obj.smImg+'" alt="" width="180" height="180"></a></dd> ' +
                '</dl>'

           }
        }
        $('#makeup .kose').append(str);
        $('#makeup .sum').append(str2)
    })
});

// 香水

$(function () {

   $.get('json/json7.json',function (d) {

       str = '';
       for (var i = 0; i < d.length; i++) {
           var d2 = d[i];  //{img: "image/p1.jpg image/p2.jpg image/p3.jpg image/p4.jpg image/p5.jpg"}
           var res = d2.img.split(' ');  //["image/p1.jpg", "image/p2.jpg", "image/p3.jpg", "image/p4.jpg", "image/p5.jpg"]
           
           str += '<div class="perfume_left">' +
               '<a href="#"><img  class="lazy" src="' + res[0] + '" data-original="' + res[0] + '" alt="" width="326" height="480"></a> ' +
               '</div> ' +
               '<div class="perfume_center"> ' +
               '<img  class="lazy" src="' + res[1] + '" data-original="' + res[1] + '" alt="" width="355" height="276"> ' +
               '<div> ' +
               '<a href="#"><img src="' + res[2] + '" class="lazy" data-original="' + res[2] + '" alt="" width="177" height="203"></a> ' +
               '<img  class="lazy" src="' + res[3] + '" data-original="' + res[3] + '" alt="" width="177" height="203"> ' +
               '</div> ' +
               '</div> ' +
               '<div class="perfume_right"> ' +
               '<a href="#"><img src="' + res[4] + '" class="lazy" data-original="' + res[4] + '" alt="" width="275" height="480"></a> ' +
               '</div>';
           // }

       }
       $('#perfume .skin_main').append(str)
   })
});


// 美容资讯

$(function () {

    $.get('json/json8.json',function (d) {

        // 左边区域
        var str = '';
        for(var i=0;i<d.length;i++){
            var res1 = d[i];
            var res2 = res1.data;
            for(var j=0;j<res2.length;j++){
                var obj = res2[j];  //{bigImg: "image/r1.png", txt1: "根据场合选择防晒指数 这些新品帮你度", txt2: "很多女生在夏天最担心的一件事就是晒黑了，而这些今年春夏新出的防晒新品...", txt3: "[查看更多]"}
           str += '<dl class="mrpic">' +
                  '<dt><a href="#"><img  class="lazy" src="'+obj.bigImg+' " data-original="'+obj.bigImg+'" alt="" width="250" height="330"></a></dt> ' +
                  '<dd><b>'+obj.txt1+'</b></dd> ' +
                  '<dd>'+obj.txt2+'<a href="#">'+obj.txt3+'</a></dd> ' +
                  '</dl>';
            }
        }
       //  prepend()  在开头插入
        $('.newlist .newsbox').prepend(str);
        // 左边区域结束

        // 中间区域
        var oList = res1.list;

        var str2 = '';
        for (var i = 0; i < oList.length; i++) {
            var obj = oList[i];  //{img: "image/r2.png", txt1: "香水", txt2: "上万种香水类型 据说只有1%的人会选", txt3: "性感女人的标志除了恨天高，就是香水了。常在圈里混，撞衫撞脸已不新鲜，现在最新潮的就是“撞香”。跟美女撞了，叫高逼格有品位，跟豪放大妈...", txt4: "[详细]"}
            str2 += '<dl> ' +
                '<dt><img  class="lazy" src="' + obj.img + '" data-original="' + obj.img + '" alt="" width="154" height="118"></dt> ' +
                '<div> ' +
                '<span>' + obj.txt1 + '</span><span>' + obj.txt2 + '</span> ' +
                '<p>' + obj.txt3 + '<a href="#" >' + obj.txt4 + '</a></p> ' +
                '</div> ' +
                '</dl>'
        }

        $('.newlist .info_mr').prepend(str2);
        // 中间区域结束

        // 右边区域
        var news = res1.oright;
        var str3 = '';
        for(var i=0;i<news.length;i++){
            var obj = news[i];  //{txt1: "AUPRES欧珀莱 男士俊士JS眼部沁凉滚珠精华液/眼霜 15mlAUPRES欧珀莱 男士俊士JS眼部沁凉滚", txt2: "编辑推荐：", txt3: "用了这款没多久，感觉眼袋跟黑眼圈的问题缓解了不少", img: "image/r5.jpg"}

            str3 += '<dl> ' +
                '<dt><a href="#"><img  class="lazy" src="'+obj.img+'" data-original="'+obj.img+'" alt="" width="82" height="82"></a></dt> ' +
                '<dd><a href="#">'+obj.txt1+'</a></dd> ' +
                '<dd><a href="#"><span>'+obj.txt2+'</span>'+obj.txt3+'</a></dd> ' +
                '</dl>'
        }

        $('.mrnew .mr_right').prepend(str3);
    })
});

// 品牌小图  美体美发

$(function () {

    $.get('json/json9.json', function (d) {

        var str = '';
        for (var i = 0; i < d.length; i++) {
            var obj = d[i];
            var obj1 = obj.img.split(' ');  // 数组
            for (var j = 0; j < obj1.length; j++) {
                var objImg = obj1[j];
                str += '<a href="#"><img src="'+objImg+'"  class="lazy" data-original="' + objImg + '" alt=""></a>'
            }
        }
        $('#bodyhari .icon').append(str);
    })
});





