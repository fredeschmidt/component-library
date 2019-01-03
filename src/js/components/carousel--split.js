

$(function () {

    if (!$('.owl-carousel--split').length) {
        return;
    }

    // data-hash to each slide (begge slides, da den er delt i to)
    var owlCarousel = $('.owl-carousel--split');

    $(owlCarousel).each(function( index, carousel ) {
        var counter = 0;
        var slides = $(carousel).find('.item');

        $(slides).each(function( index, slide ) {
            counter++;
            console.log(counter + " slides")
            $(slide).attr('data-hash', 'slide-'+counter);
        });
    });


    // url with data-hash to each slide (navigationen)
    var owl1 = $('.owl-carousel--split.owl-1');

    $(owl1).each(function( index, carousel ) {
        var counter = 0;
        var slides = $(carousel).find('.item');

        $(slides).each(function( index, slide ) {
            counter++;

            // controller
            var controller = $('.carousel--split .carousel').find('.carousel_content_control');
            var url = '<a class="url" href="#slide-'+counter+'">0'+counter+'</a>'
            $(controller).append(url);

            // ghost typing id
            var ghostType = $(slide).find('h2');
            $(ghostType).attr('data-ghost', 'ghost-'+counter);

            // IF CURRENT SLIDE ghost type

            // ghost typing value
            var ghostText = $("[data-ghost='ghost-"+counter+"']").text();
            $("[data-ghost='ghost-"+counter+"']").ghosttyper({
                messages: [''+ghostText+''],
                // animation speed for typing effect
                timeWrite: 40,
                // animation speed for deleting effect
                timeDelete: 20,
                // animation delay
                timePause: 10000,
                repeat: true
            });
        });
    });


    // add .active to first url
    var firstUrl = $('.carousel--split .url').first().addClass('active');



    // owl
    $(".owl-carousel--split.owl-1").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '#slide-1'
    });


    $(".owl-carousel--split.owl-2").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '#slide-1'
    });


    $('.carousel--split .url').click(function() {
        $('.url').removeClass("active");
        $(this).addClass('active');
    });

});