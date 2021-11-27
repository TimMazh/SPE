var scrolling = true;
function stop(){
    scrolling = false;
}
function pageScroll() {
                if(scrolling){
                    window.scrollBy(0,1);
                    scrolldelay = setTimeout(pageScroll,10);
                }
        }
function pageScroll1() {
    var x = document.getElementById("placeholder");
        if (x.style.display === "none") {
            scrolling = false;
            x.style.display = "block";
            stop();
        } else {
            x.style.display = "none";
            scrolling = true;
            pageScroll();
        }
        
}