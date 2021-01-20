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
    hide("contact");
    hide("aboutme");
    var pagesIds = ["home", "skill", "lamguages", "projects", "contact", "abaut me"];
    console.debug(pagesIds);
    console.warn(pagesIds[0]);
    console.warn(pagesIds[1]);
    console.warn(pagesIds[2]);
    console.warn(pagesIds[3]);
    console.warn(pagesIds[4]);
    console.warn(pagesIds[5]);
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
function showContactPage(){
    hideAllPages();
    show("contact");
}

function showAboutMe_Page(){
    hideAllPages();
    show("aboutme");
}
     