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