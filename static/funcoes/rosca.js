class Rosca{
    /**
     * 
     * @param {Tamanho do raio da circunferência externa da rosca} raio 
     * @param {*Quantidade de lados da circunferência externa da rosca} lados 
     * @param {*Tamanho do raio da circunferência interna da rosca} raiointerno 
     * @param {*Quantidade de lados da circunferência interna da rosca} ladosinternos 
     * @param {*Id da extrusão a ser aplicada a configuração} id_extrusion 
     */
    constructor(raio,lados,raiointerno,ladosinternos,id_extrusao){
        this.raio = raio;
        this.lados = lados;
        this.raiointerno = raiointerno;
        this.ladosinternos = ladosinternos;
        this.id_extrusao = id_extrusao;
        let q1 = '';
        let dAlfa = 2 * Math.PI / this.lados;
        let val = [];
        for (let alfa = 0; alfa <= 2 * Math.PI; alfa += dAlfa) {
            let x = (this.raio * Math.cos(alfa)).toFixed(3);
            let y = (this.raio * Math.sin(alfa)).toFixed(3);
            val.push(x + " " + y + " ");
            //q1 = q1 + x + " " + y + " ";
        }
    
        for(i=(val.length - 1); i >= 0; i--) {
            q1 = q1 + val[i];
        }
        q1 = q1 + this.raio + " " + 0 + " ";
        
        var dBeta = 2 * Math.PI / this.ladosinternos;
        for (let alfa = 0; alfa <= 2 * Math.PI; alfa += dBeta) {
            let x = (this.raiointerno * Math.cos(alfa)).toFixed(3);
            let y = (this.raiointerno * Math.sin(alfa)).toFixed(3);
            q1 = q1 + x + " " + y + " ";
        }
        q1 = q1 + this.raiointerno + " " + 0 + " " +this.raio + " " + 0;
        document.querySelector("#"+ this.id_extrusao).setAttribute('crossSection',q1);
    }
}