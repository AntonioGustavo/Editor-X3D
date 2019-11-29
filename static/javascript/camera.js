class Camera{
    constructor(){
    camera = document.getElementById("camera");
    this.camera =camera;
    }
    

    static focarCamera(Objeto){
        this.objeto = Objeto;
        var Idobj = this.objeto.getAttribute("id");
        if(Idobj!="camera" && Idobj!="fundo"){
            let Idtransform = "T"+Idobj;
            let transform = document.getElementById(Idtransform);
            let transformcord=transform.getAttribute("translation");
            var retirar = /,/g;
            transformcord = transformcord.replace(retirar," ");
            
            let cordx = parseInt(transformcord);         
            let cy = transformcord.replace(" ","");
            cy = cy.replace(cordx,"");
            
            let cordy = parseInt(cy);
            
            let cordz = cy.replace(cordy,"");
            cordz = parseInt(cordz);

            camera.setAttribute("position",cordx+" "+cordy+" "+(cordz+10));

        }        
    }
}