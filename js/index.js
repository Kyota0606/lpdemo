$(function() {
	$('.use__slider-list').on('init', function(event, slick) {
	$('.count').text(slick.currentSlide + 1);
	$('.nocount').text(slick.slideCount);
	})
	.slick({
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.count').text(nextSlide + 1);
	});
});


$('.option__list').slick({
    slidesToShow:5,
	responsive:[{
		breakpoint:768,
		settings:{
			slidesToShow:3,
			slideToScroll:1
		}
	}]
});

//ハンバーガーの制御
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
ham.addEventListener('click',function(){
	ham.classList.toggle('active');
	nav.classList.toggle('active');
});
