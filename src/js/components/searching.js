
$(function () {

    if (!$('.search').length) {
        return;
    }



    // ÍF MORE TABS
    var tabs = $('.search').find('.tabmodule__toggle');
    var tabmodule = $('.search').find('.tabmodule');
    
    if($(tabs).length > 1){
        $(tabmodule).addClass('split');

        if($(tabs).length == 2){
            $(tabmodule).addClass('split--2');
        }else if($(tabs).length == 3){
            $(tabmodule).addClass('split--3');
        }else if($(tabs).length == 4){
            $(tabmodule).addClass('split--4');
        }
    }


    // INSERT CONTENT
    $(window).on("load resize",function(){
        var largeScreen = $(window).width() >= 768;
        if (largeScreen) {
            $('.search').addClass('notStacked');
        }

        if($('.search').hasClass('notStacked')){
            var contentOnLarge = $('.tabmodule__content');
            $(contentOnLarge).prependTo("#all-content-largescreen");
        }else{
            $('.accordion').css("margin-bottom", "0");
        }
    });


    // CLOSE AND OPEN TABS
    var closeTabs = $('.tabmodule__toggle');
    
    $(closeTabs).click(function () {
        var tab_id = $(this).attr('data-tab');
        $(closeTabs).not('[data-tab='+tab_id+']').removeClass('current');
        $('.tab-content:not(#'+tab_id+')').removeClass('current');
        $(this).toggleClass('current');
        $("#" + tab_id).toggleClass('current');         
    })

    $(closeTabs).each(function (index, closeTab) {
        $(this).click(function() {
            if($(closeTab).hasClass('current')){
                $(this).prop( "checked", true );
            }else{
                $(this).prop( "checked", false );
            }
        });
    });


    // ADD TABS ID AND FOR
    var counter = 0;
    var tabs = $('.tabmodule').find('.tab');

    $(tabs).each(function (index, tab) {
        counter++;
        $(tab).find('input').attr('id', 'tab-' + counter);
        $(tab).find('label').attr('for', 'tab-' + counter);
    });
    








    
    // AJAX CALL TO JSON
    var keyId;
 
    // If only one accordion
    $('.tabmodule__label').click(function(){
        var content = $(this).next('.tabmodule__content');
        var accordion = $(content).find('.accordion');
        var countAccordionTabs = $(content).find('.accordion ul').children();

        if (countAccordionTabs.length == 1) {

            keyId = $(accordion).find('li').data('keyid');

            $.ajax({
                url: keyId,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    initialize(data);
                },
                error: function (x, y, z) {
                    console.log(x + '\n' + y + '\n' + z);
                }
            });

            var accordionLabel = $(accordion).find("label"); // hver label i accordion
            var initialize = function (jsonObj) {

                // CONTENT 
                var everyPage = jsonObj.Pages;

                // ACCORDION TO PAGES
                var pText = $(accordionLabel).next().find('p'); // dynamisk pages 
                $(pText).empty();

                // hver page
                for (var i = 0; i < everyPage.length; ++i) {
                    var title = everyPage[i].Title;
                    var link = everyPage[i].Link;

                    var links = '<a class="accordion-item page_link" href="' +
                        link +
                        '"><i class="icon-arrow_link"></i><span>' +
                        title +
                        '<span></a>';

                    $(links).each(function (index, link) {
                        $(link).appendTo(pText);
                    });
                }

                $(accordion).find('input').prop('checked', true);
            }
        }
    });


    // Get json on click on accordion tab
    $('.tabmodule__content').find('ul li').click(function(){
        keyId = $(this).data('keyid');

        $.ajax({
            url: keyId,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                initialize(data);
            },
            error: function (x, y, z) {
                console.log(x + '\n' + y + '\n' + z);
            }
        });

        var accordionLabel = $(this).find("label"); // hver label i accordion
        var initialize = function (jsonObj) {

            // CONTENT 
            var everyPage = jsonObj.Pages;

            // ACCORDION TO PAGES
            var pText = $(accordionLabel).next().find('p'); // dynamisk pages 
            $(pText).empty();

            // hver page
            for (var i = 0; i < everyPage.length; ++i) {
                var title = everyPage[i].Title;
                var link = everyPage[i].Link;

                var links = '<a class="accordion-item page_link" href="' +
                    link +
                    '"><i class="icon-arrow_link"></i><span>' +
                    title +
                    '<span></a>';

                $(links).each(function (index, link) {
                    $(link).appendTo(pText);
                });
            }
        }
    });


    // Get json on keyup search
    $("#search-input").keyup(function (event) {  
        keyId = $(this).data('keyid');
        $.ajax({
            url: keyId,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                initialize(data);
            },
            error: function (x, y, z) {
                console.log(x + '\n' + y + '\n' + z);
            }
        });

        var initialize = function (jsonObj) {

            // CONTENT 
            var everyPage = jsonObj.Pages;

            // SEARCH PAGES
            var pageTitle = "Title"; // titlen paa en page (pages findes i en accordion tab)
            var input = $("#search-input");
            var autocomplete = $('#search-autocomplete');
            $(autocomplete).empty();

            for (var i = 0; i < everyPage.length; ++i) {
                var pageTitle = everyPage[i].Title.toUpperCase();
                var filterVal = $(input).val().toUpperCase();

                if (pageTitle.indexOf(filterVal) > -1) {
                    if (input.val().length >= 2) {
                        $('.search-input-box').addClass('active');

                        var pageTitle = everyPage[i].Title;
                        var linkValue = everyPage[i].Link;
                        var titles = '<a href="' + linkValue + '">' + pageTitle + '</a>';

                        $(titles).each(function (index, title) {
                            $(title).appendTo(autocomplete);
                        });
                        
                        $('#search-autocomplete').css("display","block");
                        
                    } else if(input.val().length < 2){
                        $('.search-input-box').removeClass('active');
                        $('#search-autocomplete').css("display","none");
                    }
                }
            }

            $(document).click(function(event) { 
                if(!$(event.target).closest('#search-autocomplete').length) {
                    $('#search-autocomplete').css("display","none");
                }      
            })
        }
    });


    // Get json on alfabet
    $('.tabmodule').find('#alfabetisk').click(function(){
        keyId = $(this).data('keyid');
        $.ajax({
            url: keyId,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                initialize(data);
            },
            error: function (x, y, z) {
                console.log(x + '\n' + y + '\n' + z);
            }
        });

        var initialize = function (jsonObj) {

            // CONTENT 
            var everyPage = jsonObj.Pages;

            // ALFABET TO PAGES
            var alphabetValue = "Alphabet";
            var letter = $(".letters").find(".letter");

         

            // Hvert bogstav fra markup (hele alfabetet)
            for (var i = 0; i < letter.length; ++i) {
                for (var j = 0; j < everyPage.length; ++j) {
                    // Hvert bogstav fra json (forbogstav paa titler)
                    var title = everyPage[j].Title.toUpperCase();
                    var alphabetValue = title.charAt(0);
                    console.log(alphabetValue);
                    for (var k = 0; k < letter[i].textContent.length; k++) {
                        // If bogstav fra json matcher bogsatv fra markup, skal denne synligoeres
                        if (alphabetValue == letter[i].textContent.charAt(k)) {
                            $(letter[i]).addClass("shownLetters");
                        };
                    };
                }

                // Click paa synligt bogstav i markupen
                $(letter[i]).on('click touchstart', function(){

                    $(letter).removeClass('active');
                    $(this).addClass('active');

                    var letterVal = $(this).text().toUpperCase();
                    var letterArray;

                    if (letterVal == "VW") {
                        letterArray = ["V", "W"];
                    } else if (letterVal == "XYZ") {
                        letterArray = ["X", "Y", "Z"];
                    } else if (letterVal == "ÆØÅ") {
                        letterArray = ["Æ", "Ø", "Å"];
                    } else if (letterVal == "ALLE") {
                        letterArray = [
                            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                            "T", "U", "V", "W", "X", "Y", "Z", "Æ", "Ø", "Å"
                        ];
                    } else {
                        letterArray = [$(this).text()];
                    }

                    var thisContent = $('.tab_alphabet').find('p');
                    $(thisContent).empty();

                    for (var j = 0; j < everyPage.length; ++j) {
                        // Hvert bogstav fra json (forbogstav paa titler)
                        var title = everyPage[j].Title.toUpperCase();
                        var alphabetValue = title.charAt(0);
                        for (var k = 0; k < letterArray.length; k++) {
                            // Hvert bogstav som er samlet i array (alle klikbare bogstaver i markup)
                            var filterVal = letterArray[k].toUpperCase();
                            if (alphabetValue.indexOf(filterVal) > -1) {
                                var pageTitle = everyPage[j].Title;
                                var linkValue = everyPage[j].Link;
                                var links = '<a class="accordion-item page_link" href="' +
                                    linkValue +
                                    '"><i class="icon-arrow_link"></i><span>' +
                                    pageTitle +
                                    '<span></a>';

                                $(links).each(function (index, link) {
                                    $(link).appendTo(thisContent);
                                });
                            }
                        }
                    }
                });
            }
        }
    });     
});


