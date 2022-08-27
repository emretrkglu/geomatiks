function Hesapla()
		{
			var k1=Number(document.getElementById("kenar1").value);
			var k2=Number(document.getElementById("kenar2").value);
			var hipotenus=Math.sqrt((k1*k1)+(k2*k2));
			document.getElementById("sonuc").innerHTML="Hipotenüs : "+hipotenus;
		}
		
		var hesapBtn=document.getElementById("btn");
		hesapBtn.onclick=Hesapla;
		