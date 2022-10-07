
$(document).ready(function(){
    $('#nav').onePageNav({
        currentClass: 'current'
    });
    $('.project_popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true,
          },
    });

    $('.video_popup').magnificPopup({
        type:'iframe',
        
    });

    //mobile menu active//
    $('#nav').slicknav();

    $('.counter_increment').counterUp();


    $('.testimonials').slick({
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        dots: true,
        infinite: true,
        loop:true,
        autoplay: true,
        
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    arrows:false,
                },
            },
           
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    slidesToShow:1,
                },
            },


            {
                breakpoint:480,
                settings:{
                    arrows:false,
                    slidesToShow:1,
                },
            },



        ]



        
        }),







$(window).on('scroll', function(){
    if($(this).scrollTop() > 50){
        $('.header_area').addClass('sticky');
    }else{
        $('.header_area').removeClass('sticky');
    }
})
})