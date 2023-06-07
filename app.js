const games = [
  {
    id: 1,
    title: "Dinner Game",
    image: "./assets/whats-for-dinner-cat.gif",
    demo: "https://cching01099.github.io/DinnerGame/",
    repo: "https://github.com/cching01099/DinnerGame",
  },
  {
    id: 2,
    title: "Rabbit Year",
    image: "./assets/year-of-the-rabbit.gif",
    demo: "https://cching01099.github.io/RabbitYear/",
    repo: "https://github.com/cching01099/RabbitYear",
  },
  {
    id: 3,
    title: "Snake Game",
    image: "./assets/nokia-snake-game.gif",
    demo: "https://cching01099.github.io/SnakeGame/",
    repo: "https://github.com/cching01099/SnakeGame",
  },
  {
    id: 4,
    title: "Bouncing Ball",
    image: "./assets/bouncing-ball.gif",
    demo: "https://cching01099.github.io/BouncingBall/",
    repo: "https://github.com/cching01099/BouncingBall",
  },
  {
    id: 5,
    title: "Memorizing Card",
    image: "./assets/memorizing-card.gif",
    demo: "https://cching01099.github.io/Memorizing-Card-Game/",
    repo: "https://github.com/cching01099/Memorizing-Card-Game",
  },
];

const gameList = document.getElementById("games");
function generateGames() {
  gameList.innerHTML = ``;
  games.forEach((game) => {
    gameList.innerHTML += `
    <div class="game">
                <div class="title">#<span class="id">${game.id} </span>${game.title}</div>
                <img class="img" src="${game.image}" alt="${game.title}">
                <div class="links">
                    <a class="link demo-link" href="${game.demo}" target="_blank"><i class="fa-regular fa-eye"></i>demo</a>
                    <a class="link repo-link" href="${game.repo}" target="_blank"><i class="fa-brands fa-github"></i>repo</a>
                </div>
            </div>
    `;
  });
}
generateGames();
