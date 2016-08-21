$(document).ready(function() {
	// TOGGLE BUTTON
	$('[data-class="toggle"]').click(function(){
		$(this).toggleClass('checked')
	});


	// OFFCANVAS
	function openOffcanvas($element) {
		$element.addClass('open-offcanvas');
	}

	function hideOffcanvas($element) {
		$element.removeClass('open-offcanvas');
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
		$('html, body').on('swiperight', function(){
			openOffcanvas($('html'));
		});

		$('html, body').on('swipeleft', function(){
			hideOffcanvas($('html'));
		});

		$('.range-input').on('swipeleft swiperight', function(e){
			return false;
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 80) {
				$('.top-header').addClass('fixed');
			} else {
				$('.top-header').removeClass('fixed');
			};
		});
	};
});