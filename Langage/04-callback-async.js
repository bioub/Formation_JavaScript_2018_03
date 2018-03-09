setTimeout(function cb1() {
  console.log('cb1');
}, 1000);

setTimeout(function cb2() {
  console.log('cb2');
}, 500);

setTimeout(function cb3() {
  console.log('cb3');
}, 1000);

console.log('fin');

// pile d'appels
// ^
// |
// |
// |
// |                                                 idle  log(cb2)        log(cb1)    log(cb3)
// |setTimeout - setTimeout - setTimeout - log(fin) ..⟳.. cb2      ..⟳.. cb1      -  cb3
// +-------------------------------------------------------500ms-----------1s----------1s0002------> temps
// sortie:                                 fin             cb2             cb1         cb3

// file d'attente : 
