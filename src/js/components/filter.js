
$(function () {

	if (!$('.filter').length) {
        return;
    }

	var filterComponent = $('.filter');
	var labels = $('.filter').find('.filter_buttons label');

	// filter buttons
	var filterButtons = $(filterComponent).find('.filter_buttons input[type="radio"]');
	$(filterButtons).each(function(i, btn){

		$(btn).click(function() {
			var filterVal = $(this).val();

			// color out not choosed buttons
			$(labels).addClass('not-choosed');
			var label = $(this).parent('label');
			$(label).removeClass('not-choosed');

			// options
			var filterOptions = $(filterComponent).find('.filter_options a');
			$(filterOptions).each(function(i, option){

				var optionVal = $(option).attr('data-filter');

				if (filterVal == "alle"){
					$(labels).removeClass('not-choosed');
					$(filterOptions).removeClass('disabled');
				}
				else if(filterVal != optionVal){
					$(option).attr('data-filter', optionVal).addClass('disabled');
				}
				else{
					$(option).removeClass('disabled');
				}


			});
		});
	});
});