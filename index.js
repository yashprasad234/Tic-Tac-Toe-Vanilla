const heading = document.querySelector(".heading");
const playBtn = document.querySelector(".play-btn");
const game = document.querySelector(".game");

let isXTurn = true;
let isGameOn = true;

const x = [];
const o = [];

playBtn.addEventListener("click", (e) => {
  playBtn.classList.remove("visible");
  playBtn.classList.add("not-visible");
  game.classList.remove("not-visible");
  game.classList.add("visible");
  heading.innerHTML = `Player 1: <span class="game-title" >X</span> and Player 2: <span class="game-title">O</span>`;
});

let turns = 0;

const handleClick = (e) => {
  const index = +e.target.id;
  if (turns < 9) {
    if (!x.includes(index) && !o.includes(index)) {
      if (isGameOn) {
        if (isXTurn) {
          x.push(index);
          document.getElementById(
            `${index}`
          ).innerHTML = `<span class="xo" >X</span>`;
          turns += 1;
          if (turns === 9 && isGameOn) {
            heading.innerHTML = `<span class="game-title" >Draw. <button onclick="(() => location.reload())()" class="reload-btn" >Reload</button> the page to play again.</span>`;
            isGameOn = false;
            game.removeEventListener("click", handleClick);
          }
          console.log(turns);
          isXTurn = false;
          // console.log(didWin(x));
          if (didWin(x)) {
            heading.innerHTML = `<span class="game-title" >Player 1 Won 🎉</span><br><span ><button onclick="(() => location.reload())()" class="reload-btn" >Reload</button> to play again.</span>`;
            isGameOn = false;
            game.removeEventListener("click", handleClick);
          }
        } else {
          o.push(index);
          document.getElementById(
            `${index}`
          ).innerHTML = `<span class="xo" >O</span>`;
          turns += 1;
          if (turns === 9 && isGameOn) {
            heading.innerHTML = `<span class="game-title" >Draw. <button onclick="(() => location.reload())()" class="reload-btn" >Reload</button> the page to play again.</span>`;
            isGameOn = false;
            game.removeEventListener("click", handleClick);
          }
          console.log(turns);
          isXTurn = true;
          // console.log(didWin(o));
          if (didWin(o)) {
            heading.innerHTML = `<span class="game-title" >Player 2 Won 🎉</span><br><span ><button onclick="(() => location.reload())()" class="reload-btn" >Reload</button> to play again.</span>`;
            isGameOn = false;
            game.removeEventListener("click", handleClick);
          }
        }
      }
    }
  }
};

game.addEventListener("click", handleClick);

const winningCon = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function didWin(arr) {
  for (let i = 0; i < winningCon.length; i++) {
    const [a, b, c] = winningCon[i];
    if (arr.includes(a) && arr.includes(b) && arr.includes(c)) return true;
  }
  return false;
}
