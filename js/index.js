//滚动透明导航条
  $(window).scroll(function () {
        if ($(window).scrollTop() >50) {
           $(".header1").addClass("more"); 
           $(".head-sch input").addClass("more"); 
        } else {
          $(".header1").removeClass("more");
          $(".head-sch input").removeClass("more");
        }
    }); 


 //左右排列
 $(".visual-list .list:odd").css("float","right");