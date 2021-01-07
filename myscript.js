let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
let turn = "O";

function press(x,y) {
    if (turn == "O"){

var audio = new Audio('p1.m4a');
audio.play();
    } else {
var audio2 = new Audio('p2.m4a');
audio2.play();
    }

if (turn == "O")
{
    turn = "X";

}else{
    turn = "O";
}
    // Do stuff
    board[x][y] = turn;
    let cell = document.getElementById(`${x}${y}`);
    cell.innerText = turn;
    if (board[0][0] == turn && board[0][1] == turn && board[0][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();

    }
    if (board[0][0] == turn && board[1][0] == turn && board[2][0] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }

    if (board[0][1] == turn && board[1][1] == turn && board[2][1] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    if (board[0][2] == turn && board[1][2] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    if (board[1][0] == turn && board[1][1] == turn && board[1][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    if (board[2][0] == turn && board[2][1] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
        mod();
    }
    console.log(x,y)
    
}


function handleReset(){

    for (let index = 0; index <= 2; index++) {
        // const element = array[index];
        for (let index2 = 0; index2 <= 2; index2++) {
            // const element = array[index];
            document.getElementById(`${index}${index2}`).innerText =``;
            board[index][index2] = '';
        }
        
    }
    document.getElementById("status").innerText = ``;
    let turn = "O";

}

function mod(){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }