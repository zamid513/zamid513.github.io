$(function(){

	"use strict";

	$('.title_box').click(function(){

		$(this).toggleClass('open');
		$(this).next('.list_link').toggleClass('open');

	});

	$('#slider_price').slider({
		max: 1000,
		min: 0,
		range: true,
		values: [190,728],
		slide: function( event, ui ) {
			$('input[name="minPrice"]').val( '$' + ui.values[0] );
			$('input[name="maxPrice"]').val( '$' + ui.values[1] );
		}

	});

	$('input[name="minPrice"]').val( '$' + 
	$('#slider_price').slider('values',0) );
	$('input[name="maxPrice"]').val( '$' +
	$('#slider_price').slider('values',1) );

	$('#card, .title_cart').click(function(){
		$('#cart_box').toggleClass('open');
	});

	$('#sign').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#close_mod, #black_fill').click(function(){
		$('#black_fill').toggleClass('open');
		$('#modal').toggleClass('open');
	});

	$('#search_botton').click(function(){
		$('#search_panel').toggleClass('open');
	});

	$('#load_more').click(function(event){
		event.preventDefault();
		$('.list_product').append('<a href="#" class="product"><div class="img_product"><img src="img/04.png" alt=""></div><h2>Our Legacy Splash Mid Sleeve Tee</h2><p>Black Grey Plants</p><span class="price">$90</span></a><a href="#" class="product"><div class="img_product"><img src="img/07.png" alt=""></div><h2>Our Legacy Six Shirt</h2><p>Raster Grey</p><span class="price">$150</span></a><a href="#" class="product"><div class="img_product"><img src="img/06.png" alt=""></div><h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><span class="price">$320</span></a>');
	});


});


