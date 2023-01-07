let game = false;
let out = '';
let choice = 0;
let numberclick = 0;
let turn = "y";
let box = "pos1";
let wincase = 0;
let turnbox = document.getElementById("turn");
let startbutton = document.getElementById("start");
let box1 = document.getElementById("pos1");
let box2 = document.getElementById("pos2");
let box3 = document.getElementById("pos3");
let box4 = document.getElementById("pos4");
let box5 = document.getElementById("pos5");
let box6 = document.getElementById("pos6");
let box7 = document.getElementById("pos7");
let box8 = document.getElementById("pos8");
let box9 = document.getElementById("pos9");
let box1xoro, box2xoro, box3xoro, box4xoro, box5xoro, box6xoro, box7xoro, box8xoro, box9xoro ;
let one23, four56, seven89, one47, two58, three69, one59, seven53, value;

function resetBoard() {
    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
}
function changeTurn() {
    if (turn == "o"){
        turnbox.innerHTML = "O Turn";
        turn = "x";
        out = 'X';

    }
    else if (turn == "x") {
        turnbox.innerHTML = "X Turn";
        turn = "o";
        out = 'O';
    }
}
function placexoro() {
    document.getElementById(box).innerHTML = out;
}
function StartGame() {
    resetBoard();
    turnbox.innerHTML = "X Turn";
    turn = "o";
    out = 'o';
    numberclick = 0;

}
function getbox() {
    box1xoro = box1.innerHTML;
    box2xoro = box2.innerHTML;
    box3xoro = box3.innerHTML;
    box4xoro = box4.innerHTML;
    box5xoro = box5.innerHTML;
    box6xoro = box6.innerHTML;
    box7xoro = box7.innerHTML;
    box8xoro = box8.innerHTML;
    box9xoro = box9.innerHTML;
    one23 = box1xoro + box2xoro + box3xoro;
    four56 = box4xoro + box5xoro + box6xoro;
    seven89 = box7xoro + box8xoro + box9xoro;
    one47 = box1xoro + box4xoro + box7xoro;
    two58 = box2xoro + box5xoro + box8xoro;
    three69 = box3xoro + box6xoro + box9xoro;
    one59 = box1xoro + box5xoro + box9xoro;
    seven53 = box7xoro + box5xoro + box3xoro;


}
function winreset() {
    if (wincase == 1) {
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
    }
    else if (wincase == 2){
    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
    }
    else if (wincase == 3){
        box1.innerHTML = '';
        box2.innerHTML = '';
        box3.innerHTML = '';
        box4.innerHTML = '';
        box5.innerHTML = '';
        box6.innerHTML = '';
    }
    else if (wincase == 4){
        box5.innerHTML = '';
        box2.innerHTML = '';
        box3.innerHTML = '';
        box6.innerHTML = '';
        box8.innerHTML = '';
        box9.innerHTML = '';
    }
    else if (wincase == 5){
        box1.innerHTML = '';
        box4.innerHTML = '';
        box3.innerHTML = '';
        box7.innerHTML = '';
        box6.innerHTML = '';
        box9.innerHTML = '';
    }
    else if (wincase == 6){
        box1.innerHTML = '';
        box2.innerHTML = '';
        box4.innerHTML = '';
        box7.innerHTML = '';
        box8.innerHTML = '';
        box5.innerHTML = '';
    }
    else if (wincase == 7){
        box4.innerHTML = '';
        box2.innerHTML = '';
        box3.innerHTML = '';
        box7.innerHTML = '';
        box8.innerHTML = '';
        box6.innerHTML = '';
    }
    else if (wincase == 8){
        box1.innerHTML = '';
        box2.innerHTML = '';
        box4.innerHTML = '';
        box6.innerHTML = '';
        box8.innerHTML = '';
        box9.innerHTML = '';
    }
}
function yesOrNo() {
    value = document.getElementById(box).innerHTML
    if (value == '') {
        numberclick += 1;
        changeTurn();
        placexoro();
        getbox();
        winorlose();
    }
    else {
        document.getElementById('turn').innerHTML = "tap different box";
    }
}
function win(xorO){
if (xorO == 'x'){
    turnbox.innerHTML = "X wins!";
    winreset();
}
else if (xorO == 'o'){
    turnbox.innerHTML = "O wins!";
    winreset();
}
else if (xorO == 't') {
    turnbox.innerHTML = "Tie";
    resetBoard();
}
}
function winorlose() {
    if (one23 == "XXX")        {wincase = 1;win('x');}
    else if (one23 == "OOO")   {wincase = 1;win('o');}
    else if (four56 == "XXX")  {wincase = 2;win('x');}
    else if (four56 == "OOO")  {wincase = 2;win('o');}
    else if (seven89 == "XXX") {wincase = 3;win('x');}
    else if (seven89 == "OOO") {wincase = 3;win('o');}
    else if (one47 == "XXX")   {wincase = 4;win('x');}
    else if (one47 == "OOO")   {wincase = 4;win('o');}
    else if (two58 == "XXX")   {wincase = 5;win('x');}
    else if (two58 == "OOO")   {wincase = 5;win('o');}
    else if (three69 == "XXX") {wincase = 6;win('x');}
    else if (three69 == "OOO") {wincase = 6;win('o');}
    else if (one59 == "XXX")   {wincase = 7;win('x');}
    else if (one59 == "OOO")   {wincase = 7;win('o');}
    else if (seven53 == "XXX") {wincase = 8;win('x');}
    else if (seven53 == "OOO") {wincase = 8;win('o');}
    else if (numberclick >= 9) {win('t');}
}

function click1() {box = "pos1";yesOrNo();}
function click2() {box = "pos2";yesOrNo();}
function click3() {box = "pos3";yesOrNo();}
function click4() {box = "pos4";yesOrNo();}
function click5() {box = "pos5";yesOrNo();}
function click6() {box = "pos6";yesOrNo();}
function click7() {box = "pos7";yesOrNo();}
function click8() {box = "pos8";yesOrNo();}
function click9() {box = "pos9";yesOrNo();}

startbutton.addEventListener("click" , function() {
    StartGame()
});
box2.addEventListener("click" , function() {
    click2()
});
box3.addEventListener("click" , function() {
    click3()
});
box1.addEventListener("click" , function() {
    click1()
});
box4.addEventListener("click" , function() {
    click4()
});
box5.addEventListener("click" , function() {
    click5()
});
box6.addEventListener("click" , function() {
    click6()
});
box7.addEventListener("click" , function() {
    click7()
});
box8.addEventListener("click" , function() {
    click8()
});
box9.addEventListener("click" , function() {
    click9()
});