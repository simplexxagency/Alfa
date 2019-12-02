$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0){
        $header.addClass('header-scrolled');
    }
    else {
        $header.removeClass('header-scrolled');
    };

    // soft scroll
    $(".scrollTo").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });

    // soft scroll menu mob
    $(".menu-app .menu-list a").on("click", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        $('.menu-app').removeClass('open');
        $('body').removeClass('compensate-for-scrollbar');
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 500);
        // находим высоту, на которой расположен блок
    });

    $(window).scroll(function(event){
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0){
            $header.addClass('header-scrolled');
        }
        else {
            $header.removeClass('header-scrolled');
        }
    });





    $('.slider-stages').slick({
        dots: true,
        arrows: true,
        customPaging : function(slider, i) {
            i = i + 1;
         var thumb = $(slider.$slides[i]).data();
          return '<span>Этап ' + i + '</span>';
         },
        infinite: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.slider-stages-arrow-next'),
        prevArrow: $('.slider-stages-arrow-prev'),
    });
    $('.slider-stages-lp').slick({
        dots: true,
        arrows: true,
        customPaging : function(slider, i) {
            i = i + 1;
         var thumb = $(slider.$slides[i]).data();
          return '<span>Этап ' + i + '</span>';
         },
        infinite: true,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.slider-stages-arrow-next'),
        prevArrow: $('.slider-stages-arrow-prev'),
        responsive: [
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            fade: true,
                            customPaging : function(slider, i) {
                                i = i + 1;
                             var thumb = $(slider.$slides[i]).data();
                              return '<span>' + i + '</span>';
                             },
                          }
                        }
                      ]
    });
    $('.slider-works').slick({
        dots: false,
        arrows: true,
        fade: true,
        mobileFirst: true,
        infinite: false,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.slider-works-arrow-next'),
        prevArrow: $('.slider-works-arrow-prev'),
    });
    $('.review-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: $('.slider-review-arrow-next'),
        prevArrow: $('.slider-review-arrow-prev'),
        responsive: [
                        {
                          breakpoint: 1200,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            fade: true,
                          }
                        }
                      ]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });

    // placeholder animation
    $('.cool-input__input').on('change', function(){
        var $this = $(this);
        if ($this.val() == '') {
            $this.removeClass('cool-input__input_filled');
        } else {
            $this.addClass('cool-input__input_filled');
        }
    });


    $('input.cool-input__input').blur(function () {
        var $this = $(this);

        if ($this.val() == '' || $this.val() == '+7(___) ___ __ __') {
            $this.parent($('.cool-input')).addClass('cool-input__input_error');
        } else {
            $this.parent($('.cool-input')).removeClass('cool-input__input_error');
        }
    });

    $('.input-phone').mask("+7(999) 999 99 99");

    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    //Создаем объект 'user', который будет содержать информацию Detect.js
    //Вызываем detect.parse() с navigator.userAgent в качестве аргумента
        var user = detect.parse(navigator.userAgent);

    // Выводим нужные значения в консоли браузера
        if (user.browser.family === 'Safari') {
            $('.parallax-section').css({
                'background-image': 'url(../../build/img/prlx.jpg )',
                'background-size': 'cover',
                'background-position': 'center center'
            });
        };

    $('.open-gallery-btn').click(function() {
    	// e.preventDefault();
    	$(this).parent().parent().parent().find('.gallery-hover-wrp a').eq(0).click();
    });

    // open list
    var $openList = $('.open-proj-list span');
    var $openList2 = $('.fourth-block-link');

    var ulArr = $('.drop-list');
    var count;
    var listArr;
    var $openListMoreBtn = $('.show-more-list-btn');

    $openList.click(function () {
        var $this = $(this);
        if($this.hasClass('list-opened')) {
            $this.parent().siblings('.drop-list-block1').fadeOut();
            $this.removeClass('list-opened');
            $this.text('Раскрыть список');
        } else {
            $this.parent().siblings('.drop-list-block1').fadeIn();
            $this.addClass('list-opened');
            $this.text('Закрыть список');
        }
    });
    if(windowWidth <= 991) {
        var imgHeight = $('.plan-project-block img').height() + 24;
        $('.plan-project-block .drop-list-block').css({'min-height': + imgHeight + 'px'});

        var imgHeightLP = $('.get-height-lp-img img').height() + 90;
        $('.set-height-lp-img').css({'min-height': + imgHeightLP + 'px'});
        // console.log($imgHeight);
    };

    $openList2.click(function () {
        var $this = $(this);
        if($this.hasClass('list-opened')) {
            $this.siblings('.drop-list-block2').fadeOut();
            $this.removeClass('list-opened');
        } else {
            $this.siblings('.drop-list-block2').fadeIn();
            $this.addClass('list-opened');

        }
    });



    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div1 = $('.drop-list-block1'); // тут указываем ID элемента
        var div2 = $('.drop-list-block2'); // тут указываем ID элемента
        if (!div1.is(e.target) && !$openList.is(e.target)// если клик был не по нашему блоку
            && div1.has(e.target).length === 0 && $openList.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.drop-list-block1').fadeOut();
            $openList.removeClass('list-opened');
            $openList.text('Раскрыть список');
        }
        if (!div2.is(e.target) && !$openList2.is(e.target)// если клик был не по нашему блоку
            && div2.has(e.target).length === 0 && $openList2.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.drop-list-block2').fadeOut();
            $openList2.removeClass('list-opened');
        }
    });




    $.each(ulArr, function(i, ul) {
        count = ulArr[i].children.length;
        listArr = ulArr[i].children;
        if (count <= 5 ) {
            $(ul).addClass('hidden');
        };
        $.each(listArr, function(a, li) {
            if (a > 4 ) {
                $(li).addClass('marked');
                $(li).addClass('hidden');
            }
        });
    });

    $openListMoreBtn.click(function () {
        var $this = $(this);
        if ($this.hasClass('list-opened')) {
            $this.parent().find('.marked').addClass('hidden');
            $this.removeClass('list-opened');
            $this.find('span').text('показать все');
        } else {
            $this.parent().find('.marked').removeClass('hidden');
            $this.addClass('list-opened');
            $this.find('span').text('показать меньше');
        }
    });

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vhR = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vhR = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhR', `${vhR}px`);
    });

    // open menu
    $('.btn-menu-close-app').click(function () {
        $('.menu-app').removeClass('open');
        $('body').removeClass('compensate-for-scrollbar');
    });
    $('.burger-open-menu-app').click(function () {
        $('.menu-app').addClass('open');
        $('body').addClass('compensate-for-scrollbar');
    });

    // open/close callback form
    $('.btn-close-callback-form').click(function () {
        $('body').removeClass('compensate-for-scrollbar');
        $('.pop-up-overlay-wrapper').removeClass('show-pop-up');
        $('.callback-form').removeClass('open');
    });

    $('.overlay-pop-up').click(function () {
        $('body').removeClass('compensate-for-scrollbar');
        $('.pop-up-overlay-wrapper').removeClass('show-pop-up');
        $('.callback-form').removeClass('open');
        $('.thnx-block').removeClass('open');
    });

    $('.btn-open-callback-form').click(function () {
        $('body').addClass('compensate-for-scrollbar');
        if($(this).hasClass('btn-menu')) {
            $('.menu-app').removeClass('open');
        }
        $('.pop-up-overlay-wrapper').addClass('show-pop-up');
        $('.callback-form').addClass('open');
    });

    $('.ok-btn').click(function () {
        $('body').removeClass('compensate-for-scrollbar');
        $('.pop-up-overlay-wrapper').removeClass('show-pop-up');
        $('.thnx-block').removeClass('open');
    });


    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keyup', function(){
      if(this.scrollTop > 0){
        this.style.height = this.scrollHeight + "px";
      }
    });

    function THNX () {
        $('.callback-form').removeClass('open');
        $('.thnx-block').addClass('open');
    };

    $('.call-thnx').click(function () {
        THNX ();
    });

    // 2 page LP
    $('.slider-main-lp').slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    $('.lp-services-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        swipe: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
                        {
                          breakpoint: 769,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true,
                            arrows: true,
                            nextArrow: $('.lp-services-slider-arrow-next'),
                            prevArrow: $('.lp-services-slider-arrow-prev'),
                          }
                      },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            nextArrow: $('.lp-services-slider-arrow-next'),
                            prevArrow: $('.lp-services-slider-arrow-prev'),
                          }
                        }
                      ]
    });


    // input file
    var inputs = $('.inputfile');
    Array.prototype.forEach.call(inputs, function(input){
      var label	 = input.nextElementSibling,
          labelVal = label.innerHTML;
      input.addEventListener('change', function(e){
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();
    		if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
    	});
    });



});
