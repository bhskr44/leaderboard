const createScores = async (entry) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/K3oPtjsKF4NxRWJbtLT2/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    },
  );
};

export default createScores;
