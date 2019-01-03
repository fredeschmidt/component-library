

$(function () {

    if (!$('.countdown--date').length) {
        return;
    }

    $(".countdown--date").each(function(index, element) {


        var date = $(element).find('.countdown-frame').data('date');
        var end = new Date(date);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;

            if (distance < 0) {

                $(element).find('.countdown-frame h2').addClass('disable');
                $(element).find('.countdown-frame p').addClass('disable');
                $(element).find('.counter-content').empty();
                $(element).find('.countdown-frame .timesout-message').show();
                

                return;
            }

            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            $(element).find('#days-counter').html(days);
            $(element).find('#hr-counter').html(hours);
            $(element).find('#min-counter').html(minutes);
            $(element).find('#sec-counter').html(seconds);

            if(days == 0){
                $(element).find('#days-element').addClass('disable');
                $(element).find('#day-text p').html($('#day-text').data('more'));

                if(hours == 0){
                    $(element).find('#hr-element').addClass('disable');
                    $(element).find('#hr-text p').html($('#hr-text').data('more'));

                    if(minutes == 0){
                        $(element).find('#min-element').addClass('disable');
                        $(element).find('#min-text p').html($('#min-text').data('more'));
                    }
                }
            }else if(days == 1){
                $(element).find('#day-text p').html($('#day-text').data('single'));
            }else{
                $(element).find('#day-text p').html($('#day-text').data('more'));
            }

            if(hours == 1){
               $(element).find('#hr-text p').html($('#hr-text').data('single'));
            }else{
                $(element).find('#hr-text p').html($('#hr-text').data('more'));
            }

            if(minutes == 1){
               $(element).find('#min-text p').html($('#min-text').data('single'));
            }else{
                $(element).find('#min-text p').html($('#min-text').data('more'));
            }

            if(seconds == 1){
               $(element).find('#sec-text p').html($('#sec-text').data('single'));
            }else{
                $(element).find('#sec-text p').html($('#sec-text').data('more'));
            }

        }

        timer = setInterval(showRemaining, 1000);
    });

});
