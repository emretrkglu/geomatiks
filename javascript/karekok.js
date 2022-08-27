function karekok(){ 
	var k1=document.getElementById("txt").value;
	var kok=Math.sqrt(k1);
	document.getElementById("sonuc").innerHTML="Sayının Karekökü: "+kok;
}
		var hesapBtn=document.getElementById("btn");
		hesapBtn.onclick=karekok;
