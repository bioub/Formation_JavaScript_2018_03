// filter, map, foreach apparues en ES5 (IE9+)
// => programmation fonctionnelle (style de programmation
// où les fonctions remplacer les algos if/for...)

const nbs = [12, 33, 1, 4];

nbs.filter((elt) => elt % 2 === 0) // fonction prédicat
   .map((elt) => elt + 1) // fonction de transformation
   .forEach((elt) => console.log(elt));

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log(sum); // 50

console.log('fin');

// pile d'appels
// ^
// |
// |
// |                              log(13)   log(5)
// |=> - => - => - =>   => - =>   =>      - =>
// |filter            - map     - forEach          - log(fin)
// +-----------------------------------------------------------> temps
// sortie:                        13        5        fin
