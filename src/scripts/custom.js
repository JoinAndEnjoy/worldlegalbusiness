$( document ).ready(function() {
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  ); 
  wow.init();

  fadeOutTransition();

});

$("a[href^='http://']").attr("target","_blank");
$("a[href^='https://']").attr("target","_blank");


$(".service").click(function(event){
  event.preventDefault();
  $this = $(this);
  fadeInTransition().done(function(){
    location.href = $this.attr('href');
  });
});

$("#contact-btn").click(function(event){
  event.preventDefault();
  $this = $(this);
  fadeInTransition().done(function(){
    location.href = $this.attr('href');
  });
});

$(".nav a").click(function(){

  closeNav();
});


$("#open-nav").click(function(event){
  event.preventDefault();
  $(".nav").css({
    opacity:0,
    visibility:"visible"
  });
  $(".nav").animate({
    opacity:1
  },500,function(){

    $(".nav-wrapper a").css({
      transform:"translateY(-10px)",
      opacity: 1
    });

  });

});

$("#close-nav").click(function(event){
  event.preventDefault();
  closeNav();
});

function closeNav(){
  $(".nav").animate({
    opacity:0
  },500,function(){
    $(this).css("visibility","hidden");
    $(".nav-wrapper a").css({
      transform:"translateY(10px)",
      opacity: 0
    });
  });
}

function changeHamburguerColor(){
  $(window).scrollTop(1);

  $(window).scroll(function(){
    var bars = $(".fa-bars");
    var top = bars.offset().top;
    
    if ($("#hero").length){ //Check if in home site
      var info = $(".information").offset().top;
      var subinformation = $(".subinformation").offset().top;
      var our_services = $("#our-services").offset().top;
      if($( window ).width() < 1024){ //depends on whether its mobile or not
        var light_service = $(".service:nth-of-type(5)").offset().top;

      }else{
        var light_service = $(".service:nth-of-type(7)").offset().top;

      }
      var dark_service = $(".service:nth-of-type(4)").offset().top;
      var footer = $("#footer").offset().top;
      var credits = $("#credits").offset().top;
      if(top < info){
        bars.css("color","white");
      }else if(top < subinformation){
        bars.css("color","#1d1d1d");
      }else if(top < our_services){
        bars.css("color","white");
      }else if(top < dark_service){
        bars.css("color","#1d1d1d");
      }else if(top < light_service){
        bars.css("color","white");
      }else if(top < footer){
        bars.css("color","#1d1d1d");
      }else if(top < credits){
        bars.css("color","white");
      }else{
        bars.css("color","#1d1d1d");
      }
    }else if( $("#service").length ) { //Check if in service site
      var service = $("#service .right").offset().top;
      if(top < service){
        bars.css("color","white");
      }else{
        bars.css("color","#1d1d1d");
      }
    }else if( $("#contact").length ) { //Check if in service site
      var form = $("#contact .right").offset().top;
      if(top < form){
        bars.css("color","white");
      }else{
        bars.css("color","#1d1d1d");
      }
    }
    

    
  });
}

changeHamburguerColor();

function fadeInTransition(){
  var r = $.Deferred();
  $(".transition").css({opacity:0, visibility: "visible"}).animate({
    opacity: 1
  }, 1000,function(){
    r.resolve();
  });
  return r;
}

function fadeOutTransition(){
  var r = $.Deferred();
  $(".transition").animate({
    opacity: 0
  }, 2000,function(){
    $(".transition").css("visibility", "hidden")
  });
  return r;
}

$("#know-more-btn").click(function(event){
  goToID("about",event);
});

$("#see-services-btn").click(function(event){
  goToID("our-services",event);
});

$(".person").click(function(event){
  $(".person").removeClass("active");
  $(this).addClass("active");
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   goToID("img-person",event);
 }

});

$("#angela").click(function(){
  $(".img-wrapper").css("background","url(images/team-1.jpg) no-repeat center center");
  $(".description h3").html("Ángela Bejarano Daza");
  $(".description p").removeClass("active");
  $("#descr-angela").addClass("active");
});
$("#camilo").click(function(){
  $(".img-wrapper").css("background","url(images/team-2.jpg) no-repeat center center");
  $(".description h3").html("Camilo Ossa Bocanegra");
  $(".description p").removeClass("active");
  $("#descr-camilo").addClass("active");
});
$("#carlos").click(function(){
  $(".img-wrapper").css("background","url(images/team-3.jpg) no-repeat center center");
  $(".description h3").html("Carlos Ossa Hernández");
  $(".description p").removeClass("active");
  $("#descr-carlos").addClass("active");
});
$("#claudia").click(function(){
  $(".img-wrapper").css("background","url(images/team-4.jpg) no-repeat center center");
  $(".description h3").html("Claudia Parra Gutierrez");
  $(".description p").removeClass("active");
  $("#descr-claudia").addClass("active");
});








