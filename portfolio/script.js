  $(document).ready(function() {

    $(".web-development").click(function(){
      $(".webDev").css({opacity:0.8});
      $(".news").css({opacity:0});
    });

    $(".graphic-design").click(function(){
      $(".news").css({opacity:0.8});
      $(".webDev").css({opacity:0});
    });

    $(".web-design").click(function(){
      $(".webDev").css({opacity:0});
      $(".news").css({opacity:0});
    })

    $(".show-everything").click(function(){
      $(".news").css({opacity:0.8});
      $(".webDev").css({opacity:0.8});
    });

});

//webDev - web development-blocks
//webDes - web design-bock
//news - newspaper-blocks
