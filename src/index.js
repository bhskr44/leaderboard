import './css/style.css';
// import Game from './modules/Game.js';
import Scores from './modules/Scores.js';
// import createGame from './modules/createGame.js';
import saveScores from './modules/createScores.js';
import renderScores from './modules/renderScores.js';

// created = createGame(new Game('My Game'))
const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const newScore = document.querySelector('#score').value;
  let entry = new Scores(name, newScore);
  saveScores(entry);
  form.reset();
});

refresh.addEventListener('click', () => {
    renderScores();
});