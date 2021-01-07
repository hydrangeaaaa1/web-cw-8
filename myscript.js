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
    }
    if (board[0][0] == turn && board[1][0] == turn && board[2][0] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    if (board[0][0] == turn && board[1][1] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }

    if (board[0][1] == turn && board[1][1] == turn && board[2][1] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    if (board[0][2] == turn && board[1][2] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    if (board[1][0] == turn && board[2][1] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    if (board[2][0] == turn && board[2][1] == turn && board[2][2] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    if (board[0][2] == turn && board[1][1] == turn && board[2][0] == turn )
    {
        document.getElementById("status").innerText = `${turn} wins`;
    }
    console.log(x,y)
    
}

