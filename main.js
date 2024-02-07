const liste1 = document.querySelector("ul");
const presenceEnfant = liste1.hasChildNodes();

console.log(liste1);
console.log(presenceEnfant);

const ajouterLi = document.createElement("li");
ajouterLi.innerHTML =
  "La méthode insertBefore() permet d'insérer un élément avant un autre élément.";

const positionNouvelleLi = document.querySelector("li:nth-child(2)");
const parentNouvelLi = positionNouvelleLi.parentNode;

parentNouvelLi.insertBefore(ajouterLi, positionNouvelleLi);
