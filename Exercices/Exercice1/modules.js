document.addEventListener("DOMContentLoaded", function() {
    var boutonAnglais = document.getElementById("bouton-anglais");
    var boutonFrancais = document.getElementById("bouton-francais");
    var langueText = document.getElementById("langue");

    // Écouter les événements de changement pour mettre à jour la langue
    boutonAnglais.addEventListener("change", function() {
        if (boutonAnglais.checked) {
            langueText.textContent = "Anglais";
        }
    });

    boutonFrancais.addEventListener("change", function() {
        if (boutonFrancais.checked) {
            langueText.textContent = "Français";
        }
    });
});