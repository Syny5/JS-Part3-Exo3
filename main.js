var green = document.getElementsByClassName('color');
var red = document.getElementsByClassName('color');
var blue = document.getElementsByClassName('color');
// Il fallait sélectionner tous les éléments color pour que cela fonctionne (et pas color green puis color red...)
// Notons le get Elements avec un s à éléments, ce qui signifie qu'il prend en compte tous les élément comportant les caractères indiqués
var sentences = document.getElementById('text');
//getElementsByClassName crée un tableau dans lequel tous ceux qui ont la classe mentionnée sont classés. C'est la raison pour laquelle il faudra ensuite indiquer le numéro d'ordre des éléments entre crochets.
green[0].addEventListener('click', function(){
// Il faut préciser le nombre 0 entre crochet pour référer au premier élément du tableau créé par la commande "getElementsByClassName"
  sentences.style.color = 'green';
});
red[1].addEventListener('click', function(){
  sentences.style.color = 'red';
});
// Le 1 fait référence au deuxième nombre
blue[2].addEventListener('click', function(){
  sentences.style.color = 'blue';
});
// Le 2 fait référence au troisième nombre

// Il était aussi possible de ne faire qu'une variable ('color') et de remplacer tous les noms de couleurs (var) en 'color'
// Ici, nous avons fictivement créé 3 tableaux au lieu d'un seul.
