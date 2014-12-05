function replaceW()
{
	var oWord1 = document.getElementById("originalWord1").value;
	var nWord1 = document.getElementById("newWord1").value;
	
	var oWord2 = document.getElementById("originalWord2").value;
	var nWord2 = document.getElementById("newWord2").value;
	
	var oWord3 = document.getElementById("originalWord3").value;
	var nWord3 = document.getElementById("newWord3").value;
	
	var oWord4 = document.getElementById("originalWord4").value;
	var nWord4 = document.getElementById("newWord4").value;
	//alert(oWord);
	//alert(nWord);


  var lastSlash = (window.location.href).lastIndexOf("/");
  var locationUri = (window.location.href).substring(0,lastSlash) + "?";
  
  //alert(locationUri);

  window.location.href = locationUri+"&oWordPhp1="+oWord1+"&nWordPhp1="+nWord1+"&oWordPhp2="+oWord2 +"&nWordPhp2="+nWord2+"&oWordPhp3="+oWord3+"&nWordPhp3="+nWord3+"&oWordPhp4="+oWord4+"&nWordPhp4="+nWord4; 
	

/*
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		alert("Success");
    }
  }
  
  
xmlhttp.open("GET","http://www.deltadigital.ca/kayoko/wp-content/plugins/madlibs/madlibs.php?oWordPhp="+oWord+"&nWordPhp="+nWord,true);
xmlhttp.send();
*/
  //alert("just after send");
	
}

function resetUrl()
{
	var n = window.location.href.indexOf("?"); 
	//alert(n);
	
	var res = window.location.href.substring(0, n); 
	
	//alert(res);
	window.location.href = res;
}