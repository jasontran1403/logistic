// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// by ExoTheme 2015
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
jQuery(document).ready(function () {
	'use strict'; // use strict mode
	$(document).ready(function() {
		// Lấy đường dẫn hiện tại
		const path = window.location.href;
	  
		// Hàm để cập nhật tham số ngôn ngữ trong URL
		function updateLanguageInPath(lang) {
		  const regex = /([?&])lang=[^&]*/;
		  
		  if (path.match(regex)) {
			// Nếu đã có tham số ?lang=, thay thế bằng giá trị mới
			return path.replace(regex, `$1lang=${lang}`);
		  } else {
			// Nếu chưa có ?lang=, thêm nó vào cuối URL
			const separator = path.includes('?') ? '&' : '?';
			return `${path}${separator}lang=${lang}`;
		  }
		}
	  
		// Bắt sự kiện khi nút "Tiếng Việt" được nhấn
		$('.lang.ivn').on('click', function() {
		  const newUrl = updateLanguageInPath('vi');
		  window.location.href = newUrl;
		});
	  
		// Bắt sự kiện khi nút "English" được nhấn
		$('.lang.ien').on('click', function() {
		  const newUrl = updateLanguageInPath('en');
		  window.location.href = newUrl;
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

