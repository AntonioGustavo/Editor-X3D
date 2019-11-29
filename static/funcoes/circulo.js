class Circulo{
    /** */
    constructor(raio,lados,id_extrusao){
        this.raio = raio;
        this.lados = lados;
        this.id_extrusao = id_extrusao;

        let q1 = '';
        let dAlfa = 2 * Math.PI / this.lados;
        for(let alfa = 0; alfa <= 2 * Math.PI; alfa += dAlfa) {
            let x = (this.raio * Math.cos(alfa)).toFixed(3);
            let y = (this.raio * Math.sin(alfa)).toFixed(3);
            q1 = q1 + x + " " + y + " ";
        }
        q1 = q1 + raio + " " + 0;
        document.querySelector("#"+this.id_extrusao).setAttribute('crossSection',q1);
    }
}