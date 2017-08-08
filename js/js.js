
function stopBubble(e) {
	// 如果传入了事件对象，那么就是非ie浏览器  
	if (e && e.stopPropagation) {
		//因此它支持W3C的stopPropagation()方法  
		e.stopPropagation();
	} else {
		//否则我们使用ie的方法来取消事件冒泡  
		window.event.cancelBubble = true;
	}
}

/***** 头部搜索框 ****/
$(".btn-sch").click(function(e){
	stopBubble(e);
	$(".pop-sch").toggle();
})


 //返回顶部
  $(window).scroll(function () {
        if ($(window).scrollTop() >50) {
            $('.back-top').fadeIn(800);//当滑动栏向下滑动时，按钮渐现的时间
        } else {
            $('.back-top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
        }
    });


  $('.back-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 200);
   });

 //当前位置判断
   var index = $(".swiper-wrapper .swiper-slide.on").index();
	if(index > 3){
	  var index1 = index-3;
	  }else{
	  }

   var len = parseInt($(".swiper-wrapper").width())/4;
   var left = -index1*len;
   $(".swiper-wrapper").css("transform","translate3d("+left+"px, 0px, 0px)");

  //下拉
   $(".nav-list .drop1").click(function (e) {
       stopBubble(e);
       var tlis = $(this).parent("li");
       var bis = $(tlis).siblings("li");

       $(tlis).addClass("on").siblings("li").removeClass("on").find("li").removeClass("on");


       $(".nav-list li.on").siblings("li").find(".drop1").show();
       $(".nav-list li.on").siblings("li").find(".drop2").hide();
       $(".nav-list li.on").siblings("li").find(".drop3").show();
       $(".nav-list li.on").siblings("li").find(".drop4").hide();
       $(bis).find("ul").slideUp(500);
       $(tlis).find("li").removeClass("on");


       $(tlis).children("ul").slideDown(500);
       $(tlis).find(".drop1").hide();
       $(tlis).find(".drop2").show();
   })

   $(".nav-list .drop2").click(function (e) {
       stopBubble(e);
       $(tlis).addClass("on").siblings("li").removeClass("on").find("li").removeClass("on");

       var tlis = $(this).parent("li");
       var bis = $(tlis).siblings("li");

       $(tlis).children("ul").slideUp(500);
       $(tlis).find(".drop1").show();
       $(tlis).find(".drop2").hide();
   })


   $(".nav-list .drop3").click(function (e) {
       stopBubble(e);
       $(this).siblings(".nav-level3").slideDown(500);
       $(this).hide();
       $(this).siblings(".drop4").show();
       $(this).parent().addClass("on1");
       $(this).parents("li").siblings().find("a").removeClass("on1");
   })
   $(".nav-list .drop4").click(function (e) {
       stopBubble(e);
       $(this).siblings(".nav-level3").slideUp(500);
       $(this).hide();
       $(this).siblings(".drop3").show();
       $(this).parent().removeClass("on1");
   })

$(".btn-nav").click(function(e){
	stopBubble(e);
	///alert("aa")
	$(".nav-list").find("ul").hide();
	$(".nav-list").find("li").removeClass("on");
	$(".nav-list").find("a").removeClass("on1");
	$(".nav-list").slideDown(500);
	$(this).hide();
	$(".btn-nav2").show();
})
$(".btn-nav2").click(function(e){
	stopBubble(e);
	$(".nav-list").find("ul").hide();
	$(".nav-list").find(".drop1").show();
	$(".nav-list").find(".drop2").hide();
	$(".nav-list").find(".drop3").show();
	$(".nav-list").find(".drop4").hide();
	$(".nav-list").find("li").removeClass("on");
	$(".nav-list").slideUp(500);
	$(this).hide();
	$(".btn-nav").show();
})

$(".nav-list").click(function(e){
	stopBubble(e);
})

//搜索框

$(".search").click(function(e){
	$(".search-box").show()
})
$(".search").click(function(event){
	event.stopPropagation();
});
$(document).click(function(e){ 
	var target = $(e.target); 
	if(target.closest(".search-box").length == 0){ 
	$(".search-box").hide(); 
	} 
})


//三级下拉
	$('.nav-main span').click(function () {
        $(".nav-sub").slideToggle();
        $(this).toggleClass("on");	
   });


//弹出层	
   $('.visual-lists li').click(function () {
      $(".pop-box").animate({top:"0"},500);
      $("body").css("overflow-y","hidden");
      var x = $(this).index();
      var ww = parseInt($(".ban-bd3 li").width());
      var left = ww * (-1) * (x+1);
      $(".ban-bd3 ul").css("left",left+"px") ;

      var vv = parseInt($(".ban-bd4 li").width());
      var left1 = vv * (-1) * (x+1);
      $(".ban-bd4 ul").css("transform","translate("+left1+"px, 0px)");
      
   });


