// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
	'use strict'; // use strict mode

	var $header = jQuery("header"),
		$clone = $header.before($header.clone().addClass("clone"));
	jQuery(window).on("scroll", function () {
		var fromTop = jQuery(window).scrollTop();
		jQuery("body").toggleClass("down", (fromTop > 240));
	});

	// mobile navigation
	var mb;
	jQuery('#menu-btn').on( "click", function() {
		var iteration = $(this).data('iteration') || 1;
		switch (iteration) {
			case 1:
				jQuery('#mainmenu').show();
				jQuery('header').css("height", "auto");
				mb = 1;
				break;

			case 2:
				jQuery('#mainmenu').hide();
				jQuery('header').css("height", "80px");
				mb = 0;
				break;
		}
		iteration++;
		if (iteration > 2) iteration = 1;
		$(this).data('iteration', iteration);
	});
	//--------------------------------------------------------------
	var isRatio43 = 4/3;
	var isRatio34 = 3/4;
	auto_size( ".news-list .news-item .imgthumb", 0, isRatio34);
	fix_size(".idx-service .inner",0);
	//fix_size(".news-list .news-item",0);
	fix_size(".team-profile .text",0);
	//--------------------------------------------------------------
});

