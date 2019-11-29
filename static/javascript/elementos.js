class Elemento{
    criarGroup(){
        var groupId = document.getElementById("idgroup").value;
        var controles = new Controles();

        var group = document.createElement("group");
        group.setAttribute("id",groupId);
        group.setAttribute("DEF",groupId);
        
        this.criarTransform(groupId);
        var lista = document.getElementById("lista");
        let tam = lista.selectedOptions.length;
        var elemento={};
        var Id={};
        var objeto={};
        for(let x=0;x<tam;x++){
            elemento[x] = lista.selectedOptions.item(x);
            Id[x] = elemento[x].getAttribute("value");
            objeto[x] = document.getElementById("T"+Id[x]);
        }
        for(let x=0;x<tam;x++){
            if(!(elemento[x]==undefined)){
                this.deletar(Id[x],false);
                group.appendChild(objeto[x]);
            }
        } 
        let tranform = document.getElementById("T"+groupId);
        tranform.appendChild(group);
        controles.adicionarlista(groupId);
    }
    criarShape(elementoID){
        var scene=document.getElementById("scene"); 
        var shape = document.createElement("shape");
        shape.setAttribute("id","S"+""+elementoID);
        scene.appendChild(shape);
    }
    criarTransform(elementoID){ 
        var tabs = document.getElementById("Tabsoluto");
        var tsec = document.createElement("transform");
        tsec.setAttribute("id","T"+""+elementoID);
        tsec.setAttribute("rotation","0 1 0 1.2");
        tabs.appendChild(tsec);
    }
    criarAppearance(elementoID,tipo_obj){
        var shape = document.getElementById("S"+elementoID);
        var appearance = document.createElement("appearance");
        var material = document.createElement("material");
        material.setAttribute("id","M"+""+elementoID);
        if(tipo_obj=='box'){
            material.setAttribute("diffusecolor","0.5 0.99 1");
            material.setAttribute("emissivecolor","0.05 0.1 0.1");
        }else if(tipo_obj=='sphere'){
            material.setAttribute("diffusecolor","1 0.12 0.42");
            material.setAttribute("emissivecolor","0.1 0.012 0.04");
        }
        appearance.appendChild(material);
        shape.appendChild(appearance);
    }
    criar(elemento,elementoID){
        this.criarTransform(elementoID);
        this.criarShape(elementoID);
        this.criarAppearance(elementoID,elemento);
        var shape=document.getElementById("S"+elementoID);
        var tag=document.createElement(elemento);
        console.log(elemento);
        var transf=document.getElementById("T"+""+elementoID);
        tag.setAttribute("id",elementoID);
        //tag.setAttribute("onclick","listarAtributos(this);");
        //tag.setAttribute("onclick","oi()");
        shape.appendChild(tag);
        transf.appendChild(shape);
       // this.adicionarID(elemento,num);
        let ctrl = new Controles();
        ctrl.adicionarlista(elementoID);   
    }

    adicionarID(elemento,complemento){
        var el=document.getElementsByTagName(elemento)[0];
        el.setAttribute("id",elemento+""+complemento);
    }
    
    deletar(IDelemento,group){
        this.group = group;
        this.elementoId = IDelemento;
        let elemento = document.getElementById("T"+this.elementoId);
        console.log(elemento);
        elemento.parentNode.removeChild(elemento);
        if(this.group){
            let ctrl = new Controles();
            ctrl.removerlista(IDelemento);
        }
        
    }

    editar(IDelemento,atributo,valor){
        this.IDelemento=IDelemento;
        this.atributo=atributo;
        if(this.atributo=="translation" || this.atributo =="rotation" || this.atributo =="scaleorientation" || this.atributo =="scale" || this.atributo =="bboxsize" || this.atributo == "bboxcenter" || this.atributo =="center" ){
            this.IDelemento = "T"+this.IDelemento;
        }
        if( this.atributo =="ambientintensity" || this.atributo=="DiffuseColor" || this.atributo=="diffusecolor"  || this.atributo =="emissivecolor" || this.atributo =="shininess" || this.atributo =="especularcolor"){
            this.IDelemento = "M"+this.IDelemento;
        }
        if(this.atributo=="url"){
            this.IDelemento = "Img"+this.IDelemento;
        }
        this.valor=valor;
        console.log(this.valor);
        var elemento = document.getElementById(this.IDelemento);
        elemento.setAttribute(this.atributo,this.valor);
    }

}