class Espiral{
    constructor(raio,altura,pontos,voltas,extrusao){
    this.raio = raio;
    this.altura = altura;
    this.pontos = pontos;
    this.voltas = voltas;
    this.extrusao = extrusao;
    let q1 = '';
    let dAlfa = 2 * Math.PI/this.pontos;
    let dh = (this.altura/this.pontos).toFixed(3);
        for(let i = 0; i<this.pontos*this.voltas; i++){
            let x =(this.raio * Math.cos(i*dAlfa)).toFixed(3);
            let z = (this.raio * Math.sin(i*dAlfa)).toFixed(3);

            let y = (i*dh);

            q1 = q1 + x + " " + y + " " + z +" ";
        }
    document.querySelector("#"+this.extrusao).setAttribute('spine',q1);
    }
    
}