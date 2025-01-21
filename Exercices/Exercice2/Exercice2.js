const comboboxChoix = document.getElementById("combobox-choix");
const boutonAppuyer = document.getElementById("bouton-appuyer");
const faitesVotreChoix = document.getElementById("faites-votre-choix");
const messageAvertissement = document.getElementById("message-avertissement");
var choixActuel = comboboxChoix.options[comboboxChoix.selectedIndex];

boutonAppuyer.addEventListener("click", ()=>{
    var choixActuel = comboboxChoix.value;
    if(choixActuel == "faites-votre-choix")
    {
        window.alert(choixActuel.innerText);
        messageAvertissement.innerText = "SVP choisir un poste dans la liste ici-haut."
    }
});
