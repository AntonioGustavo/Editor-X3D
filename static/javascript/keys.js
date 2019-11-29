class Keys{
    constructor(keycode){
        var lista = document.querySelector("#lista");
        var ed=new Elemento();
        for(let c=0;c<=lista.selectedOptions.length;c++){
            let objeto = lista.selectedOptions.item(c);
            if(!(objeto==undefined)){
                var idobjeto = objeto.getAttribute("value");
                ed.editar(idobjeto,'translation',Keys.keyActions(idobjeto,keycode));
                Codigo.sincronizarCodigo();
            }
        }  
    }
    static keyActions(idobjeto,key){
        this.idobjeto = idobjeto;
        this.key = key;
        let Idtransform = "T"+this.idobjeto;
        let transform = document.getElementById(Idtransform);
        let transformcord=transform.getAttribute("translation");
        var retirar = /,/g;
        transformcord = transformcord.replace(retirar," ");
        
        var cordx = parseInt(transformcord);         
        let cy = transformcord.replace(" ","");
        cy = cy.replace(cordx,"");
       
        var cordy = parseInt(cy);
       
        var cordz = cy.replace(cordy,"");
        cordz = parseInt(cordz);
         /*
        key97 == a

        key119 == w
        key100 == d
        key115 == s
        */
        if(key==97){
            cordx-=1;
        }else if(key==100){
            cordx+=1;
        }else if(key==119){
            cordz--;
        }else if(key==115){
            cordz++;
        }
        console.log(key); 
        return(cordx+" "+cordy+" "+cordz);
    }
}