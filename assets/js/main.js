$(function() {

    //PROMO slider
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
    });

     //BRAND slider
     $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
        
    });

    //menu
    $('.mobile-btn').on("click", function() {
        $('.mobile-btn').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    });

    //accordion
    $(".faq__header").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("faq__header--active")) {
			$(".faq__content").slideDown(800);
			$(".faq__header").removeClass("faq__header--active");
		}

		$this.toggleClass("faq__header--active");
		$this.next().slideToggle();
	});

    //step 1
    $('.card-step--first .card-step-btn').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //step 2
    $('.card-step--second .card-step-btn').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //step 3
    $('.card-step--third .card-step-btn').on('click', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });


    //popup
    $('.choose-modal-toggle').on('click', function(e) {
        console.log('ffff')
        e.preventDefault();
        $('.choose-design-modal').toggleClass('is-visible');
        $('body').toggleClass('active');
    });



});