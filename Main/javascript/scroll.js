$(document).ready(function(){
    $(window).scroll(function(event){
        if($(window).width() >= 1775){
            if($(this).scrollTop() < $(window).height()*2.5){ 
                $('#homeText').css({"opacity" : "0"});
            }
            else{
                $("#homeText").css({"opacity" : "1"});

            }
            
            if($(this).scrollTop() < $(window).height()*4.5){ 
                $('#immobilienText').css({"opacity" : "0"});
            }
            else{
                $("#immobilienText").css({"opacity" : "1"});

            }

            if($(this).scrollTop() < $(window).height()*7.5){ 
                $('#aboutUsText').css({"opacity" : "0"});
            }
            else{
                $("#aboutUsText").css({"opacity" : "1"});

            }

            if($(this).scrollTop() < $(window).height()*9.5){ 
                $('#contactText').css({"opacity" : "0"});
            }
            else{
                $("#contactText").css({"opacity" : "1"});

            }

        } else{
            if($(this).scrollTop() < $(window).height()*3.5){
                
                $('#homeText').css({"opacity" : "0"});

            }
            else{
                $("#homeText").css({"opacity" : "1"});

            }

            if($(this).scrollTop() < $(window).height()*5.5){ 
                $('#immobilienText').css({"opacity" : "0"});
            }
            else{
                $("#immobilienText").css({"opacity" : "1"});

            }

            if($(this).scrollTop() < $(window).height()*8.3){ 
                $('#aboutUsText').css({"opacity" : "0"});
            }
            else{
                $("#aboutUsText").css({"opacity" : "1"});

            }

            if($(this).scrollTop() < $(window).height()*10.3){ 
                $('#contactText').css({"opacity" : "0"});
            }
            else{
                $("#contactText").css({"opacity" : "1"});

            }
        }
    });
})