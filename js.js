let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x - 50 ,this.y - 50,this.largura,this.altura);
        ctx.closePath();
    }
}
function animacao(){
    ctx.clearRect(0,0,400,400)
    retangulo.desenha();
   
    requestAnimationFrame(animacao)
}
animacao();

document.addEventListener("mousemove" ,function(evento) {
    
    // if (tecla == "ArrowUp") { retangulo.y = retangulo.y - 10 }
    // if (tecla == "ArrowDown") { retangulo.y = retangulo.y + 10 }
    // if (tecla == "ArrowLeft") { retangulo.x = retangulo.x - 10 }
    // if (tecla == "ArrowRight") { retangulo.x = retangulo.x + 10 }
    let rect =  canvas.getBoundingClientRect(); 
    let x_mouse = evento.clientX - rect.left; 
    let y_mouse = evento.clientY - rect.top ;
    retangulo.x = x_mouse; 
    retangulo.y = y_mouse;
}) 

