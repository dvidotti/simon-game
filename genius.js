// Global Variables
let userPoints = 0;
const notes = ['c', 'e', 'g', 'a'];
let counter = 0;
let random4 = () => Math.round(Math.random() * 3);
let melodyTry = [];
let newMel = [];
let playButton = document.querySelectorAll('.btn');
let redBtn = document.querySelector('.red');
let yellowBtn = document.querySelector('.yellow');
let blueBtn = document.querySelector('.blue');
let greenBtn = document.querySelector('.green');
let game = document.getElementById('show-game');
let startButton = document.getElementById('start-game');
let gameFinish = false;
let youWin = document.getElementById('you-win');
let gameOver = document.getElementById('game-over');

// Initial Elements Style
game.style.display ='flex';
gameOver.style.display ='none';
youWin.style.display ='none';
redBtn.classList.remove('red');
yellowBtn.classList.remove('yellow');
blueBtn.classList.remove('blue');
greenBtn.classList.remove('green');


// Start the game
function startGame() {
   startButton.style.display = 'none';
   game.style.display = 'flex'; 
   gameOver.style.display = 'none';
  playButton.forEach(e => {
    e.classList.remove('red');
    e.classList.remove('yellow');
    e.classList.remove('blue');
    e.classList.remove('green');
   })
  picSamplers();
  playMelody(); 
}

// Change buttons opacity while cliking
function lightButton(z) {
  for ( let i = 0; i < playButton.length; i += 1){ 
      if (z === 'c'){ 
        playButton[0].classList.add('red')
        setTimeout(() => {  
          playButton[0].classList.remove('red')
        }, 500); 
      } else if (z === 'e'){
        playButton[1].classList.add('yellow')
        setTimeout(() => {  
          playButton[1].classList.remove('yellow')
        }, 500); 
      } else if (z === 'g'){
        playButton[2].classList.add('blue')
        setTimeout(() => {  
        playButton[2].classList.remove('blue')
        }, 500); 
      } else if (z === 'a'){
        playButton[3].classList.add('green')
        setTimeout(() => {  
        playButton[3].classList.remove('green')
        }, 500); 
      } 
  }
}

// Answer the call from the button and play the note
function playNote(note) { console.log(note);
  lightButton(note);
  melodyTry.push(note);
  const noteAudio = new Audio(`${note}.mp3`);
  noteAudio.play();
  noteAudio.addEventListener('ended', () => {
  compareMelodies();
  });
}


// Create random melodies & control game levels
function picSamplers(){
  if (gameFinish === false)
  if (userPoints <= 2){
   for (let i = 0; i < 3; i += 1) {
     newMel.push(notes[random4()]);
    } 
} else if (userPoints > 2 &&  userPoints <= 4){
    for (let i = 0; i < 5; i += 1) {
     newMel.push(notes[random4()]);
    }
  } else if (userPoints >= 5 && userPoints <= 6){
     for (let i = 0; i < 7; i += 1) {
      newMel.push(notes[random4()]);
     }
  } else if (userPoints >= 7 && userPoints < 9){
     for (let i = 0; i < 3; i += 1) {
      newMel.push(notes[random4()]);
     } 
  } else if (userPoints === 9) {
    melodyTry = [];
    newMel = [];
    userPoints =0;
    counter = 0;  
    youWin.style.display = 'flex';
  }
 }

 // Play random melodie & Give opactiy to the keys while playing
function playMelody() { 
  if (gameFinish === false){
  const audioSeq = [];
  for (let i = 0; i < newMel.length; i += 1) {
    const note = new Audio(`${newMel[i]}.mp3`);
    audioSeq.push(note);
  }

  for (let i = 0; i < audioSeq.length; i += 1) {
    if (i < audioSeq.length - 1) {
      audioSeq[i].addEventListener('ended', () => {
        audioSeq[i + 1].play();

        if (userPoints <=7){
        if (audioSeq[i + 1].src === 'file:///dvidotti/simon-game/c.mp3'){ 
          playButton[0].classList.add('red')
          setTimeout(() => {  
            playButton[0].classList.remove('red')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/e.mp3'){
          playButton[1].classList.add('yellow')
          setTimeout(() => {  
            playButton[1].classList.remove('yellow')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/g.mp3'){
          playButton[2].classList.add('blue')
          setTimeout(() => {  
          playButton[2].classList.remove('blue')
          }, 500); 
        } else if (audioSeq[i + 1].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/a.mp3'){
          playButton[3].classList.add('green')
          setTimeout(() => {  
          playButton[3].classList.remove('green')
          }, 500); 
        }
      } 
      });
    }
  }
  audioSeq[0].play();
   if (userPoints <= 7){
    if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/c.mp3'){ 
      playButton[0].classList.add('red')
      setTimeout(() => {  
        playButton[0].classList.remove('red')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/e.mp3'){
      playButton[1].classList.add('yellow')
      setTimeout(() => {  
        playButton[1].classList.remove('yellow')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/g.mp3'){
      playButton[2].classList.add('blue')
      setTimeout(() => {  
      playButton[2].classList.remove('blue')
      }, 500); 
    } else if (audioSeq[0].src === 'file:///Users/danilovidotti/Documents/CODE%20PROJECTS/ironhack/Projetc1/a.mp3'){
      playButton[3].classList.add('green')
      setTimeout(() => {  
      playButton[3].classList.remove('green')
      }, 500); 
    }
  }
  }
}


// Compare Melodies & Condition for game over
function compareMelodies(){
  if(gameFinish === false){
  if (newMel.length === melodyTry.length){
    if (JSON.stringify(newMel) !== JSON.stringify(melodyTry)) {
      gameFinish === true;
      newMel = [];
      melodyTry = [];
      userPoints = 0;
      counter = 0;
      gameOver.style.display = 'flex';
    } else if (JSON.stringify(newMel) === JSON.stringify    (melodyTry)){ 
      counter += 1;
      userPoints += 1;
      newMel = [];
      melodyTry = []; 
      picSamplers();
      setTimeout(playMelody,1000);  
  } 
  }
}
}

