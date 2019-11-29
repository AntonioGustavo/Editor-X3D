var c_box=0,c_cone=0,c_sphere=0,c_cylinder=0,c_extrusion=0;
function criar(tipo_objeto){

  var a = new Elemento();
  var iddoelemento="";
  if(tipo_objeto=="box"){
    c_box+=1;
    iddoelemento=("b"+c_box);
  }else if(tipo_objeto=="cone"){
    c_cone+=1;
    iddoelemento=("cn"+c_cone);
  }else if(tipo_objeto=="sphere"){
    c_sphere+=1;
    iddoelemento=("s"+c_sphere);
  }else if(tipo_objeto=="cylinder"){
    c_cylinder+=1;
    iddoelemento=("c"+c_cylinder);
  }else if(tipo_objeto=="extrusion"){
    c_extrusion+=1;
    iddoelemento=("e"+c_extrusion);
  }
  a.criar(tipo_objeto,iddoelemento);
  Codigo.sincronizarCodigo();
  Controles.LimparInner("opcoes");
}

function deletar(){
  var d=new Elemento();
  var lista = document.getElementById("lista");
  for(let c=0;c<=lista.selectedOptions.length;c++){
      let objeto = lista.selectedOptions.item(c);
      if(!(objeto==undefined)){
        var idobjeto = objeto.getAttribute("value");
        d.deletar(idobjeto,true);
      }
    }
    Controles.LimparInner("atributos");  
    Codigo.sincronizarCodigo();
}
function adicionar(){
  var ad = new Controles();
  

  let collapse = document.createElement("div");
  collapse.setAttribute("class","collapse");
  collapse.setAttribute("id","opcoescollapse");
  let card = document.createElement("div");
  card.setAttribute("class","card card-body");
  card.setAttribute("id","card-options");
  collapse.appendChild(card);
  var divID = document.querySelector("#opcoes");
  divID.appendChild(collapse);
  ad.opcoes("box");
  ad.opcoes("cone");
  ad.opcoes("sphere");
  ad.opcoes("cylinder");
  ad.opcoes("extrusion");
}

function iniciar(){
  //var code = new Codigo();
  Codigo.sincronizarCodigo();
  //$('#novo').css('color','red');
  //document.getElementById('navType').setAttribute("type", 'currentMode');
}

function editar(){
  var lista = document.getElementById("lista");
  var atributos = document.getElementById("atributos");
  let num = atributos.selectedIndex;
  if(!(atributos[num]==undefined)){
    var atributo = atributos[num].value;
  } 
  
  let novovalor=document.getElementById("vaele").value;

  var ed=new Elemento();
  for(let c=0;c<=lista.selectedOptions.length;c++){
    let objeto = lista.selectedOptions.item(c);
    if(!(objeto==undefined)){
      var idobjeto = objeto.getAttribute("value");
      ed.editar(idobjeto,atributo,novovalor);
    //  let anim= new Animacao();
    //anim.CriarAnimacao(idobjeto,novovalor);
      Codigo.sincronizarCodigo();
    }
  }  
}

function AddGroupControles(){
  var controle=new Controles();
  let lista = document.getElementById("lista");
    ad=new Controles();
    ad.adicionarInputID("text","idgroup","Id do Grupo");
    var botao = document.createElement("input");
    botao.setAttribute("type","button");
    botao.setAttribute("value","Criar");
    botao.setAttribute("onclick","ciarGroup();");
    document.getElementById("opcoes").appendChild(botao);
}
function ciarGroup(){
    let a = new Elemento();
    a.criarGroup();
    Controles.LimparInner("opcoes");
    Codigo.sincronizarCodigo();
}
function listarAtributos(Objeto){

  Camera.focarCamera(Objeto);
  var atributos =document.getElementById("atributos");
  Controles.LimparInner("atributos");
  Controles.criarListaAtb(Objeto);

  //para o transform do Objeto
  let opt = document.createElement("option");
  opt.innerHTML="Atributos do transform";
  opt.setAttribute("disabled",true);
  opt.style.padding="6px";
  opt.style.backgroundColor="rgb(100,100,100)";
  opt.style.color="white";
  atributos.appendChild(opt);
  var ObjetoId = Objeto.getAttribute("id");
  if(!(ObjetoId == "camera" || ObjetoId == "fundo" /*|| Objeto.tagName =="GROUP"*/ )){
    var ObjTransform = document.getElementById("T"+ObjetoId);
    Controles.criarListaAtb(ObjTransform);
  }

   //para o Appearance do Objeto
  opt = document.createElement("option");
  opt.innerHTML="Atributos do Material";
  opt.setAttribute("disabled",true);
  opt.style.padding="4px";
  atributos.appendChild(opt);
  var ObjetoId = Objeto.getAttribute("id");
  if(!(ObjetoId == "camera" || ObjetoId == "fundo" ||  Objeto.tagName =="GROUP")){
    var ObjMaterial= document.getElementById("M"+ObjetoId);
    Controles.criarListaAtb(ObjMaterial);
   }
  opt=document.createElement("option");
  opt.setAttribute("value","url");
  opt.setAttribute("onclick","Controles.imageTexture()");
  opt.innerHTML="Textura";
  atributos.appendChild(opt);
}
function mostrarValores(){
  Controles.mostrarValores();
} 

function pesquisar(){
  var pesquisa = document.querySelector("#pesquisa");
}
function salvar(){
  var lista = document.querySelector("#lista");
  let selec = lista.selectedIndex;
  let id = lista[selec].value;
  let idtranform = "T"+id;
  let obj = document.getElementById(idtranform);
  let codigo='<transform id="'+idtranform+'">';
  codigo+=obj.innerHTML;
  codigo+='</transform>';
  document.querySelector('#addDB').value=limpar(codigo);
  
}
function limpar(codigo){
  let retirar=/ render="true"/g; 
        let txt = codigo.replace(retirar,"");

        retirar = / bboxcenter="0,0,0"/g;
        txt = txt.replace(retirar,"");

        retirar = / \r\n/g;
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

        retirar = /\r/g;
        txt = txt.replace(retirar,"");
       

        
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
        
        return txt;
}
function carregar(){
  var a = render;
  let Tab = document.getElementById("Tabsoluto");
  a = a.substring(1, (a.length-1));
  Tab.innerHTML+=a;
  console.log(a);
  Verificar('sphere');
  Verificar('box');
  Verificar('cone');
  Verificar('cylinder');
  Verificar('extrusion');
  Codigo.sincronizarCodigo();
}


function Verificar(tagName){
  let Tab = document.getElementById("Tabsoluto");
  var controles = new Controles();
  if(!(Tab.getElementsByTagName(tagName)==undefined)){
    for(let i=0;i<=Tab.getElementsByTagName(tagName).length-1;i++){
      let element = Tab.getElementsByTagName(tagName)[i];
      let elementId = element.getAttribute('id');
      controles.adicionarlista(elementId);
    }
  }
}
function circulo(){
  var a = new Circulo(2,40,'e1');
}
function rosca(){
  new Rosca(3,40,2,40,'e1');
}
function espiral(){
  document.querySelector("#e1").setAttribute('Solid',false);
  document.querySelector("#e1").setAttribute('lit',false);
  new Circulo(1,3,'e1');
  new Espiral(9,3,40,3,'e1');
}
document.body.addEventListener('keypress',function(){
  new Keys(event.keyCode);
})