$(function(){

    $('.openbtn').click(function () {
        $('.openbtn').toggleClass('active');
        $('#g-nav').toggleClass('panelactive');
        $('.circle-bg').toggleClass('circleactive');
    });
    
    $('#g-nav a').click(function () {
        $('.openbtn').removeClass('active');
        $('#g-nav').removeClass('panelactive');
        $('.circle-bg').removeClass('circleactive');
    });
    
    $(window).scroll(function(){
        $('.flipLeftTopTrigger').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 100) {
                $(this).addClass('flipLeftTop');
	            } else {
		        $(this).removeClass('flipLeftTop');
                }
            });
        });

    $(window).scroll(function(){
        $('.fadeInTrigger').each(function(){
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 100) {
                $(this).addClass('fadeIn');
	            } else {
		        $(this).removeClass('fadeIn');
                }
            });
        });

        $('.food-menu').click(function(){
            $(this).addClass('active');
            $('food-menu').find('active').removeClass('active');
        });

        $('nav a').click(function () {
            var elmHash = $(this).attr('href'); 
            var headerH = $("#header").outerHeight(true);
            var pos = Math.round($(elmHash).offset().top-headerH);	
            $('body,html').animate({scrollTop: pos}, 200);
            return false;
        });





});