$(function() {

    //slider
    $('.promo-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
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