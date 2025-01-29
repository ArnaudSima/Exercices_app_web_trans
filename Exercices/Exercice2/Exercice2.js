const comboboxChoix = document.getElementById("combobox-choix");
const boutonAppuyer = document.getElementById("bouton-appuyer");
const faitesVotreChoix = document.getElementById("faites-votre-choix");
const messageAvertissement = document.getElementById("message-avertissement");
const programmeur = document.getElementById("programmeur");
var infoPersonnelles = document.getElementById("infos-personnelles");
var textboxMotivations = document.getElementById("textbox-motivations");
boutonAppuyer.addEventListener("click", () => {
  var choixActuel = comboboxChoix.value;
  if (choixActuel == "faites-votre-choix") {
    window.alert(faitesVotreChoix.innerHTML);
    messageAvertissement.innerText =
      "SVP choisir un poste dans la liste ici-haut.";
      comboboxChoix.classList.add("avertissement-rouge");
  }else{
          comboboxChoix.classList.remove("avertissement-rouge");
          infoPersonnelles.innerText += `${programmeur.value},${textboxMotivations.value}`;
  }
});
