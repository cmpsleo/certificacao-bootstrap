$(document).ready(function() {
	function openOffcanvas($element) {
		$element.addClass("open-offcanvas");
	}

	function hideOffcanvas($element) {
		$element.removeClass("open-offcanvas");
	}

	$(".btn-offcanvas").on('click', function(){
		openOffcanvas($('html'));
	});

	// $("html, body").on("swiperight", function(){
	// 	openOffcanvas($('html'));
	// });

	// $("html, body").on("swipeleft", function(){
	// 	hideOffcanvas($('html'));
	// });

	$("html, body").on("click", function(e){
		if(this === e.target)
		hideOffcanvas($(this));
	});
});