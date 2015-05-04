$(window).resize(function () {

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    var wh = $(window).height();
    var ww = $(window).width();
    var $introBorderSection = $('.introBorderSection');
    var $introTextHeading2 = $('.introTextHeading2');
    var $introHeading = $('.introBorderSection h1');
    var $introCountdown = $('.introTextHeadingCountdown');

    function introHeadingMargin() {
        $introHeading.css({
                'margin-left' : -$introHeading.width()/2
        });
    }

    function introBorderSectionCentering() {
        $introBorderSection.css({
            'top':wh/2-$introBorderSection.height()/4
        })
    }

    function introTextHeading2Centering() {
        $introTextHeading2.css({
            'top':wh/2-$introTextHeading2.height()/2
        })
    }

    function introCountdownCentering() {
        $introCountdown.css({
            'top':wh/2-$introCountdown.height()/1.4
        })
    }

    function introHeight() {
        $('#intro').css({height: wh});
    }

    function introHeight3quarters() {
        $('#intro-3quarters').css({height: wh*0.75})
    }


    function OverlayMenuHeight() {
        $('.overlay-menu').css({height: wh});
        $('.menuWrapper').css({height: wh});
    }

    introHeight();
    introHeight3quarters();
    introHeadingMargin();
    introBorderSectionCentering();
    introTextHeading2Centering();
    introCountdownCentering();
    OverlayMenuHeight();
});

$(window).resize();

$(document).ready(function () {

    "use strict";
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //owl carousels
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#smallIntroCarousel').owlCarousel({
        singleItem: true,
        items:1
    });

    $('#aboutIntroCarousel').owlCarousel({
        singleItem: true,
        items:1
    });

    $('#owl-intro').owlCarousel({
        singleItem: true,
        items:1
    });


    $('#owl-news-intro').owlCarousel({
        singleItem: true,
        items:1
    });


    $('#owl-clients1').owlCarousel({
        items:7,
        autoplay:true,
        itemsDesktop : [1199,6],
        itemsDesktopSmall : [980,5],
        itemsTablet: [768,4],
        itemsMobile : [479,3],
    });


    $("#owl-testimonials").owlCarousel({
        singleItem:	true,
        autoPlay:	true
    });





    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //parallax init
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if(!(jQuery.browser.mobile) && $(window).width() > 768){
        $(window).stellar({
            responsive: true,
            horizontalOffset: 0,
            horizontalScrolling:false
        });
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //tab script
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#tab1 a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //fitvids
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('body').fitVids();


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //animstition init
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(".animsition").animsition({

        inClass               :   'fade-in',
        outClass              :   'fade-out-up-sm',
        inDuration            :    1500,
        outDuration           :    1500,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          : [ 'animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay               :   false,

        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //charts
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#charts').waypoint(function() {
        "use strict";
        // first timer
        $('.timer1').countTo({

            from: 0, // the number you want to start
            to: 8679, // the number you want to reach
            speed: 4000,
            refreshInterval: 100

        });

        // second timer
        $('.timer2').countTo({

            from: 0,// the number you want to start
            to: 340,// the number you want to reach
            speed: 2500,
            refreshInterval: 50

        });


        // third timer
        $('.timer3').countTo({

            from: 0,// the number you want to start
            to: 100,// the number you want to reach
            speed: 2000,
            refreshInterval: 10
        });


        // fourth timer
        $('.timer4').countTo({

            from: 0,// the number you want to start
            to: 3456,// the number you want to reach
            speed: 4000,
            refreshInterval: 10,


        });


    }, { offset: 500 });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //collapse group
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(function() {
        $('a#collapseListGroup1').on('mouseenter.collapse.data-api', '[data-toggle=collapse]', function(e) {
            var $this = $(this),
                href, target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
                ,
                option = $(target).data('collapse') ? 'show' : $this.data()
            $(target).collapse(option)
        })
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //contact script
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#result").slideUp(300,function() {
            $('#result').hide();
            $('#submit')
                .attr('disabled','disabled');
            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val(),
                },
                function(data){
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });

        return false;

    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //navbar affix
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('.navbar').affix({
        offset: {
            top: 200
        }
    });


    if(jQuery.browser.mobile){

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        // init scrollreveal plugin
        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        window.sr = new scrollReveal();



    }
        else{

        }


});


$(document).ready(function() {

    "use strict";

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var sync3 = $("#sync3");
    var sync4 = $("#sync4");

    sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 2000,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
    });

    sync3.owlCarousel({
        singleItem : true,
        slideSpeed : 2000,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200
    });

    sync4.owlCarousel({
        singleItem : true,
        slideSpeed : 2000,
        navigation: false,
        pagination: false,
        mouseDrag: false,
        touchDrag: false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200
    });

    sync2.owlCarousel({
        items : 3,
        navigation: false,
        pagination: false,
        paginationNumbers:false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,3],
        itemsMobile : [479,3],
        responsiveRefreshRate : 100,
        afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });



    function syncPosition(el){
        var current = this.currentItem;
        sync2
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
        }
    }

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);

    });

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync3.trigger("owl.goTo",number);

    });

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync4.trigger("owl.goTo",number);

    });

    function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
            if(num === sync2visible[i]){
                var found = true;
            }
        }

        if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
                if(num - 1 === -1){
                    num = 0;
                }
                sync2.trigger("owl.goTo", num);
            }
        } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
        }

    }

});


$('.burger_deluxe').click(function() {

    $('.patty').toggleClass("pattyfade");
    $('.top_bun').toggleClass("rotate_top");
    $('.bottom_bun').toggleClass("rotate_bottom");

//  var viewportHeight = $(window).height();
    var viewportHeight= $(document).height()
    if($('.top_bun').hasClass("rotate_top")) {
        $('.overlay-menu').css('visibility','visible');
        $('.overlay-menu').css('height', viewportHeight);
        $('.overlay-menu').find('a').css('opacity', '1');
        setTimeout(function()
        {
            //$('.active-menu').css('background-color', '#ef293a');
        }, 750);
    }
    else
    {
        $('.overlay-menu').css('height', '0');
        $('.overlay-menu').find('a').css('opacity', '0');
        $('.overlay-menu').css('visibility','hidden');
        //$('.active-menu').css('background-color', 'transparent');
    }

});

$('.slide-center-out').click(function() {
    $('.slide-center-out').find('span').removeClass('active');
    $('.slide-center-out').find('span').css('background-color','');
    //$(this).find('span').toggleClass('active-menu');
});


$(window).resize(function() {
    //var viewportHeight = $(window).height();
    var viewportHeight= $(document).height()
    if($('.top_bun').hasClass("rotate_top")) {
        $('.overlay-menu').css('height', viewportHeight);
    }
});


