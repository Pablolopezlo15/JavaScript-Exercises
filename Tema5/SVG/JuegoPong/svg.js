var miCir;
var player1;
var player2;
var score1 = 0;
var score2 = 0;
var posX = 500;
var posY = 300;
var velX = 2;
var velY = 2;

window.onload = () => {
    miCir = document.getElementById("miCirculo");
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    svg = document.querySelector("svg");
    svg.addEventListener("mousemove", player1FollowMouse);

    document.addEventListener("keydown", player2KeyDown);
    document.addEventListener("keyup", player2KeyUp);

    setInterval(mueveCirculo, 1);
}


var gameInterval;

function startGame() {
    miCir = document.getElementById("miCirculo");
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    svg = document.querySelector("svg");
    svg.addEventListener("mousemove", player1FollowMouse);

    document.addEventListener("keydown", player2KeyDown);
    document.addEventListener("keyup", player2KeyUp);

    gameInterval = setInterval(mueveCirculo, 1);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', (event) => {
        startGame();
    });
});

var player2Up = false;
var player2Down = false;

function mueveCirculo() {
    var cx = posX;
    var cy = posY;
    var yplayer1 = parseInt(player1.getAttribute("y"));
    var yplayer2 = parseInt(player2.getAttribute("y"));

    if (cy < 15 || cy > 585) {
        velY = -velY;
    }

    if ((cx < 25 && cy >= yplayer1) && cy <= (yplayer1 + 80)) {
        velX = -velX;
    }

    if ((cx > 970 && cy >= yplayer2) && cy <= (yplayer2 + 80)) {
        velX = -velX;
    }

    posX += velX;
    posY += velY;

    miCir.setAttribute("cx", posX);
    miCir.setAttribute("cy", posY);

    if (cx < 0) {
        posX = 500;
        posY = 300;
        miCir.setAttribute("cx", posX);
        miCir.setAttribute("cy", posY);
        score2++;
        document.getElementById("score2").textContent = score2;
    }

    if (cx > 1000) {
        posX = 500;
        posY = 300;
        miCir.setAttribute("cx", posX);
        miCir.setAttribute("cy", posY);
        score1++;
        document.getElementById("score1").textContent = score1;
    }

    if (player2Up) {
        let y = yplayer2 - 5;
        if (y < 0) {
            y = 0;
        }
        player2.setAttribute("y", y);
    }

    if (player2Down) {
        let y = yplayer2 + 5;
        if (y > 520) {
            y = 520;
        }
        player2.setAttribute("y", y);
    }
}

function player1FollowMouse(e) {
    let y = e.clientY -150;
    if (y < 0) {
        y = 0;
    }
    if (y > 520) {
        y = 520;
    }
    player1.setAttribute("y", y);
}

function player2KeyDown(e) {
    if (e.key === "Shift") {
        player2Up = true;
    }
    if (e.key === "Control") {
        player2Down = true;
    }
}

function player2KeyUp(e) {
    if (e.key === "Shift") {
        player2Up = false;
    }
    if (e.key === "Control") {
        player2Down = false;
    }
}