//弹出层1
	
   $('.sou').click(function () {

       //code by sytree 20160626 begin
       $("#citypic").html(citypicHTML);

       $("#bcity").html($("#seachcity").val());
       $("#scity").html($("#seachcity").val());

       $.ajax({
           type: "Get",
           url: "/case/getpic",
           data: "city=" + $("#seachcity").val(),
           success: function (rd) {
               if (rd.Data.length > 0) {
                   bpic = "";
                   bpic_pre = "";
                   spic = "";
                   for (i = 0; i < rd.Data.length; i++)
                   {
                       if (rd.Data[i].bpic != null)
                       {
                           bpic = bpic+"<li><img src=\""+rd.Data[i].bpic+"\"></li>"
                       }
                       if (rd.Data[i].bpic_pre != null) {
                           bpic_pre = bpic_pre + "<li><img src=\"" + rd.Data[i].bpic_pre + "\"></li>"
                       }
                       if (rd.Data[i].spic != null) {
                           spic = spic + "<li><img src=\"" + rd.Data[i].spic + "\"></li>"
                       }
                   }
                   $("#bpic").html(bpic);
                   $("#bpic_pre").html(bpic_pre);
                   

                   jQuery(".banner1").slide({
                       titCell: ".ban-hd1 li",
                       mainCell: ".ban-bd1 ul",
                       effect: "leftLoop",
                       trigger: "click",
                       autoPlay: true,
                       interTime: 5000,
                       delayTime: 1000,
                       startFun: function (i, c) {
                           //控制小图自动翻页
                           if (i == 0) { jQuery(".hd-box .prev1").click() } else if (i % 5 == 0) { jQuery(".hd-box .next1").click() }
                           $(".pageState1").text(+(i + 1) + "/" + c + "\r\n")

                       }

                   });
                   jQuery(".hd-box").slide({
                       mainCell: ".ban-hd1 ul",
                       vis: 5,
                       effect: "left",
                       autoPage: true,
                       prevCell: ".prev1",
                       nextCell: ".next1",
                   });


                   $("#spic").html(spic);
                   TouchSlide({
                       slideCell: "#banner2",
                       mainCell: ".ban-bd2 ul",
                       titCell: ".ban-hd2 li",
                       effect: "leftLoop",
                       autoPlay: true,
                       interTime: 5000,
                       delayTime: 1000,
                       startFun: function (i, c) {
                           $(".pageState2").text(+(i + 1) + "/" + c + "\r\n")
                       }
                   });


                   $(".pop-box").animate({ top: "0" }, 500);
                   $("body").css("overflow-y", "hidden");

                   $('.pop-box').click(function () {
                       $(".pop-box").animate({ top: "-100%" }, 500);
                       $("body").css("overflow-y", "auto");
                   });
                   $(".banner1 , .banner2, .banner3 , .banner4").click(function (e) {
                       stopBubble(e);
                   })

                   $('.banner1-close').click(function () {
                       $(".pop-box").animate({ top: "-100%" }, 500);
                       $("body").css("overflow-y", "auto");
                   });
                   $('.banner2-close').click(function () {
                       $(".pop-box").animate({ top: "-100%" }, 500);
                       $("body").css("overflow-y", "auto");
                   });
               }
           },
           error: function (XMLHttpRequest, textStatus, errorThrown) {
               
           }
       });
       //code by sytree 20160626 end
   });

  

   $('.pop-box').click(function () {
      $(".pop-box").animate({top:"-100%"},500);
      $("body").css("overflow-y","auto");
   });
   $(".banner1 , .banner2, .banner3 , .banner4").click(function(e){
		stopBubble(e);
   })

    $('.banner1-close').click(function () {
      $(".pop-box").animate({top:"-100%"},500);
      $("body").css("overflow-y","auto");
   });
    $('.banner2-close').click(function () {
      $(".pop-box").animate({top:"-100%"},500);
      $("body").css("overflow-y","auto");
   });


//向右边距
$(".visual-list ul li:nth-child(3n)").css("margin-right","0");

$(".visual-lists ul li:nth-child(3n)").css("margin-right","0");

$(".message ul li:nth-child(2n)").css("margin-right","0");

//向右边距
$(".mark-list ul li:odd").css("margin-right","0");

//经过
$(".n1-1").hover(function(){
	$(".n1").addClass("on");
	},function(){
	$(".n1").removeClass("on");
}); 

$(".n1-1").hover(function(){
	$(".p1").show();
	},function(){
	$(".p1").hide();
}); 
$(".n2").hover(function(){
	$(".p2").show();
	},function(){
	$(".p2").hide();
}); 
$(".n3").hover(function(){
	$(".p3").show();
	},function(){
	$(".p3").hide();
}); 
$(".n4").hover(function(){
	$(".p4").show();
	},function(){
	$(".p4").hide();
}); 
$(".n5").hover(function(){
	$(".p5").show();
	},function(){
	$(".p5").hide();
}); 
$(".n6").hover(function(){
	$(".p6").show();
	},function(){
	$(".p6").hide();
	});

//code by sytree 20160626 begin
$("#pcsch_btn").click(function (e) {
    window.location = "/news_list?newskeyword=" + $("#pcsch_input").val();
})
$("#ipadsch_btn").click(function (e) {
    window.location = "/news_list?newskeyword=" + $("#ipadsch_input").val();
})
//code by sytree 20160626 begin


//对应图
$('.visual-lists li').click(function () {
    //var x = $(this).index();
   // $(".ban-hd3 li").index(x).addClass("on")..siblings().removeClass("on");
 });
