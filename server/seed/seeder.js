import '../middleware/db-connect.js';


(() => {
  const userList = [];
  userList.push(
    new User({
      name: 'King',
      rounds: [{
        deckTitle: 'Дикие животные',
        cardsInDeck: 3,
        firstGuessCorrect: 2,
        totalGuess: 3,
      }],
    }),
  );
  User.insertMany(userList).catch((error) => console.log(error));

})();
