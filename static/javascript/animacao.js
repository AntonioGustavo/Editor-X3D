class Animacao{
    /*constructor(trajetoria,Elemento_id){
        this.trajetoria = trajetoria;
        this.Elemento_id = Elemento_id;
        let time = document.getElementById("tempo");
        time.setAttribute("loop","true");
        let mov = document.getElementById("movimento");
        mov.setAttribute("keyvalue",this.trajetoria);
        
        let rota = document.getElementById("rota");
        rota.setAttribute("tonode",this.Elemento_id);
        // time.setAttribute("loop","false");
    }
    */

    static CriarAnimacao(Elemento_id,valor){
        this.id="T"+Elemento_id;
        this.valorInicial = document.getElementById("T"+Elemento_id).getAttribute("translation");
        
        this.valor = this.valorInicial;
        this.valor +=" "+valor;
        this.valor+=" "+valor;

        var cena = document.getElementById("scene");
        var time = document.createElement("timeSensor");
        var posicao = document.createElement("PositionInterpolator");
        var route1 = document.createElement("Route");
        var route2 = document.createElement("Route");

        time.setAttribute("cycleInterval","5");
        time.setAttribute("loop","true");
        time.setAttribute("id","tempo");


        posicao.setAttribute("key","0 0.5 1");
        posicao.setAttribute("keyValue",this.valor);
        posicao.setAttribute("id","movimento");

        route1.setAttribute("FromNode","tempo");
        route1.setAttribute("toNode","movimento");
        route1.setAttribute("fromField","fraction_changed");
        route1.setAttribute("toField","set_fraction");
        route1.setAttribute("id","route1");


        route2.setAttribute("fromNode","movimento");
        route2.setAttribute("toNode",this.id);
        route2.setAttribute("toField","translation");
        route2.setAttribute("FromField","value_changed");
        route2.setAttribute("id","route2");

        cena.appendChild(time);
        cena.appendChild(posicao);
        cena.appendChild(route1);
        cena.appendChild(route2);
        setTimeout(function(){
            time.setAttribute("loop","false");
        },2000);
      

        setTimeout(function(){
        let tempo = document.getElementById("tempo");
        tempo.parentNode.removeChild(tempo);
        let movimento = document.getElementById("movimento");
        movimento.parentNode.removeChild(movimento);
        let rota1 = document.getElementById("route1");
        rota1.parentNode.removeChild(rota1);
        let rota2 = document.getElementById("route2");
        rota2.parentNode.removeChild(rota2);
    },4000);
    }
}