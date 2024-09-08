// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
	'use strict'; // use strict mode
	$(document).ready(function() {
		// Lấy đường dẫn hiện tại
		const url = window.location.href;
		const path = url.substring(url.lastIndexOf('/') + 1);
		const validVnUrl = ["index.html", "haiquan.html", "hangkhong.html", "noidia.html", "duongbien.html", "chuyenphatnhanh.html", "dvkhac.html", "kichthuoc.html", "incoterms-2000.html", "incoterms-2010.html", "incoterms-2022.html", "chuyendoi.html", "cangsanbay.html", "tudien.html", "tygia.html",  "tuyendung.html"];
		const validEnUrl = ["index_en.html", "customs.html", "air.html", "domestic.html", "sea.html", "fastdelivery.html", "other-service.html", "container-size.html", "incoterms-2000-enen.html", "incoterms-2010-en.html", "incoterms-2022-en.html", "convert-unit.html", "list-port.html", "dictionary.html", "exchange.html",  "career.html"];
		let convertPath = null;
		
		if (path === "") {
			$('.ivn').attr('href', `/index.html`);
			$('.ien').attr('href', `/index_en.html`);
		} else {
			if (validVnUrl.includes(path)) {
				convertPath = getCorrespondingUrl(path, validVnUrl, validEnUrl);
				$('.ivn').attr('href', `/${path}`);
				$('.ien').attr('href', `/${convertPath}`);
			} else {
				
				convertPath = getCorrespondingUrl(path, validEnUrl, validVnUrl);
				$('.ien').attr('href', `/${path}`);
				$('.ivn').attr('href', `/${convertPath}`);
			}
		}
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
	// Hàm để lấy phần tử tương ứng từ mảng khác
	function getCorrespondingUrl(path, sourceUrls, targetUrls) {
	const index = sourceUrls.indexOf(path);
	return index !== -1 ? targetUrls[index] : path;
	}
});

