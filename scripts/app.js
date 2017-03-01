$(document).ready(function() {
    preloadImages();
    
    $('#fullpage').fullpage({
        paddingRight: '100px',
        anchors: ['main', 'about', 'works', 'service', 'contact'],
        menu: '#nav-bottom  ',
        slidesNavigation: false,
        controlArrows: false,
        verticalCentered: false,
        scrollOverflow: true,
        scrollBar: false,
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
    
    $('#works-category-1').hover(
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-residencial-on.jpg)');
        },
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-residencial-off.jpg)');
        }
    );
    
    $('#works-category-2').hover(
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-commercial-on.jpg)');
        },
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-commercial-off.jpg)');
        }
    );
    
    $('#works-category-3').hover(
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-retail-on.jpg)');
        },
        function(){
            $(this).css('background-image', 'url(images/works/P3-work-retail-off.jpg)');
        }
    );  
    
    $('.works-all-img').hover(
        function(){
            $(this).attr('src', '/images/works/P3-work-all-work-on.png');
        },
        function(){
            $(this).attr('src', 'images/works/P3-work-all-work-off.png');
        }
    ); 
    
    startSlideShowTransition();
});
