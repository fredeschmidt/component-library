

// each tab
var accordions = $('.accordion-js');

$(accordions).each(function(i, accordion){

    var tabs = $(accordion).find('.tab');
    var counter = 0;
    var allInput = $(tabs).find('input');
    $(allInput).addClass('closed'); 


    $(tabs).each(function(i, tab){

        counter++;

        $(tab).find('input').attr('id', 'tab-'+counter+'');
        $(tab).find('label').attr('for', 'tab-'+counter+'');




        // Add 'current' to open tab
        var closeTabs = $(tab).find('input');

        $(closeTabs).click(function () {
            var tabId = $(this).attr('id');


            // action for all other than this
            if ($(allInput).hasClass('current')) {
                $(allInput).not('[id="'+tabId+'"]').removeClass('current');
                $(allInput).not('[id="'+tabId+'"]').addClass('closed');
            }

            if ($(allInput).not('[id="'+tabId+'"]').hasClass('closed')) {
                $(allInput).not('[id="'+tabId+'"]').prop('checked', false);
            }


            // action for this
            $(this).toggleClass('current');
            $(this).toggleClass('closed');

            if($(this).hasClass('current')){
                $(this).prop('checked', true);
            }else{
                $(this).prop('checked', false);
            }


        });
    });
});

