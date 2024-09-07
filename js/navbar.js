// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
	'use strict'; // use strict mode
	$(document).ready(function() {
		// Lấy đường dẫn hiện tại
		const url = window.location.href;
		const path = url.substring(url.lastIndexOf('/') + 1);
	  
		// Bắt sự kiện khi nút "Tiếng Việt" được nhấn
		$('.lang.ivn').on('click', function() {
		  	// window.location.href = "/tuyendung.html";
			//localStorage.setItem("lang", "vn");
		});
	  
		// Bắt sự kiện khi nút "English" được nhấn
		$('.lang.ien').on('click', function() {
			// window.location.href = "career.html";
			//localStorage.setItem("lang", "en");
		});
	  });
	  
	  
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
	
	//--------------------------------------------------------------
});

