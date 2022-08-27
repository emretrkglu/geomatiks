document.getElementById("btn").onclick=function ()
{
    var deger1 = parseFloat(document.getElementById("daire").value);
    var dairecevre = 3*2*deger1;
    (document.getElementById("dsonuc").innerHTML)="Dairenin Çevresi : "+dairecevre;
}
document.getElementById("btn2").onclick=function()
{
    var kare1 = parseFloat(document.getElementById("kare").value);
    var karecevre = 4*kare1;
    (document.getElementById("ksonuc").innerHTML)="Karenin Çevresi: "+karecevre;
}
        document.getElementById("btn3").onclick=function()
        {
            var dik1 = parseFloat(document.getElementById("dikdortgen1").value);
            var dik2 = parseFloat(document.getElementById("dikdortgen2").value);
            var dikcevre = (dik1+dik2)*2;
        
            (document.getElementById("diksonuc").innerHTML)="Dikdörtgenin Çevresi: "+dikcevre;
        }
        document.getElementById("btn4").onclick=function()
        {
            var Kenar1 = parseFloat(document.getElementById("Kenar1").value);
            var Kenar2 = parseFloat(document.getElementById("Kenar2").value);
            var Kenar3 = parseFloat(document.getElementById("Kenar3").value);
            var ucgencevre = Kenar1+Kenar2+Kenar3;
        
            (document.getElementById("ucgencevre").innerHTML)="Üçgenin Çevresi: "+ucgencevre;
        }