function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
}
	Circulo.prototype.actualizar = function() { 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 5;
	}
	
	if (this.y < this.juego.ctx.canvas.width) {
        this.y -= 1;
    }
    else {
        this.x = 0;
    }

};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "green";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*1.5, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};