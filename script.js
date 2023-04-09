/*Psuedo code:

Level 1:

--Catching Falling bobas--

The game will be set up inside of a div which will be a grid of 12 columns and 10 rows.

Inside of the grid will be a div (boba cup img) which will be a div container that will catch all of the other divs(boba img) as they fall from the top of the grid.  

all of the bobas will be stored in an array and then be pushed into another array which is in the container div

when the user catches the boba they will gain 5 points and they will need 150 points to clear the level












*/


 /*----- constants- unchanging variables -----*/

 const bobaObj = {
    points: 5,
    image: 'imgs/boba.png',
};

const winScore = {
    lvl1 : 150,
    lvl2 : 200,
    lvl3 : 300,
};







   /*----- state-changing variables -----*/
let boardArr;
let tempArr;
let seconds = 30;


let player = {
    name: '',
    score: 0,
};









   /*----- cached elements  -----*/
const cupDiv = document.querySelectorAll('.boba-cup');
const emptyCup = document.getElementById('empty-cup');
const boardGrid = document.querySelectorAll('.grid');
const timerDisplay = document.getElementById('timer');
const currentScore = document.getElementById('score');
const neededScore = document.getElementById('score-needed');
const messagePlayer = document.getElementById('message');
const pauseGame = document.getElementById('Pause');
const newGame = document.getElementById('New');



   /*----- event listeners -----*/










   /*----- functions -----*/