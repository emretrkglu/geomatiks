document.getElementById("btn").onclick=function()
{
    var küreyaricap = (document.getElementById("küre").value);
    var küresonuc = 4/3*3*küreyaricap*küreyaricap*küreyaricap;
    (document.getElementById("dsonuc").innerHTML)="Kürenin hacmi: "+küresonuc;
}

document.getElementById("btn2").onclick=function ()
{
var küpkenar = (document.getElementById("küp").value);
var küpsonuc = küpkenar*küpkenar*küpkenar;
(document.getElementById("ksonuc").innerHTML)="Küpün Hacmi: "+küpsonuc;
}
document.getElementById("btn3").onclick=function()
{
    var dprizma1 = (document.getElementById("dikdortgen1").value);
    var dprizma2 = (document.getElementById("dikdortgen2").value);
    var dprizma3 = (document.getElementById("dikdortgen3").value);
    var dpsonuc = dprizma1*dprizma2*dprizma3;
    (document.getElementById("diksonuc").innerHTML)="Dikdörtgen Prizmanın Hacmi: "+dpsonuc;

}
document.getElementById("btn4").onclick=function()
{
    var syaricap = (document.getElementById("syaricap").value);
    var syukseklik = (document.getElementById("yukseklik").value);
    var sisonuc = 3*syaricap*syaricap*syukseklik;
    (document.getElementById("silindirsonuc").innerHTML)="Silindirin Hacmi: "+sisonuc;

}