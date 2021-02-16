var boardSize = 10;
var BOARD_TEXT =
    [
        [' ','A','B','C','D','E','F','G','H',' '],
        ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8'],
        ['7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7'],
        ['6',' ',' ',' ',' ',' ',' ',' ',' ','6'],
        ['5',' ',' ',' ',' ',' ',' ',' ',' ','5'],
        ['4',' ',' ',' ',' ',' ',' ',' ',' ','4'],
        ['3',' ',' ',' ',' ',' ',' ',' ',' ','3'],
        ['2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2'],
        ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1'],
        [' ','A','B','C','D','E','F','G','H',' ']
    ];

window.onload = prepareGameField;

function prepareGameField() {
    var board = document.createElement('table');
    board.style.borderCollapse = 'collapse';
    for (var i = 0; i < boardSize; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < boardSize; j++) {
            var cell = document.createElement('td');
            if(i == 0 || j == 0 || i == boardSize - 1 || j == boardSize - 1){
                if(j == boardSize - 1 || i == 0){
                    cell.className += 'rotate';
                }
            }
            else{
                cell.className = (i + j) % 2 == 0 ? 'white-cell' : 'black-cell';
            }
            cell.innerHTML = BOARD_TEXT[i][j];
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.getElementById('board').appendChild(board);
}