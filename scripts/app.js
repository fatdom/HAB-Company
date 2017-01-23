$(document).ready(function() {
    preloadImages();
    
    $('#fullpage').fullpage({
        paddingRight: '100px',
        anchors: ['main', 'about', 'works', 'service', 'contact'],
        menu: '#nav-bottom  ',
        slidesNavigation: false,
        controlArrows: false,
        verticalCentered: false,
        afterLoad: function(){
            $("#nav-bottom .nav-img").attr('src','images/point-off.png');
            $("#nav-bottom .active").attr('src','images/point-on.png');
        }
    });
    


    $('.menu-main-1').hover(
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-about-on.png');
        },
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-about-off.png');
        }
    );
    
    $('.menu-main-2').hover(
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-work-on.png');
        },
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-work-off.png');
        }
    );
    
    $('.menu-main-3').hover(
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-service-on.png');
        },
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-service-off.png');
        }
    );
    
    $('.menu-main-4').hover(
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-contact-on.png');
        },
        function(){
            $(this).attr('src', 'images/main/P1-cover-button-contact-off.png');
        }
    );
    
    startSlideShowTransition();
});
