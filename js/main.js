alert("Правила игры: \n-Каждый ходит по очереди. \n-Основная задача поставить в ряд по вертикали, горизонтали, или диагонали пять фишек. \n-Побеждает тот, кто сделает это первым. \nПриятной игры!")
var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlyr');

let player = "x";
let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
let winIndex = [
    [1,2,3,4,5],
    [2,3,4,5,6],
    [3,4,5,6,7],
    [4,5,6,7,8],
    [5,6,7,8,9],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [12,13,14,15,16],
    [13,14,15,16,17],
    [14,15,16,17,18],
    [15,16,17,18,19],
    [16,17,18,19,20],
    [21,22,23,24,25],
    [22,23,24,25,26],
    [23,24,25,26,27],
    [24,25,26,27,28],
    [25,26,27,28,29],
    [26,27,28,29,30],
    [31,32,33,34,35],
    [32,33,34,35,36],
    [33,34,35,36,37],
    [34,35,36,37,38],
    [35,36,37,38,39],
    [36,37,38,39,40],
    [41,42,43,44,45],
    [42,43,44,45,46],
    [43,44,45,46,47],
    [44,45,46,47,48],
    [45,46,47,48,49],
    [46,47,48,49,50],
    [51,52,53,54,55],
    [52,53,54,55,56],
    [53,54,55,56,57],
    [54,55,56,57,58],
    [55,56,57,58,59],
    [56,57,58,59,60],
    [61,62,63,64,65],
    [62,63,64,65,66],
    [63,64,65,66,67],
    [64,65,66,67,68],
    [65,66,67,68,69],
    [66,67,68,69,70],
    [71,72,73,74,75],
    [72,73,74,75,76],
    [73,74,75,76,77],
    [74,75,76,77,78],
    [75,76,77,78,79],
    [76,77,78,79,80],
    [81,82,83,84,85],
    [82,83,84,85,86],
    [83,84,85,86,87],
    [84,85,86,87,88],
    [85,86,87,88,89],
    [86,87,88,89,90],
    [91,92,93,94,95],
    [92,93,94,95,96],
    [93,94,95,96,97],
    [94,95,96,97,98],
    [95,96,97,98,99],
    [96,97,98,99,100],
    [1,11,21,31,41],
    [11,21,31,41,51],
    [21,31,41,51,61],
    [31,41,51,61,71],
    [41,51,61,71,81],
    [51,61,71,81,91],
    [2,12,22,32,42],
    [12,22,32,42,52],
    [22,32,42,52,62],
    [32,42,52,62,72],
    [42,52,62,72,82],
    [52,62,72,82,92],
    [3,13,23,33,43],
    [13,23,33,43,53],
    [23,33,43,53,63],
    [33,43,53,63,73],
    [43,53,63,73,83],
    [53,63,73,83,93],
    [4,14,24,34,44],
    [14,24,34,44,54],
    [24,34,44,54,64],
    [34,44,54,64,74],
    [44,54,64,74,84],
    [54,64,74,84,94],
    [5,15,25,35,45],
    [15,25,35,45,55],
    [25,35,45,55,65],
    [35,45,55,65,75],
    [45,55,65,75,85],
    [55,65,75,85,95],
    [6,16,26,36,46],
    [16,26,36,46,56],
    [26,36,46,56,66],
    [36,46,56,66,76],
    [46,56,66,76,86],
    [56,66,76,86,96],
    [7,17,27,37,47],
    [17,27,37,47,57],
    [27,37,47,57,67],
    [37,47,57,67,77],
    [47,57,67,77,87],
    [57,67,77,87,97],
    [8,18,28,38,48],
    [18,28,38,48,58],
    [28,38,48,58,68],
    [38,48,58,68,78],
    [48,58,68,78,88],
    [58,68,78,88,98],
    [9,19,29,39,49],
    [19,29,39,49,59],
    [29,39,49,59,69],
    [39,49,59,69,79],
    [49,59,69,79,89],
    [59,69,79,89,99],
    [10,20,30,40,50],
    [20,30,40,50,60],
    [30,40,50,60,70],
    [40,50,60,70,80],
    [50,60,70,80,90],
    [60,70,80,90,100],
    [1,12,23,34,45],
    [2,13,24,35,46],
    [3,14,25,36,47],
    [4,15,26,37,48],
    [5,16,27,38,49], 
    [6,17,28,39,50], 
    [11,22,33,44,55], 
    [12,23,34,45,56], 
    [13,24,35,46,57], 
    [14,25,36,47,58], 
    [15,26,37,48,59], 
    [16,27,38,49,60], 
    [21,32,43,54,65], 
    [22,33,44,55,66], 
    [23,34,45,56,67], 
    [24,35,46,57,68], 
    [25,36,47,58,69], 
    [26,37,48,59,70], 
    [31,42,53,64,75], 
    [32,43,54,65,76], 
    [33,44,55,66,77], 
    [34,45,56,67,78], 
    [35,46,57,68,79], 
    [36,47,58,69,80], 
    [41,52,63,74,85], 
    [42,53,64,75,86], 
    [43,54,65,76,87], 
    [44,55,66,77,88], 
    [45,56,67,78,89], 
    [46,57,68,79,90], 
    [51,62,73,84,95], 
    [52,63,74,85,96], 
    [53,64,75,86,97], 
    [54,65,76,87,98], 
    [55,66,77,88,99], 
    [56,67,78,89,100],
    [10,19,28,37,46],
    [9,18,27,36,45],
    [8,17,26,35,44],
    [7,16,25,34,43],
    [6,15,24,33,42],
    [5,14,23,32,41],
    [20,29,38,47,56],
    [19,28,37,46,55],
    [18,27,36,45,54],
    [17,26,35,44,53],
    [16,25,34,43,52],
    [15,24,33,42,51],
    [30,39,48,57,66],
    [29,38,47,56,65],
    [28,37,46,55,64],
    [27,36,45,54,63],
    [26,35,44,53,62],
    [25,34,43,52,61],
    [40,49,58,67,76],
    [39,48,57,66,75],
    [38,47,56,65,74],
    [37,46,55,64,73],
    [36,45,54,63,72],
    [35,44,53,63,72],
    [50,59,68,77,86],
    [49,58,67,76,85],
    [48,57,66,75,84],
    [47,56,65,74,83],
    [46,55,64,73,82],
    [45,54,63,72,81],
    [60,69,78,87,96],
    [59,68,77,86,95],
    [58,67,76,85,94],
    [57,66,75,84,93],
    [56,65,74,83,92],
    [55,64,73,82,91]
];
   

for(let i = 1; i <=100; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    let data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(let i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выиграл: " + player);
    }else {
        let draw = true;
        for(let i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(let i in winIndex) {
        let win = true;
        for(let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}