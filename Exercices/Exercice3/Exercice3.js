var textNom = document.getElementById("textbox-nom");
var textPrenom = document.getElementById("textbox-prenom");
var textTelephone = document.getElementById("textbox-telephone");
var textCourriel = document.getElementById("textbox-courriel");
var Nom = document.getElementById("nom");
var Prenom = document.getElementById("prenom");
var Telephone = document.getElementById("telephone");
var Courriel = document.getElementById("courriel");
var etoile = document.getElementById("etoile");
var avertissement = document.getElementById("avertissement");
var message = document.getElementById("message");
const phonePattern = new RegExp(textTelephone.pattern);
function BoutonAppuyer() {
    if (textNom.value != "" && textPrenom.value != "" && textCourriel.value != "")
    {
        avertissement.classList.add("taille-invisible");
        if ()
          message.innerText = `Bonjour ${textNom.value}${textPrenom}, nous vous repondrons
        par courriel `;
    }else
    {

        avertissement.classList.remove("taille-invisible");
        if (textNom.value === "") {
          textNom.classList.add("text-rouge");
        }
        if (textPrenom.value === "") {
          textPrenom.classList.add("text-rouge");
        }
        if (textCourriel.value === "") {
          textCourriel.classList.add("text-rouge");
        }
    }
      
}
