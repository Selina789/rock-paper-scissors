let emoji = ["✊", "✋", "✌️", "✊", "✋", "✌️"]
let win = 0;
let lose = 0;
let tie = 0;
let statusAlert = document.getElementById("text-change");
let userEmoji = document.getElementById("emoji-user");
let enemyEmoji = document.getElementById("emoji-enemy");
let scoreCount = document.getElementById("score-section");
clickRock.addEventListener("click", function(){
  let emoji11 = Math.floor(Math.random() * emoji.length);
  let store11 = emoji[emoji11];
  enemyEmoji.textContent = store11;

  if(store11 === "✌️"){
    win++;
    statusAlert.textContent = "You chose rock, enemy chose scissors. You WON."
  }
  else if(store11 == "✋"){
    lose++;
    statusAlert.textContent = "You chose rock, enemy chose paper. You LOST."
  }
  else if(store11 == "✊"){
    tie++;
    statusAlert.textContent = "You chose rock, enemy chose rock. It's a TIE."
  }
  scoreCount.textContent = "Win: " + win + " " + " Lose: " + lose + " " + " Tie: " + tie + " " ;
})

clickPaper.addEventListener("click", function(){
  let emoji1 = Math.floor(Math.random() * emoji.length);
  let store1 = emoji[emoji1];
  enemyEmoji.textContent = store1;

  if(store1 === "✊"){
    win++;
    statusAlert.textContent = "You chose paper, enemy chose rock. You WON."
  }
  else if(store1 === "✌️"){
    lose++;
    statusAlert.textContent = "You chose paper, enemy chose scissors. You LOST."
  }
  else if(store1 === "✋"){
    tie++;
    statusAlert.textContent = "You chose paper, enemy chose paper. It's a TIE."
  }
  scoreCount.textContent = "Win: " + win + " " + " Lose: " + lose + " " + " Tie: " + tie + " " ;
})


clickScissors.addEventListener("click", function(){
  let emoji1 = Math.floor(Math.random() * emoji.length);
  let store1 = emoji[emoji1];
  enemyEmoji.textContent = store1;
  if(store1 === "✋"){
    win++;
    statusAlert.textContent = "You chose scissors, enemy chose paper. You WON."
  }
  else if(store1 === "✊"){
    lose++;
    statusAlert.textContent = "You chose scissors, enemy chose rock. You LOST."
  }
  else if(store1 === "✌️"){
    tie++;
    statusAlert.textContent = "You chose scissors, enemy chose scissors. It's a TIE."
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