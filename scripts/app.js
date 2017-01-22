funtion preloadImages(){
    if (document.images) {
        img1 = new Image();
        img2 = new Image();
        img3 = new Image();

        img1.src = "https://fatdom.github.io/HAB-Company/images/main/cover1.jpg";
        img2.src = "https://fatdom.github.io/HAB-Company/images/main/cover2.jpg";
        img3.src = "https://fatdom.github.io/HAB-Company/images/main/cover3.jpg";
    }
}

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
            $("#nav-bottom .nav-img").attr('src','images/point-off.png')
            $("#nav-bottom .active").attr('src','images/point-on.png');
        }
    });
    


    $('.menu-main-1').hover(
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-about-on.png');
        },
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-about-off.png');
        }
    );
    
    $('.menu-main-2').hover(
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-work-on.png');
        },
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-work-off.png');
        }
    );
    
    $('.menu-main-3').hover(
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-service-on.png');
        },
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-service-off.png');
        }
    );
    
    $('.menu-main-4').hover(
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-contact-on.png');
        },
        function(){
            this.setAttribute('src', 'images/main/P1-cover-button-contact-off.png');
        }
    );
    
    startSlideShowTransition();
});
