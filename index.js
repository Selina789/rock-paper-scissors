/*
✊ - ROCK,
✋ - PAPER,
✌️ - SCISSORS
*/

let emoji = ["✊", "✋", "✌️", "✊", "✋", "✌️"]
let win = 0;
let lose = 0;
let tie = 0;
let statusAlert = document.getElementById("text-change");
let userEmoji = document.getElementById("emoji-user");
let enemyEmoji = document.getElementById("emoji-enemy");
let scoreCount = document.getElementById("score-section");

playGame.addEventListener("click", function(){
  let emoji1 = Math.floor(Math.random() * emoji.length);
  let emoji2 = Math.floor(Math.random() * emoji.length);

  let store1 = emoji[emoji1];
  let store2 = emoji[emoji2];

  userEmoji.textContent = store1;
  enemyEmoji.textContent = store2;

  if(store1 === "✊" && store2 === "✌️"){
    win++;
    statusAlert.textContent = "You chose rock, enemy chose scissors. You WON."
  }
  else if(store1 === "✊" && store2 === "✋"){
    lose++;
    statusAlert.textContent = "You chose rock, enemy chose paper. You LOST."
  }
  else if(store1 === "✊" && store2 === "✊"){
    tie++;
    statusAlert.textContent = "You chose rock, enemy chose rock. It's a TIE."
  }

  if(store1 === "✌️" && store2 === "✋"){
    win++;
    statusAlert.textContent = "You chose scissors, enemy chose paper. You WON."
  }
  else if(store1 === "✌️" && store2 === "✊"){
    lose++;
    statusAlert.textContent = "You chose scissors, enemy chose rock. You LOST."
  }
  else if(store1 === "✌️" && store2 === "✌️"){
    tie++;
    statusAlert.textContent = "You chose scissors, enemy chose scissors. It's a TIE."
  }

  if(store1 === "✋" && store2 === "✊"){
    win++;
    statusAlert.textContent = "You chose paper, enemy chose rock. You WON."
  }
  else if(store1 === "✋" && store2 === "✌️"){
    lose++;
    statusAlert.textContent = "You chose paper, enemy chose scissors. You LOST."
  }
  else if(store1 === "✋" && store2 === "✋"){
    tie++;
    statusAlert.textContent = "You chose paper, enemy chose paper. It's a TIE."
  }

  scoreCount.textContent = "Win: " + win + " " + " Lose: " + lose + " " + " Tie: " + tie + " " ;
})

function deleteAll(){
  win = 0;
  lose = 0;
  tie = 0;
  statusAlert.textContent = "Score resetted."
  scoreCount.textContent = "Win: " + win + " " + " Lose: " + lose + " " + " Tie: " + tie + " " ;
  userEmoji.textContent = "";
  enemyEmoji.textContent = "";
}