/*
Élément HTML DOM getAttribute() et setAttribute()

Objectif : 
getAttribute() ;
setAttribute() ;

Énoncé :
Code HTML

<body>
    <ul>
      <li class="first" id="special">i have class of first</li>
      <a href="first.html" id="link">random link</a>
      <li>i have no attributes</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>

Ecrivez un code javaScript pour résoudre les questions suivantes.

1.	Trouvez la valeur d'identification de la première liste et le journal de la console. 
Résultat : spécial
2.	Affichez dans le journal de la console la valeur de l'attribut de lien.
Sortie : first.html
3.	Sélectionnez le dernier élément li en utilisant les propriétés nextElementSibling et ajoutez-lui un nom de classe first. Changez également le texte 'i also have a class of first'.
console log last.
4.	Utilisez querySelectorAll pour sélectionner le premier nom de classe et consolez le résultat.
*/

// 1-
const elt = document.querySelectorAll("ul")[0].firstElementChild;
// console.log(elt);
// console.log(elt.getAttributeNames());
console.log(elt.getAttribute("id")); // Réponse de la première question
// console.log(elt.getAttribute("class"));

// 2-
const elta = document.querySelector("a");
// console.log(elta);
// console.log(elta.getAttributeNames());
console.log(elta.getAttribute("href")); // Réponse de la 2-ième question
// console.log(elta.getAttribute("id"));
// console.log(elta.getAttributeNode("href"));

// 3-
const lastElt =
  document.querySelectorAll("ul")[0].firstElementChild.nextElementSibling
    .nextElementSibling; // 1ère réponse de la 3-ième question
console.log(lastElt.textContent); // I have no attributes
lastElt.setAttribute("class", "first"); // 2-ième réponse de la 3-ième question
console.log(lastElt.getAttributeNames());
console.log(lastElt.getAttribute("class"));
lastElt.textContent = "I also have a class of first"; // 3-ième réponse de la 3-ième question
console.log(lastElt.textContent); // I also have a class of first

// 4-
const firstElt = document.querySelectorAll(".first");
console.log(firstElt);
const firstElt1 = document.querySelectorAll(".first")[0];
console.log(firstElt1);
console.log(firstElt1.textContent); // Réponse de la 4-ième question
