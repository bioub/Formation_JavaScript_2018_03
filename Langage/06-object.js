// on manipule beaucoup d'objets existants

// définis dans le langage
console.log(typeof Math); // object
console.log(typeof JSON); // object

// définis par Node.js
console.log(typeof process); // object
console.log(typeof module); // object

// définis par le navigateur
console.log(typeof document); // object
console.log(typeof window); // object

// définis par le navigateur et Node.js
console.log(typeof console); // object

// Les objets JavaScript sont extensibles
// on peut leur ajouter des propriétés et des méthodes
// en réaliser un objet JS est un système clé/valeur

// Objet JavaScript, équivalent
// En PHP : tableau associatif
// En Java : à une Map
// En C++ : à une HashTable
// En C : à struct
// En Python: dictionnary

console.log(Math.sum); // undefined

// ajout de clé/valeur
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

// modification de clé/valeur
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2'));

// suppression de clé/valeur
delete Math.sum;
console.log(Math.sum); // undefined


// Pour accéder au contenu d'un objet, 2 opérateurs
console.log(Math.PI);
console['log'](Math['PI']);

const key = 'PI';
console.log(Math[key]);

// mauvaise pratique : étendre des objets
// que vous n'avez pas créé (Math, console...)
// faites plutôt : const myMath = { sum: (a, b) => a + b }

// Exemple d'extension d'objet standard pour un test
const assert = require('assert');
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';

try {
  assert.strictEqual(1 + 2, 3);
  const backupRandom = Math.random;
  Math.random = () => 0.25;
  assert.strictEqual(pileOuFace(), 'face');
  Math.random = () => 0.75;
  assert.strictEqual(pileOuFace(), 'pile');
  Math.random = backupRandom;
  console.log('Les tests passent');
}
catch (err) {
  console.error('Les test échouent, raison : ' + err.message);
  console.error(err.stack);
}

// Si besoin de nouveaux objets, 3 cas possibles

// 1 - objet créé une seule fois (Math, options de createInterface)
// syntaxe object literal

const coords = {
  x: 10,
  y: 20
};

console.log(coords.x); // 10

// on peut boucler sur les clés d'un objet avec for .. in

for (let key in coords) {
  console.log('clé', key);
  console.log('valeur', coords[key]);
}

// 2 - objets créés plusieurs fois sans méthodes (fonctions)
// fonction fabrique (factory function)

function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
    getInfos: function() {
      return 'Coords3d ' + this.y;
    }
  };
}

const coords3d = coords3dFactory(10, 20);
console.log(coords3d.z); // 0
console.log(coords3d.getInfos()); // Coords3d
const coords3dBis = coords3dFactory(10, 30);
console.log(coords3d.getInfos() === coords3dBis.getInfos()); // true, compare les retours
console.log(coords3d.getInfos === coords3dBis.getInfos); // false, compare les références

// 3 - objets créés plusieurs fois avec méthodes et types (fonctions)
// fonction constructeur (constructor function)
const Contact = function(prenom, nom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain', 'Bohdanowicz');

console.log(typeof romain); // object
console.log(romain._prenom); // Romain (censé être privée)
console.log(romain.hello()); // Bonjour je m'appelle Romain

const jean = new Contact('Jean', 'Dupont');
console.log(romain.hello === jean.hello); // true, compare les références

console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false


console.log(jean instanceof Contact); // true
console.log(jean instanceof Object); // true
console.log(jean instanceof String); // false

console.log(arguments instanceof Array); // false
const args = Array.from(arguments);
console.log(args instanceof Array); // true

// attention à utiliser la bonne propriété sinon extension d'objet
// element.innerHTML = '<b>Test</b>';
// element.innerHtml = '<b>Test</b>';
