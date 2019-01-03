
$(function () {

    // date picker
    var datePicker = $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        language: 'da-DK',
        format: 'dd.mm.yyyy',
        weekStart: 1,
        days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        daysShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        daysMin: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
        months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        defaultDate: null
    });

    // set current date
    datePicker.on('show.datepicker', function(e){
        var currentDate = $('[data-toggle="datepicker"]').datepicker('getDate', true);
        $('[data-toggle="datepicker"]').datepicker('setDate', currentDate);
    })

});