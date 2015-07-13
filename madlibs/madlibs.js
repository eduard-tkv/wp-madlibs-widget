function replaceW()
{
	var oWord = document.getElementById("originalWord").value;
	var nWord = document.getElementById("newWord").value;
	
	//alert(oWord);
	//alert(nWord);


  var lastSlash = (window.location.href).lastIndexOf("/");
  var locationUri = (window.location.href).substring(0,lastSlash) + "?";
  
  //alert(locationUri);

  window.location.href = locationUri+"&oWordPhp="+oWord +"&nWordPhp="+nWord; 

	
}

function resetUrl()
{
	var n = window.location.href.indexOf("?"); 
	//alert(n);
	
	var res = window.location.href.substring(0, n); 
	
	//alert(res);
	window.location.href = res;
}
