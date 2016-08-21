$(document).ready(function() {
	// TOGGLE BUTTON
	$('[data-class="toggle"]').click(function(){
		$(this).toggleClass('checked')
	});


	// OFFCANVAS
	function openOffcanvas($element) {
		$element.addClass('open-offcanvas');
		$('html, body').addClass('no-overflow');
	}

	function hideOffcanvas($element) {
		$element.removeClass('open-offcanvas');
		$('html, body').removeClass('no-overflow');
	}

	$('[data-class="openmenu"]').on('click', function(){
		openOffcanvas($('html'));
	});

	$('html, body').on("click", function(e){
		if(this === e.target)
		hideOffcanvas($(this));
	});


	// DETECTANDO LARGURA DA VIEWPORT PARA REMOVER SWIPE
	if (jQuery(window).width() < 992) {
		// $('html, body').on('swiperight', function(){
		// 	openOffcanvas($('html'));
		// });

		// $('html, body').on('swipeleft', function(){
		// 	hideOffcanvas($('html'));
		// });

		// $('html, body').on('swipeleft swiperight', '[data-class="remove-swipe"]', function(e) {
		// 	e.stopImmediatePropagation();
		// 	e.preventDefault();
		// });
	};
});