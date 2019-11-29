class Controles{
    opcoes(tipo){
        this.tipo = tipo;
        var divID = document.querySelector("#card-options");
        var x=document.createElement("input");
        x.setAttribute("type","button");
        x.setAttribute("onclick","criar(this.value);");
        x.setAttribute("class","btn btn-info");
        x.setAttribute("Value",this.tipo);
        x.setAttribute("Name","opcao");
        divID.appendChild(x);

    
    }

    static LimparInner(ObjetoID){
        this.Objeto = document.querySelector("#"+ObjetoID);
        this.Objeto.innerHTML="";
    }
    static criarListaAtb(Objeto){
        let atributos =document.getElementById("atributos");
        let tam = Objeto.getAttributeNames().length;
        for(let x = 0;x<tam;x++){
            let  atb = Objeto.getAttributeNames()[x];
            let opt = document.createElement("option");
            opt.setAttribute("value",atb);
            opt.style.color="gray";
            opt.style.backgroundColor="white";
            opt.style.padding="4px";
            opt.style.textAlign="center";
            opt.style.textTransform="capitalize";
          opt.setAttribute("onclick","mostrarValores();");
          opt.innerHTML=atb;
          atributos.appendChild(opt);
        } 
      }
    /**
     * @summary Cria um elemento option na tag select que possui o id="lista"
     * @param Idobjeto Elemento a ser adicionado ao select
     */
    adicionarlista(Idobjeto){
        this.Idobjeto = Idobjeto;
        let lista=document.getElementById("lista");
        let opt=document.createElement("option");
        opt.setAttribute("id","option"+this.Idobjeto);
        opt.setAttribute("value",this.Idobjeto);
        opt.setAttribute("onclick","listarAtributos(document.getElementById('"+this.Idobjeto+"'))");
        opt.innerHTML=this.Idobjeto+" ("+document.getElementById(this.Idobjeto).tagName+")";
        lista.appendChild(opt);
    }
    /**
     * @summary Remove um elemento option da tag select que possiu o id="lista"      
     * @param IDelemento Id do elemento a ser removido do select
     */
    removerlista(IDelemento){
        this.elemento = document.getElementById("option"+IDelemento);
        this.elemento.parentNode.removeChild(this.elemento);
    }
    adicionarInputID(type,id,placeholder){
        this.type=type;
        this.id=id;
        this.placeholder=placeholder;
        var divID = document.getElementById("opcoes");
        let input = document.createElement("input");
        input.setAttribute("type",this.type);
        input.setAttribute("id",this.id);
        input.setAttribute("placeholder",this.placeholder);
        let br = document.createElement("br");
        divID.appendChild(br);
        divID.appendChild(input);
    }
    static mostrarValores(){
        var lista = document.getElementById("lista");
        let num =lista.selectedIndex;
        let id = lista[num].value;
        var input = document.getElementById("vaele");
        var atributos =document.getElementById("atributos");
        let qual = atributos.selectedIndex;

        console.log("qual atributo está selecionado: ",qual);
        let att = atributos[qual].value;

        let Natributos_Objeto = document.getElementById(id).getAttributeNames().length;
        let Natributos_Objeto_Transform = document.getElementById("T"+id).getAttributeNames().length;
        if(qual>=(Natributos_Objeto-1)){
            id="T"+id;
        }else if(qual>=(Natributos_Objeto+Natributos_Objeto_Transform-4)){
            id="M"+id;
        }

        var texto = document.getElementById(id).getAttribute(att);
        if(texto == undefined){
          texto="";
        }  
        let replace = /,/g;
        texto = texto.replace(replace," ");  
        
        input.value = texto;
    }
    static imageTexture(){
        var lista = document.getElementById("lista");
        let num = lista.selectedIndex;
        var IDobj =  lista[num].value;
        var shape = document.getElementById("S"+IDobj);
        var appearance = shape.getElementsByTagName("appearance")[0];
        var exist = document.getElementById("Img"+IDobj);
        if(exist==null){
            var ImgTexture = document.createElement("ImageTexture");
            ImgTexture.setAttribute("id",("Img"+IDobj));
            appearance.appendChild(ImgTexture);
        }else{
            console.log("Tag ImageTexture já existe!");
        }
        var entrada = document.getElementById("vaele");
       //  entrada.setAttribute("type","file"); 
        Codigo.sincronizarCodigo();
    }   
}