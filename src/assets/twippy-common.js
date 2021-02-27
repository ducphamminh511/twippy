$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.TopJs();
            this.Gnavi();
        },
        TopJs: function() {
            $(window).on('load', function() {
                //select language, currency
                $('.custom-select-wrapper').on('click', function() {
                    var custom = $(this).find('.twippy-custom-select');
                    if (custom.hasClass('open')) {
                        $('.twippy-custom-select').removeClass('open');
                    } else {
                        $('.twippy-custom-select').removeClass('open');
                        custom.addClass('open');
                    }
                });
                $('.custom-option').on('click', function() {
                    if (!$(this).hasClass('selected')) {
                        $(this).parent().find('span').removeClass('selected');
                        $(this).addClass('selected');
                        if ($(this).parents().hasClass('select-lang')) {
                            let trigger = $(this).parents('.twippy-custom-select').find('.custom-select__trigger span');
                            trigger.empty().append($(this).clone().find('img'),$(this).attr('data-value'));
                        } else {
                            $(this).parents('.twippy-custom-select').find('.custom-select__trigger span').text($(this).attr('data-value'));
                        }
                    }
                });
                //main slider
                $('.idx-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    dots: true,
                    infinite: true,
                    fade: true,
                    prevArrow: '<span class="slick-prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 15.4142C-0.195263 14.6332 -0.195263 13.3668 0.585786 12.5858L12.5858 0.585786C13.3668 -0.195263 14.6332 -0.195264 15.4142 0.585786C16.1953 1.36683 16.1953 2.63316 15.4142 3.41421L4.82843 14L15.4142 24.5858C16.1953 25.3668 16.1953 26.6332 15.4142 27.4142C14.6332 28.1953 13.3668 28.1953 12.5858 27.4142L0.585786 15.4142Z" fill="white"/></svg></span>',
                    nextArrow: '<span class="slick-next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4142 12.5858C16.1953 13.3668 16.1953 14.6332 15.4142 15.4142L3.41421 27.4142C2.63317 28.1953 1.36683 28.1953 0.585787 27.4142C-0.195262 26.6332 -0.195262 25.3668 0.585787 24.5858L11.1716 14L0.585788 3.41421C-0.195261 2.63316 -0.195261 1.36683 0.585788 0.585786C1.36684 -0.195263 2.63317 -0.195263 3.41421 0.585786L15.4142 12.5858Z" fill="white"/></svg></span>'
                });
                //trending slider
                $('.trending ul').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    dots: false,
                    infinite: false,
                    prevArrow: '<span class="slick-prev"><svg width="37" height="18" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 15.4142C-0.195263 14.6332 -0.195263 13.3668 0.585786 12.5858L12.5858 0.585786C13.3668 -0.195263 14.6332 -0.195264 15.4142 0.585786C16.1953 1.36683 16.1953 2.63316 15.4142 3.41421L4.82843 14L15.4142 24.5858C16.1953 25.3668 16.1953 26.6332 15.4142 27.4142C14.6332 28.1953 13.3668 28.1953 12.5858 27.4142L0.585786 15.4142Z" fill="#121212"/></svg></span>',
                    nextArrow: '<span class="slick-next"><svg width="37" height="18" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4142 12.5858C16.1953 13.3668 16.1953 14.6332 15.4142 15.4142L3.41421 27.4142C2.63317 28.1953 1.36683 28.1953 0.585787 27.4142C-0.195262 26.6332 -0.195262 25.3668 0.585787 24.5858L11.1716 14L0.585788 3.41421C-0.195261 2.63316 -0.195261 1.36683 0.585788 0.585786C1.36684 -0.195263 2.63317 -0.195263 3.41421 0.585786L15.4142 12.5858Z" fill="#121212"/></svg></span>',
                    responsive: [
                        {
                            breakpoint: 641,
                            settings: {
                                autoplay: true,
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                variableWidth: true
                            }
                        }, 
                    ]
                });
                //customer slider
                $('.customer ul').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    dots: true,
                    infinite: true,
                    prevArrow: '<span class="slick-prev"><svg width="37" height="18" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 15.4142C-0.195263 14.6332 -0.195263 13.3668 0.585786 12.5858L12.5858 0.585786C13.3668 -0.195263 14.6332 -0.195264 15.4142 0.585786C16.1953 1.36683 16.1953 2.63316 15.4142 3.41421L4.82843 14L15.4142 24.5858C16.1953 25.3668 16.1953 26.6332 15.4142 27.4142C14.6332 28.1953 13.3668 28.1953 12.5858 27.4142L0.585786 15.4142Z" fill="#121212"/></svg></span>',
                    nextArrow: '<span class="slick-next"><svg width="37" height="18" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4142 12.5858C16.1953 13.3668 16.1953 14.6332 15.4142 15.4142L3.41421 27.4142C2.63317 28.1953 1.36683 28.1953 0.585787 27.4142C-0.195262 26.6332 -0.195262 25.3668 0.585787 24.5858L11.1716 14L0.585788 3.41421C-0.195261 2.63316 -0.195261 1.36683 0.585788 0.585786C1.36684 -0.195263 2.63317 -0.195263 3.41421 0.585786L15.4142 12.5858Z" fill="#121212"/></svg></span>',
                    responsive: [
                        {
                            breakpoint: 641,
                            settings: {
                                arrows:false
                            }
                        }, 
                    ]
                });
                //products
                $('.product-list li').on('click', function() {
                    var data = $(this).attr('data-tab');
                    if ($(this).hasClass('activated')) {
                        return false;
                    } else {
                        $(this).parent().find('li').removeClass('activated');
                        $(this).addClass('activated');
                        $('.product-items ul').removeClass('activated');
                        $('.product-items ul[class^="product-item-list' + data + '"]').addClass('activated');
                    }
                });
                //countdown
                var endDate = new Date("Dec 5, 2020 00:00:00").getTime();
                var x = setInterval(function() {
                    var now = new Date().getTime(),
                        distance = endDate - now,
                        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        sec = Math.floor((distance % (1000 * 60)) / 1000);
                    if (distance < 0) {
                        days = 0, hours = 0, min = 0, sec = 0;
                        clearInterval(x);
                    }
                    $('#days').text(days);
                    $('#hours').text(hours);
                    $('#min').text(min);
                    $('#sec').text(sec);
                }, 1000);
                //testimonail slider
                $('.testimonail-slider').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: true,
                    dots: true,
                    prevArrow: '<span><i class="fal fa-long-arrow-left"></i></span>',
                    nextArrow: '<span class="slick-next"><i class="fal fa-long-arrow-right"></i></span>',
                    infinite: true,
                    responsive: [{
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                });
            })
        },
        Gnavi: function() {
            //menu hover
            $('.over').hover(function() {
                if ($(this).hasClass('flag')) {
                    return false;
                } else {
                    $(this).find('.submenu').stop().slideToggle();
                }
            });
            $('.over').click(function() {
                if ($(this).hasClass('flag')) {
                    if ($(this).hasClass('active')) {
                        $('.submenu').stop().slideUp();
                        $(this).removeClass('active');
                    } else {
                        $('.over').removeClass('active');
                        $('.submenu').stop().slideUp();
                        $(this).addClass('active');
                        $(this).find('.submenu').stop().slideToggle();
                    }
                }
            });
            //menu icon
            $('.menu-icon').click(function() {
                if ($(this).hasClass('active')) {
                    $('#gnavi').removeClass('active');
                    $('.submenu').fadeOut('fast');
                    $('.over').removeClass('active');
                } else {
                    $('#gnavi').addClass('active');
                }
            });
            $('.close-menu').click(function() {
                $('#gnavi').removeClass('active');
                $('.over').removeClass('active');
                $('.submenu').fadeOut('fast');
            });
            //f-menu click
            $('.f-menu>ul>li:first-child').click(function(){
                var sub = $(this).find('.f-menu-sub');
                if($(this).hasClass('active')){
                    $.merge($(this),sub).removeClass('active');
                }else{
                    $.merge($(this),sub).addClass('active');
                }
            });
            //header fixed sp
            // $(window).on("scroll resize", function() {
            //     var vW = $(window).width();
            //     if (vW < 641) {
            //         var hH = $('#header').outerHeight() + $('.htop').outerHeight();
            //         if (hH <= $(this).scrollTop()) {
            //             $('#header').addClass('fixed');
            //             $('.mainvisual').css('margin-top', $('#header').outerHeight());
            //         } else {
            //             $('#header').removeAttr('class');
            //             $('.mainvisual').removeAttr('style');
            //         }
            //     }
            // });
            //responsive
            $(window).bind("load resize", function() {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon,.over').removeClass('flag');
                    $('#gnavi,.over,.f-menu *').removeClass('active');
                    $('.submenu').removeAttr('style');
                } else {
                    $('.over').addClass('flag');
                }
            });
          //tracking js
          var tracking = $('div[class="s4com-container "]');
          if(tracking.length > 0){
            tracking.parents('body').addClass('template-tracking');
          }
        },
    };
    obj.init();
});