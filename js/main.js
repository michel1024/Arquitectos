$(document).ready(function(){

    $(window).scroll( function(){
        var top = $(this).scrollTop();

        

        if(top >= 400){
            $(".circulos").animate({
                "margin-top": "150px",
                "opacity": "1"
            }, 1500);
        }

        if(top >= 2100){
            $(".galeria").animate({"opacity": "1", "margin-left": "0px"}, 1500);
        }
    });
});