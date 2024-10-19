// Fonction pour ouvrir un onglet spécifique
function openTab(evt, tabName) {
    // Déclarer toutes les variables nécessaires
    var i, tabcontent, tablinks;

    // Obtenir tous les éléments avec la classe "tabcontent" et les masquer
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Obtenir tous les éléments avec la classe "tablinks" et supprimer la classe "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Afficher l'onglet courant et ajouter une classe "active" au bouton qui a été cliqué
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Par défaut, ouvrir l'onglet Accueil
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});
