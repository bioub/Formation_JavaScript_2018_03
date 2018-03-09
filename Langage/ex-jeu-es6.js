// 1 - method properties
const random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');


// 2 - Utiliser class
class Jeu {
  /**
   * Constructeur de Partie
   * @class
   * @param {Object} [options = {}] - Les options de la partie
   * @param {number} [options.min = 0] - La borne min
   * @param {number} [options.max = 100] - La borne max
   */
  constructor(options = {}) { // 3 - utiliser default value

    // 4 - object destructuring
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this._essais = [];
    this._entierAlea = random.getIntInclusive(min, max);
  }

  jouer() {
    if (this._essais.length) {
      // 5 - template literal
      console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6 - API Number
      const entierSaisi = Number.parseInt(answer);

      // 6 - API Number
      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : Vous devez saisir un entier');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log(`C'est gagné !`);
      this._rl.close();
    });
  }
}

const jeu = new Jeu();
jeu.jouer();
