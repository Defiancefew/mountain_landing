$(document).ready(function() {
	
//Animate
(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "70%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);


// $(".").animated("fadeIn","fadeOut");




// Stellar
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function(){
if( !isMobile.any()){
    $.stellar({
    	verticalOffset: 350
    });

    $(".header__jumbotron").animated("fadeInLeft", "fadeInRight");

		$(".journal__tile-img").animated("fadeInLeft", null);
		$(".journal__tile-img--1").animated("fadeInLeft", null);
		$(".journal__tile-img--2").animated("fadeInLeft", null);
		
		
		$(".gallery__block--1").animated("fadeInDown", "fadeInOut");
		$(".gallery__block--2").animated("fadeInUp", "fadeInOut");
		$(".gallery__block--3").animated("fadeInDown", "fadeInOut");
		
		$(".clients__left").animated("fadeInLeft", "fadeInOut");
		$(".clients__right").animated("fadeInRight", "fadeInOut");
		$(".clients__form-wrapper").animated("fadeIn", "fadeOut");
    }

});
// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
// Отмена перетаскивания изображений
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
// Preloader
$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

// Кнопка меню
var link = document.querySelector(".header__menu");
var popup = document.querySelector(".header__list");
var form = document.querySelector(".form__wrapper")
link.addEventListener("click", function(){
popup.classList.toggle("hidden");
});

var body = document.querySelector("header")
var mq = window.matchMedia("screen and (max-width: 992px)");
if (window.matchMedia("(min-width: 992px)").matches) {
	popup.classList.remove("hidden");
}
else {
	popup.classList.add("hidden");
}

