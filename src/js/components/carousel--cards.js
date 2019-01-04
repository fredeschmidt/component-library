

$(function () {

    if (!$('.owl-carousel--cards').length) {
        return;
    }

	$('.owl-carousel--cards').owlCarousel({
	    loop: false,
	    margin: 20,
	    dots: false,
        nav: true,
        center: false,
        navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
	    slideTransition: 'ease-in-out',
	    responsiveClass: true,
    	smartSpeed: 900,
        dragEndSpeed: 250,
        responsive: {
    	    // breakpoint from 0 up
    	    0 : {
    	        items: 1
    	    },
    	    // breakpoint from 768 up
    	    768 : {
    	        items: 2
    	    },
    	    // breakpoint from 768 up
    	    1024 : {
    	        items: 3
    	    },
    	    // breakpoint from 768 up
    	    1284 : {
    	        items: 5
    	    }
    	}
	});

});