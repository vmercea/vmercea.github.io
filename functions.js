function hide(id){
    var el = document.getElementById(id);
    el.style.display = 'none';
}
function show(id){
    document.getElementById(id).style.display="";
}

function hideAllPages(){
    var pages = Array.from(document.querySelectorAll(" .page"));
    var pageIds =pages.map(function(page){
        return page.id;
    });
    pageIds.forEach(function(pageIds){
        hide(pageIds);
    });
}
function showHomePage() {
    hideAllPages();
    show(pageIds);
}

 function listenMenuClicks() {
     document.addEventListener("click", function(e){
         var link = e.target;
         if (link.matches("#top-menu-bar a")) {
             var id = link.innerHTML.toLowerCase();
             showHomePage(id);
         }
     });
 }

 listenMenuClicks();