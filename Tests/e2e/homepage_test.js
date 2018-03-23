Feature('Home page');

Scenario('La modal de connexion apparait', (I) => {
  I.amOnPage('/');
  I.click('.button_connecte');
  I.see('Votre pseudo :');
});
