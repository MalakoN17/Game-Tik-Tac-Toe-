// array of square in the board
var board = [];
function play (clickedId){
   // call to the turn of the player
    var playerspan = document.getElementById('player');
    var clickedElement = document.getElementById(clickedId);
    if (playerspan.innerText === 'X') {
        playerspan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId]= 'X'
        
    } else {
        playerspan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId]= 'O'
    }
   var topLeft = board[0]
   var topCenter = board[1]
   var topRight = board[2]
   var leftCenter = board[3]
   var middleCenter = board[4]
   var rightCenter = board[5]
   var leftBottom = board[6]
   var middleBottom = board[7]
   var rightBottom = board[8]
//  winning option 
// first option to win  
   if (topLeft !== undefined && topLeft === topCenter && topLeft=== topRight)
   alert('winner'+" "+topLeft);{

   }
//    second option to win
   if (leftCenter !== undefined && leftCenter === middleCenter && leftCenter === rightCenter)
   alert('winner'+" "+leftCenter);{
   }
//    third option to win
   if (leftBottom !== undefined && leftBottom === middleBottom && leftBottom === rightBottom)
   alert('winner'+" "+leftBottom);{
   } 
// forth option to win
if (topLeft !== undefined && topLeft === leftCenter &&topLeft === leftBottom)
   alert('winner'+" "+topLeft);{
   }  
// fith option to win 
if (topCenter !== undefined && topCenter === middleCenter && topCenter === middleBottom)
   alert('winner'+" "+topCenter);{
   }
// option six to win
if (topRight !== undefined && topRight === rightCenter && topRight === rightBottom)
   alert('winner'+" "+ topRight);{
   }
// seventh option to win    
   if (topLeft !== undefined && topLeft === middleCenter && topLeft === rightBottom)
   alert('winner'+" "+ topLeft);{
   }  
 //  eighth option to win 
    if (topRight !== undefined && topRight === middleCenter && topRight === leftBottom)
    alert('winner'+" "+topRight);{
    } 
   
 for (var i = 0; i < 1; i++) {
    var boardFull = true 
    if (topLeft===undefined ||topCenter===undefined ||topRight===undefined ||leftCenter===undefined ||middleCenter===undefined ||rightCenter===undefined ||leftBottom===undefined ||middleBottom===undefined ||rightBottom===undefined )
     { boardFull=false
        
    }
  else {
boardFull=true
alert('game over')
  }   
 }        
}
function reastart() {
   window.location = window.location.href;
}
var reastartBtn = document.querySelector('button');
reastartBtn.addEventListener('click', reastart);