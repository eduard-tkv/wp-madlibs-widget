function replaceW()
{
	//get the original word i.e. a word from the text
	var oWord = document.getElementById("originalWord").value;
	
	//get the new word, i.e. typed by the user
	var nWord = document.getElementById("newWord").value;
	
  	//create a url with new word and old word passed in it after ?
  	//so that they can be extracted by the php function
        var lastSlash = (window.location.href).lastIndexOf("/");
        var locationUri = (window.location.href).substring(0,lastSlash) + "?";

        window.location.href = locationUri+"&oWordPhp="+oWord +"&nWordPhp="+nWord; 

	
}

//Reset button on the widget, reloads the page
function resetUrl()
{
	//find the index of ?
	var n = window.location.href.indexOf("?"); 
	
	//get the url without all arguments after ?
	var res = window.location.href.substring(0, n); 
	
	//go to url
	window.location.href = res;
}
