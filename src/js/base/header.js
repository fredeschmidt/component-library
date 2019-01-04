
$(function () {

    function openSubmenu(){
        var menu = $('.header').find('.menu--js .nav-link');

        $(menu).each(function(i, item){

            $(item).click(function() {

                var li = $(this).parent('li');

                $(menu).removeClass('clicked');

                if ($(li).hasClass('open')) {  

                    // close content
                    $(li).removeClass('open');
                    $(li).find('i').removeClass('fa-chevron-up');
                    $(li).find('i').addClass('fa-chevron-down');

                    $(li).find('.nav-link').removeClass('clicked');

                    if(!$(li).hasClass('open')){
                        $(li).find('.submenu').slideUp();
                    }

                }else{

                    // close other content
                    $(menu).parent('li').removeClass('open');
                    if(!$(menu).parent('li').hasClass('open')){
                        $(menu).parent('li').find('.submenu').slideUp();
                        $(menu).parent('li').find('i').removeClass('fa-chevron-up');
                        $(menu).parent('li').find('i').addClass('fa-chevron-down');
                    }

                    // open content
                    $(li).addClass('open');
                    $(li).find('i').removeClass('fa-chevron-down');
                    $(li).find('i').addClass('fa-chevron-up');

                    $(li).find('.nav-link').addClass('clicked');

                    if($(li).hasClass('open')){
                        $(li).find('.submenu').slideDown();
                    }
                }

            });
        });
    }


    function openMenuSmallScreen(){

        var checkbox = $('.header').find('input[type="checkbox"]');
        // for at skjule help button
        // for at gøre resten af siden clickable på lille skaerm
        $(checkbox).click(function() {
            if ($(checkbox).is(':checked')) {
                $('.btn--help').css("z-index", "0");
                $('#menu-toggle').css("z-index", "2");
            }else{
                $('.btn--help').css("z-index", "2");
                setTimeout( function(){ 
                    $('#menu-toggle').css("z-index", "0");
                }, 500 );
            }
        });
    }

    openSubmenu();
    openMenuSmallScreen();

});