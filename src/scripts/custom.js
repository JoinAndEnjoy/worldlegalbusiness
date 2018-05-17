$(window).load(function() {
//$( document ).ready(function() {

 $(".my-loader").css("display","none");

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

  contact_form_validate();

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

var relativepath = "images";
var actual_url = window.location.href;
if(actual_url.indexOf("/en/") != -1||actual_url.indexOf("/es/") != -1){
  var relativepath = "../images";
}else{
  window.location.href = "es/index.html";
}

$("#angela").click(function(){
  $(".img-wrapper").css("background","url("+ relativepath+"/team-1.jpg) no-repeat center center");
  $(".description h3").html("Ángela Bejarano Daza");
  $(".description p").removeClass("active");
  $("#descr-angela").addClass("active");
});
$("#camilo").click(function(){
  $(".img-wrapper").css("background","url("+ relativepath+"/team-2.jpg) no-repeat center center");
  $(".description h3").html("Camilo Ossa Bocanegra - En receso por ocupar cargo público");
  $(".description p").removeClass("active");
  $("#descr-camilo").addClass("active");
});
$("#carlos").click(function(){
  $(".img-wrapper").css("background","url("+ relativepath+"/team-3.jpg) no-repeat center center");
  $(".description h3").html("Carlos Ossa Hernández");
  $(".description p").removeClass("active");
  $("#descr-carlos").addClass("active");
});
$("#natalia").click(function(){
  $(".img-wrapper").css("background","url("+ relativepath+"/team-4.jpg) no-repeat center center");
  $(".description h3").html("Natalia Arce Archbold");
  $(".description p").removeClass("active");
  $("#descr-natalia").addClass("active");
});



$(".sw-espanol").click(function(){
  var url_array = window.location.href.split("/");
  var length = url_array.length;
  var finalUrl = "../es/"+url_array[length-1];
  fadeInTransition().done(function(){
    window.location.href = finalUrl;
  });
});

$(".sw-english").click(function(){
  var url_array = window.location.href.split("/");
  var length = url_array.length;
  var finalUrl = "../en/"+url_array[length-1];
  fadeInTransition().done(function(){
    window.location.href = finalUrl;
  });
});

/* 
 * ----------------------------------------------------------
 * FUNCTIONS - Contact Validate
 * ----------------------------------------------------------
 */
 function contact_form_validate(t) {
  var e = void 0 !== t && t.length > 0 ? t : $("#contact-valid-form");
  e.each(function() {
    var t = $(this);
    t.find(".field-validation").each(function() {
      $(this).change(function() {
        if ($(this).siblings(".alert").remove().fadeOut("slow", function() {
          $(this).remove();
        }), "" !== $(this).val().trim()
          ) {
          var e = contact_field_validation(t, $(this));
          if (e.length > 0 && void 0 !== e[0].message && "" !== e[0].message && "success" !== e[0].message) {
            var i = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
            $(this).after(i), $(this).siblings(".alert").fadeIn("slow");
          }
        }
      })
    }), t.submit(function(e) {
      e.preventDefault(), $(this).find(".form-loader").fadeIn("slow");

      var i = $(this).attr("action");
      if (void 0 == i && "" == i)
        return !1;
      $(this).find(".alert").remove().fadeOut("fast", function() {
        $(this).remove();
      }), $(this).find(".alert-validate-form").fadeOut("fast", function() {
        $(this).empty();
      });
      var a = !1;
      return $(this).find(".field-validation").each(function() {
        var e = contact_field_validation(t, $(this));
        if (e.length > 0 && void 0 !== e[0].message && "" != e[0].message && "success" != e[0].message) {
          var i = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
          $(this).after(i), $(this).siblings(".alert").fadeIn(), a =! 0;

        }
      }), 1 == a ? ($(this).find(".form-loader").fadeOut("fast"), !1) : ($.ajax({
        type: "POST",
        url: i,
        data: $(this).serialize(),
        dataType: "json",
        success: function(e) {
          t.find(".form-loader").fadeOut("fast");
          var i = "1" == e.status ? !0 : !1, a = '<div class="alert ';
          a += 1 == i ? "success" : "error", a += '"><i class="fa fa-check-circle"></i> ' + e.text + '</div>', t.find(".alert-validate-form").html(a).fadeIn("fast", function() {
            $(this).delay(1e4).fadeOut("fast", function() {
                           // $(this).remove();
                         });
          }), 1 == i && t.find(".form-control").val("");
        },
        error: function() {
          t.find(".form-loader").fadeOut("fast");
          var e = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> An error occured. Please try again later.</div>';
          t.find(".alert-validate-form").html(e).fadeIn("fast");
        }
      }), void 0)
    })
})
}
function contact_field_validation(t, e) {
  if (void 0 !== t && t.length > 0) {
    var i = void 0 !== e && e.length > 0 ? e : t.find(".validate"), a = new Array;
    return i.each(function() {
      var t = $(this).attr("data-validation-type"), e = $(this).hasClass("required"), i = $(this).val().trim(), n = new Array;
      n.field_object = $(this), n.message = "success", 1 != e || "" != i && null !== i && void 0 !== i || (n.message = "Este campo es obligatorio"), "string" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^[a-z0-9 .\-]+$/i) && (n.message = "Caracteres inválidos encontrados.") : "email" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && (n.message = "Por favor ingrese un email válido.") : "phone" == t && "" != i && null !== i && void 0 !== i && null == i.match(/^\(?\+?[\d\(\-\s\)]+$/) && (n.message = "Caracteres inválidos encontrados."), a.push(n)
    }), a
  }
}
