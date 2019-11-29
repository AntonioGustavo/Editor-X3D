class Codigo{
    constructor(code){
       this.codigo=code;
        document.getElementById('codigo').innerHTML=this.codigo;
    }
    static sincronizarCodigo(){
       
        var code = document.getElementById("scene").innerHTML
        var codigo ="&#60x3d> &#60scene>";
        codigo += code;
        codigo +="&#60/scene> &#60/x3d>";
        let retirar=/ render="true"/g; 
        let txt = codigo.replace(retirar,"");

        retirar = / bboxcenter="0,0,0"/g;
        txt = txt.replace(retirar,"");

        retirar = / bboxsize="-1,-1,-1"/g;
        txt = txt.replace(retirar,"");

        retirar = / center="0,0,0"/g;
        txt = txt.replace(retirar,"");


        retirar = / scale="1,1,1"/g;
        txt = txt.replace(retirar,"");
        /*
        retirar =  / scaleorientation="0,0,0,0"/g;
        txt = txt.replace(retirar,"");
*/
        retirar = / ispickable="true"/g;
        txt = txt.replace(retirar,"");

        retirar = /,/g;
        txt = txt.replace(retirar," ");

        retirar = / backurl=""/g;
        txt = txt.replace(retirar,"");

        retirar = / bottomurl=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / fronturl=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / lefturl=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / righturl=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / topurl=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / sorttype="auto"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / alphaclipthreshold="0.1"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / shininess="0.2"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / ccw="true"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / usegeocache="true"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / orientation="0 0 0 0"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / centerofrotation="0 0 0"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / znear="-1" zfar="-1"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / ambientintensity="0.2"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / specularcolor="0 0 0"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / fieldofview="0.785398"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / solid="true"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / lit="true"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / groundangle=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / skyangle=""/g;
        txt = txt.replace(retirar,"");
        
        retirar = / emissivecolor="0 0 0"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / side="true"/g;
        txt = txt.replace(retirar,"");
        
        retirar = / bottom="true"/g;
        txt = txt.replace(retirar,"");
       
        retirar = / top="true"/g;
        txt = txt.replace(retirar,"");

        retirar = /\n/g;
        txt = txt.replace(retirar,"");
       
        retirar = />/g;
        txt = txt.replace(retirar,"> \n");
        
        retirar = /translation="0 0 0"/g;
        txt = txt.replace(retirar,"");

        retirar = /scaleorientation="0 0 0 0"/g;
        txt = txt.replace(retirar,"");
        
        //EXTRUSION 
        retirar = /begincap="true"/g;
        txt = txt.replace(retirar,"");

        retirar = /endcap="true"/g;
        txt = txt.replace(retirar,"");

        retirar = /convex="true"/g;
        txt = txt.replace(retirar,"");
        new Codigo(txt);
    }
}