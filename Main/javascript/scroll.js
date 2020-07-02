$(document).ready(function(){
    $(window).scroll(function(event){
        if($(window).width() >= 1775){
            console.log("333")
            if($(this).scrollTop() < $(window).height()*2.5){
                
                $('#homeText').css({"opacity" : "0"});

            }
            else{
                $("#homeText").css({"opacity" : "1"});

            }
        } else{
            if($(this).scrollTop() < $(window).height()*3.5){
                
                $('#homeText').css({"opacity" : "0"});

            }
            else{
                $("#homeText").css({"opacity" : "1"});

            }
        }
    });
})