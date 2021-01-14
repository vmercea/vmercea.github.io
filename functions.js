function hide(id){
    var el = document.getElementById(id);
    el.style.display = 'none';
}
function show(id){
    document.getElementById(id).style.display="";
}

function hideAllPages(){
    hide("home");
    hide("skills");
    hide("languages");
    hide("projets");
    var pages = ["home", "skill", "lamguages", "projects", "contact", "abaut me"];
    console.debug(pagesIds);
    console.warn(pageIds[0]);
    console.warn(pageIds[1]);
    console.warn(pagesIds[2]);
    console.warn
}
function showHomePage() {
    hideAllPages();
    show("home");
}

function showSkillsPage() {
    hideAllPages();
    show("skills");
}
function showLanguagesPage() {
    hideAllPages();
    show("languages");
}

function showProjectsPage() {
    hideAllPages();
    show("projects");
}
     