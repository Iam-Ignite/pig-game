var scores, roundScore, acivePlayer, gamePlaying, userScore;

init();
alert('The first player to reach 100 points or more is the winner but you can stil add Your own winning Score below');
alert('Gameplay. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold": If the player rolls a 1, they score nothing and it becomes the next player\'s turn. If the player rolls any other number, it is added to their turn total and the player\'s turn continues. Double 6 is a lost if a player did not hold it');
//var answer = prompt('what will be the winning score');


document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {

        //random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dices = Math.floor(Math.random() * 6) + 1;

        // dispaly result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceDOM = document.querySelector('.dices');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dices-' + dices + '.png';

        if (roundScore >= 12) {
            scores[acivePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = '0';
            nextplayer();

        }
        else if (dice !== 1 && dices !== 1) {
            //add score
            roundScore += dice + dices;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }
        else {
            //next player
            nextplayer();
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add score in general
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.winning-socre').value;
        var winningScore;
        if (input) {
            winningScore = input;
        } 
        else {
            winningScore = 100;
        }


        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = '!Winner';

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dices').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }
        else {

            nextplayer();
        }
    }

});


function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dices').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //userScore = prompt('Add the winning score');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dices').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = ' Player 1';
    document.getElementById('name-1').textContent = ' Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

//
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');


// document.querySelector('#current-' + activePlayer).textContent = dice; 

//var x = document.querySelector('#score-0').textContent;
//console.log(x); 