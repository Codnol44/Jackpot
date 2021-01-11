document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let cagnotte = 0;
  let lives = 10;
  let width = 10;
  let nbPerdu = 80;
  let nbBonusx2 = 12;
  let nbBonusx5 = 7;
  let nbBonusx100 = 1;
  let squares = [];

  //create board
  function createBoard() {
    //get shuffled game array with random gains
    const nbPerduArray = Array(nbPerdu).fill('perdu');
    const nbBonusx2Array = Array(nbBonusx2).fill('Bonusx2');
    const nbBonusx5Array = Array(nbBonusx5).fill('Bonusx5');
    const nbBonusx100Array = Array(nbBonusx100).fill('Bonusx100');
    //concatenate the 4 arrays in one
    const gameArray = nbPerduArray.concat(nbBonusx2Array).concat(nbBonusx5Array).concat(nbBonusx100Array);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

    for(let i=0; i<width*width; i++) {
      const square = document.createElement('div');
      square.setAttribute('id', i);
      square.classList.add(shuffledArray[i]);
      grid.appendChild(square);
      squares.push(square);

      //normal click
      square.addEventListener('click', function(e) {
        choice(square);
      });
    }
  }
  createBoard();

  //click on square actions
  function choice(square) {
    let currentId = square.id;
    if(lives === 0) {
      alert('Votre score est de : ' + cagnotte);
      return;

    }
    if(square.classList.contains('perdu')) {
      square.classList.add('perdu');
      square.innerHTML = 'perdu';

    } else if(square.classList.contains('Bonusx2')) {
      square.classList.add('Bonusx2');
      square.innerHTML = 'Bonusx2';
      cagnotte = cagnotte + 2;

    } else if (square.classList.contains('Bonusx5')) {
      square.classList.add('Bonusx5');
      square.innerHTML = 'Bonusx5';
      cagnotte = cagnotte + 5;

    } else if (square.classList.contains('Bonusx100')) {
      square.classList.add('Bonusx100');
      square.innerHTML = 'Bonusx100';
      cagnotte = cagnotte + 100;
    }
    lives--;
    //display the results
    document.getElementById('lives').innerHTML = lives;
    document.getElementById('cagnotte').innerHTML = cagnotte;
  }

});
