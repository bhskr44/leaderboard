const createGame = async (entry) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(entry),
    },
  ).then((res) => res.json());
};

export default createGame;
