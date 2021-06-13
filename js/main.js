// BOTTOM TO TOP Button JS CODE
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#bottom-to-top").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("#bottom-to-top").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
  });
  $("#bottom-to-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});
//slider for milliondollar
$('.million-slice .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

// Mix It up js code On Shockingsale Page
$("document").ready(function () {
  var mixer = mixitup(".mixit");
});

// Mix It up js code On category Page
$("document").ready(function () {
  var mixer = mixitup(".image-mixer");
});

// Mix It up js code On Blog Page
$("document").ready(function () {
  var mixer = mixitup(".news-mixer");
}); 


//slider2 for milliondollar
$('.million-slider2 .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
//Owl-carousel For Header Page

$(".header-slider .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});

$("document").ready(function () {



  //Owl-carousel For Header Page

  $(".mart-slider .carousel .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      }
    }
  });

   //Owl-carousel For CATEGORIES Page

 $(".categories .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});
 //Owl-carousel For Header Shocking Page

 $(".shocking-slider .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});

//Owl-carousel For SHOPEE MALL left part Page

$(".left .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: false,
  nav:true,
  navText: ['<i class="fa fa-angle-left"></i>' ,'<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});

//Owl-carousel For SHOPEE MALL right part Page

$(".right .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 1,
    }
  }
});

//Owl-carousel For Top products Page

$(".top-pproducts .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: false,
  nav:true,
  navText: ['<i class="fa fa-angle-left"></i>' ,'<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    }
  }
});



// Mix It up js code On Shockingsale Page
$("document").ready(function () {
  var mixer = mixitup(".mixit");
});

// Mix It up js code On category Page
$("document").ready(function () {
  var mixer = mixitup(".image-mixer");
});



$(".similar .carousel .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  nav:true,
  navText: ['<i class="fa fa-angle-left"></i>' ,'<i class="fa fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 5,
    }
  }
});

  });


  



 //active class
$(document).on('click','ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')

});

  /*Start Quantity increase & decrease Part*/
  document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

  var valueCount
  
  //plus button
  document.querySelector(".plus-btn").addEventListener("click", function(){

    valueCount = document.getElementById("quantity").value;

    valueCount++;

    document.getElementById("quantity").value = valueCount;
    if (valueCount > 1){
      document.querySelector(".minus-btn").removeAttribute("disabled");

      document.querySelector(".minus-btn").classList.remove("disabled");
    }
    });

  //minus button
  document.querySelector(".minus-btn").addEventListener("click", function(){

    valueCount = document.getElementById("quantity").value;

    valueCount--;

    document.getElementById("quantity").value = valueCount;

    if (valueCount == 1){
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
    });


  /*End Quantity increase & decrease Part*/

  /*Start Product Rating Part show hide */

  var a;
  function show_hide(){
    if(a==1)
    {
      document.getElementById("image").style.display="inline";
      return a=0;
    }
    else
    {
      document.getElementById("image").style.display="none";
      return a=1;
    }
  }

  /*Start Similar Product Part */

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/*Start Mart Header Slider */
$(document).ready(function(){
  $('.gallerys').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled:true
    }

  });
});


