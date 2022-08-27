document.getElementById("btn").onclick=function ()
{
    var deger1 = parseFloat(document.getElementById("daire").value);
    var dairealan = 3*deger1*deger1;
    (document.getElementById("dsonuc").innerHTML)="Dairenin Alanı : "+dairealan;
}
        
     document.getElementById("btn2").onclick=function ()
     {
        var deger2 = parseFloat(document.getElementById("kare").value);
        var karealan = deger2*deger2;
        (document.getElementById("ksonuc").innerHTML)="Karenin Alanı: "+karealan;
     }
  document.getElementById("btn3").onclick=function ()
  {
    var degerdik = parseFloat(document.getElementById("dikdortgen1").value);
    var degerdik2 = parseFloat(document.getElementById("dikdortgen2").value);
    var dikalan = degerdik*degerdik2;
    (document.getElementById("diksonuc").innerHTML)="Dikdörtgenin Alanı: "+dikalan;
  }
  document.getElementById("btn4").onclick=function ()
  {
    var taban = parseFloat(document.getElementById("ucgen").value);
    var yukseklik = parseFloat(document.getElementById("yukseklik").value);
    var ucgenalan = taban*yukseklik/2;
    (document.getElementById("ucgenalan").innerHTML)="Üçgenin Alanı: "+ucgenalan;
  }
     