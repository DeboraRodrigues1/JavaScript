var num=0;

function novatarefa(){
    num ++;
    var nometarefa= document.getElementById("nomedatarefa").value;
    var novalinha='<div class="row"><div class="col-md-2><input type="ckeckbox"></div><div class="col-md-8">**tituloDaTarefa**</div><div class="col-md-2">**numSequencia**</div><div>';

    novalinha = novalinha.replace("**numSequencia**",num);
    novalinha = novalinha.replace("**tituloDaTarefa**",nometarefa);

    console.log(novalinha);

    document.getElementById("lista").innerHTML+=novalinha;

}