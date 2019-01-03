
$(function () {

	if (!$('.toggle-table').length) {
        return;
    }

	// toggle open dropdown
	$('.toggle-table').click(function() {

		// close all tables
		$('.table-inner').slideUp();

		// close all arrows
		$('.table-dropdown').find('i.fas').removeClass('fa-chevron-up');
		$('.table-dropdown').find('i.fas').addClass('fa-chevron-down');


		// toggle this table and arrow
		var arrow = $(this).find('i.fas');
		var tableInner = $(this).parents('.table-outer').next('.table-inner');

		if($(tableInner).css('display') == 'none'){
			$(tableInner).slideDown();
			$(arrow).removeClass('fa-chevron-down');
			$(arrow).addClass('fa-chevron-up');
		}else{
			$(tableInner).slideUp();
			$(arrow).removeClass('fa-chevron-up');
			$(arrow).addClass('fa-chevron-down');
		}
	
	});
});
