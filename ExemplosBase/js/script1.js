"use strict";
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//definir uma bolinha
let bolinha = {
    cor : "red",
    x : Math.round(Math.random()*500),
    y : Math.round(Math.random()*500),
    raio : 15
}

function desenhar(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(bolinha.x, bolinha.y, bolinha.raio,0,2*Math.PI);
    ctx.fillStyle = bolinha.cor;
    ctx.fill();
}

desenhar();