function cs(){
    raio = document.getElementById("raioInput").value;
    lados = document.getElementById("ladosInput").value; 
    raiointerno = document.getElementById("raioInternoInput").value;
    ladosinternos = document.getElementById("ladosInternosInput").value;

    let q1 = '';
    dAlfa = 2 * Math.PI / lados;
    val = [];
    for (alfa = 0; alfa <= 2 * Math.PI; alfa += dAlfa) {
        x = (raio * Math.cos(alfa)).toFixed(3);
        y = (raio * Math.sin(alfa)).toFixed(3);

        val.push(x + " " + y + " ");
        //q1 = q1 + x + " " + y + " ";
    }

    for(i=(val.length - 1); i >= 0; i--) {
        q1 = q1 + val[i];
    }
    q1 = q1 + raio + " " + 0 + " ";
    
    dBeta = 2 * Math.PI / ladosinternos;
    for (alfa = 0; alfa <= 2 * Math.PI; alfa += dBeta) {
        x = (raiointerno * Math.cos(alfa)).toFixed(3);
        y = (raiointerno * Math.sin(alfa)).toFixed(3);
        q1 = q1 + x + " " + y + " ";
    }
    q1 = q1 + raiointerno + " " + 0 + " " +raio + " " + 0;

    document.getElementById("extrusao").setAttribute('crossSection',q1);
    cod="<pre>\n";
    cod+="<p>crossSection='"+q1+"'";
    cod+="</p></pre>\n";

    document.getElementById("mudaCodigo").innerHTML=cod;

}