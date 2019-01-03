
$(function () {

    if (!$('.countdown--number').length) {
        return;
    }

    var countFrom = $('.countdown--number').find('span').attr("data-count-from");
    var countTo = $('.countdown--number').find('span').attr("data-count-to");
    countTo = countTo - 1;

    var timer = setInterval(function() {
        $('.countdown_counter_text span').animate({
        }, 70, function() {
            $('.countdown_counter_text span').text(countFrom--);
        })

        if (countFrom <= countTo) {
            clearInterval(timer);
        }
    }, 70);

});