function externe(msg) {
  // Portée de closure (portée sauvegardée automatique)
  // 2 conditions réunies pour avoir la closure :
  // 1 - fonction imbriquée dans une fonction ou un bloc
  // 2 - fonction imbriquée soit appelée en dehors
  function interne() {
    console.log(msg);
  }

  return interne;
}

const hello = externe('Hello');

hello();

// pile d'appels
// ^
// |
// |
// |
// |
// |externe - hello/interne
// +----------------------------> temps

/*
function requete(url) {
  $.get(url, function() {
    console.log(url);
  });
}
*/

// Dans 1s : 4 4 4
for (var i=1; i<=3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1s : 1 2 3
for (var i=1; i<=3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s : 1 2 3
for (let i=1; i<=3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


// .........
