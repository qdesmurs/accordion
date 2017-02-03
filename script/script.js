// var titres = document.getElementsByClassName("cache");
// var contenus = document.getElementsByClassName("hidden");
// function cdukk(element) {
//     for (var i = 0; i < contenus.length; i++) {
//             contenus[i].style.display = "none" ;
//     }
//     element.class cache tyle.display = "block";
// }

function cdukk(element) {
    var sections = document.getElementsByClassName("uncache");
    for (var i = 0; i < sections.length; i++) {
        sections[i].className = "cache";
    }
    element.parentElement.className = "uncache";
}

//
// titre.addEventListener("click", function() {
//     contenus.style.display = "none";
// });
// titre.addEventListener("click", function() {
// contenu.style.display = "block";
// });
