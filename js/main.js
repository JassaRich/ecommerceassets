
//===== Preloader
window.onload = function () {
    window.setTimeout(fadeout, 200);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}


$(function() {
    
    "use strict";

    /*=============================================
    =                  Sticky                     =
    =============================================*/

	$(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    /*=====  End of Sticky  ======*/
    
    
    /*=============================================
    =            product quantity                =
    =============================================*/

	$('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
    
    /*=====  End of product quantity  ======*/
    
    
    
    /*=============================================
    =              Nice Select                    =
    =============================================*/

	$('select').niceSelect();
    
    /*=====  End of   ======*/    
    
    
		// ========= main-menu 7  activation
		let menuToggle7 = document.querySelector('.menu-style-7 .menu-toggle');
		let mainMenu7 = document.querySelector('.menu-style-7 .main-menu');
		let menuClose7 = document.querySelector('.menu-style-7 #menu-close');
		let overlay7 = document.querySelector('.overlay-7');
		menuToggle7.addEventListener('click', () => {
			menuToggle7.classList.add('active');
			mainMenu7.classList.add('open');
			overlay7.classList.add('open');
		})
		menuClose7.addEventListener('click', () => {
			mainMenu7.classList.remove('open');
			overlay7.classList.remove('open');
			menuToggle7.classList.remove('active');
		})
		overlay7.addEventListener('click', () => {
			mainMenu7.classList.remove('open');
			overlay7.classList.remove('open');
			menuToggle7.classList.remove('active');
		})  
	
    
    /*=====  End of Mobile Menu  ======*/
    
    
    /*=============================================
    =              Form Validate                  =
    =============================================*/

	$.validate({
        lang: 'es',
    });
    
    /*=====  End of Form Validate  ======*/
    
    
    /*=============================================
    =          Toggle Password Show               =
    =============================================*/

	 $(".toggle-password").click(function() {

      $(this).toggleClass("mdi-eye-outline mdi-eye-off-outline");
        
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    
    /*=====  End of   ======*/ 
    
    
    /*=============================================
    =              Accordion Steps                =
    =============================================*/

     /*-------- Checkout Steps --------*/

    $('#checkout-steps').vjaccordionsteps({

    });

    /*-------- Checkout Steps Dark --------*/

    $('#checkout-steps-dark').vjaccordionsteps({

    });
    
    /*=====  End of Accordion Steps  ======*/
    
    
    /*=============================================
    =                  Formatter                  =
    =============================================*/

	$('#credit-input').formatter({
        'pattern': '{{9999}} {{9999}} {{9999}} {{9999}}',
    });
    
    /*=====  End of Formatter  ======*/


    /*=============================================
    =           Product Size Active               =
    =============================================*/

	$('.filter-size ul li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/
    
    
    /*=============================================
    =                 Price Range                 =
    =============================================*/

     /*-------- Slider Range --------*/

	$( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmount" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmount" ).val( "$" + ui.values[ 1 ] );
        }
    });

    $( "#minAmount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmount" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range 2 --------*/

	$( "#slider-range2" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmount2" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmount2" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmount2" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range Dark --------*/

    $( "#slider-range-dark" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmountDark" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmountDark" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmountDark" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmountDark" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


    /*-------- Slider Range Dark 2 --------*/

    $( "#slider-range-dark2" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 300, 1200 ],
        slide: function( event, ui ) {
            $( "#minAmountDark2" ).val( "$" + ui.values[ 0 ] );
            $( "#maxAmountDark2" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#minAmountDark2" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#maxAmountDark2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
    
    /*=====  End of Price Range  ======*/


    /*=============================================
    =           Slick product Active  1           =
    =============================================*/

    $('.product-active').slick({
        dots: false,
        infinite: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    /*=====  End of Slick Collection Active  ======*/


    /*=============================================
    =           Product Item Active               =
    =============================================*/

	$('.items-wrapper .single-item').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =           Product size Active               =
    =============================================*/

	$('.size-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/


    /*=============================================
    =           Product Country Active               =
    =============================================*/

	$('.country-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
	});
    
    /*=====  End of Product Size Active ======*/

    
    /*=============================================
    =           Product Color Active               =
    =============================================*/

    $('.color-select li').each(function() {
		var get_color = $(this).attr('data-color');
		$(this).css("background-color", get_color);
    });
    
	$('.color-select li').on("click", function() {
		$(this).siblings(this).removeClass('active').end().addClass('active');
    });
    
    /*=====  End of Product Size Active ======*/
    
    
    /*=============================================
    =        slick Slider Product Details         =
    =============================================*/

    /*-------- Product Details 1 --------*/

    $('.product-image-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-thumb-image-active-1',
        speed: 600,
    });

    
    
    $('.product-thumb-image-active-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-image-active-1',
        dots: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-up"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-down"></i></span>',
        focusOnSelect: true,
        vertical: true,
        speed: 600,
    });

    /*-------- Product Details 2 --------*/

    $('.product-image-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-thumb-image-active-2',
        speed: 600,
    });
    
    $('.product-thumb-image-active-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-image-active-2',
        dots: false,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        focusOnSelect: true,
        speed: 600,
    });
    
    /*=====  End of slick Slider Product Details ======*/

    /*=============================================
    =     slick Slider Content Card Style 3       =
    =============================================*/

    $('.content-preview-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        dots: false,
        fade: true,
        asNavFor: '.content-thumb-active',
        speed: 400,
    });
    
    $('.content-thumb-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.content-preview-active',
        dots: false,
        infinite: false,
        arrows: false,
        focusOnSelect: true,
        speed: 400,
    });

    /*=====  End of slick Slider Content Card Style 3 ======*/
    
    /*=============================================
    =               Content Active                =
    =============================================*/

	$('.content-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Content Active  ======*/

    /*=============================================
    =            Header Items Active              =
    =============================================*/

	$('.header-items-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 4 Slider Active             =
    =============================================*/

	$('.header-4-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 5 Slider Active             =
    =============================================*/

	$('.header-5-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =          Header 7 Slider Active             =
    =============================================*/

	$('.header-7-active').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        arrows: false,
        prevArrow:'<span class="prev"><i class="mdi mdi-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="mdi mdi-chevron-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    /*=====  End of Header Items Active ======*/

    /*=============================================
    =               Rating Active                 =
    =============================================*/

    /*-------- Rating 1 --------*/

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
        
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    
    
    /* 2. Action to perform on click */
    var spansCounts =  $('#stars li').length
    $('#stars li').on('click', function(e) {
        console.log($(this).index())
        $('#stars li').removeClass('selected');

        for(var i=0 ; i < $(this).index() + 1; i++){
            $('#stars li').eq(i).addClass('selected')
        }
    })    


    /*-------- Rating 2 --------*/

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars2 li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
        
    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });
    
    
    /* 2. Action to perform on click */
    var spansCounts =  $('#stars2 li').length
    $('#stars2 li').on('click', function(e) {
        console.log($(this).index())
        $('#stars2 li').removeClass('selected');

        for(var i=0 ; i < $(this).index() + 1; i++){
            $('#stars2 li').eq(i).addClass('selected')
        }
    })    

    /*=====  End of Rating Active ======*/
    
    /*=============================================
    =                                    =
    =============================================*/

	
    
    /*=====  End of   ======*/
    
    
    
    
    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: '+'
    });
    cu.start();
    
    
    
    // client-logo-active 
    $('.client-logo-active').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        arrows: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    // client-logo-active 
    $('.three-column-slider').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        arrows: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    
    
    
    
    
});





