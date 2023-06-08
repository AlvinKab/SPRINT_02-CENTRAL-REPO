const cells = document.querySelectorAll(".cell");
let player_x ="X"
let player_o = "O";
let turn = player_x;
let roundWon = false
let restartBtn= document.getElementById('restart')
restartBtn.addEventListener('click',restart)
let draw = true



let gameStatus = true;

const winnigCombo = [
   [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
let options = Array(9).fill(null)



cells.forEach(cell =>cell.addEventListener("click",clickHandle, {once: true}));


function clickHandle(e){ 
   if (gameStatus == true && roundWon == false){
      changePlayer(e)
      checkWinner()
   } 
   
}

function changePlayer(e){
   if (turn==player_x){
      e.target.append(turn)
      turn = player_o
      document.getElementById('X').style.backgroundColor = 'white'
      document.getElementById('X').style.color = 'black'
      document.getElementById('O').style.backgroundColor = 'black'
      document.getElementById('O').style.color = 'white'
   } else{
      e.target.append(turn)
      turn = player_x
      document.getElementById('O').style.backgroundColor = 'white'
      document.getElementById('O').style.color = 'black'
      document.getElementById('X').style.backgroundColor = 'black'
      document.getElementById('X').style.color = 'white'
      
   }
   document.getElementById("turn").innerHTML =turn + "'S " + " TURN"
   const id = e.target.id
   if (!options[id]){
      options[id] = turn
   }
}

function checkWinner(){
   let roundWon = false
   draw = true
   for (let i of winnigCombo){
      let [a,b,c] = i
      if ( options[a] && (options[a] == options[b] && options[a] == options[c])){
         roundWon = true
         gameStatus = false
         if(options[c] == "X"){
            document.getElementById("turn").innerHTML ="O"+ " WORN"
            document.getElementById("restart").style.display = "block"
         } else  {
            document.getElementById("turn").innerHTML ="X" + " WORN"
            document.getElementById("restart").style.display = "block"
         }
         draw = false
         document.getElementById(a).classList.add("winning-row");
         document.getElementById(b).classList.add("winning-row");
         document.getElementById(c).classList.add("winning-row");
      }
   }  
   if (draw && !roundWon && !options.includes(null)){
      document.getElementById("turn").innerHTML ="DRAW"
      gameStatus = false
      document.getElementById("restart").style.display = "block"
   }  
}
function restart(){
   cells.forEach(cell =>cell.addEventListener("click",clickHandle, {once: true}));
   options.fill(null)
   cells.forEach(cell =>{
      cell.innerText = "";
   })
   turn = player_x
   gameStatus = true
   roundWon = false
   draw = true
   cells.forEach(cell => cell.classList.remove("winning-row"));
   document.getElementById("restart").style.display = "none"
   document.getElementById("turn").innerHTML =turn + "'S " + " TURN"
   document.getElementById('O').style.backgroundColor = 'white'
   document.getElementById('O').style.color = 'black'
   document.getElementById('X').style.backgroundColor = 'black'
   document.getElementById('X').style.color = 'white'
}
