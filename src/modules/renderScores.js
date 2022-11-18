import displaySingleScore from './displaySingleScore.js';

const renderScores = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/K3oPtjsKF4NxRWJbtLT2/scores/',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const list = data.result;
        displaySingleScore(list);
      });
  } catch (error) {
    console.log(error);
  }
};

export default renderScores;
