$(function() {

     /* Фиксированное Меню при скроле */
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

/*  Toggle header search
/* ------------------------------------ */
    $('.toggle-search').on('click', function() {
        $('.toggle-search').toggleClass('active');
        $('.search-expand').slideToggle(250);
            setTimeout(function(){
                $('.search-expand input').focus();
            }, 300);
    });



    $('.trigger').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
         return false;
    });


    /* Плавный скрол к элементам*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
           scrollTop: blockOffset
        },500);

    });

    /* Бергер МЕНЮ*/
    $("#nav_toggle").on("click", function(event) {
       event.preventDefault();

        $(this).toggleClass("active");

        $("#nav").toggleClass("active");
    });

    /* АККАРДИОН */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');


        $(blockId).slideToggle();
        $this.toggleClass("active");

    });

    //создаем клон контента в модельном окне
    var static = $('.section--clients').clone(true);
    $('.bodyy').after(static);

    //модельное окно на весь экран
    $('.js-click-modal').click(function(e){
        e.preventDefault();
      $('.containerr').addClass('modal-open');
        $("body").addClass('no-scroll');
    });

    $('.js-close-modal').click(function(){
      $('.containerr').removeClass('modal-open');
        $("body").removeClass('no-scroll');
    });

    /* SLIDER*/
    $("[data-slider-one]").slick({
        infinite: true,
        fade:false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1
    });

    $("[data-slider]").slick({
        infinite: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});
