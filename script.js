var url ='https://localhost:8080/';
var btn = document.getElementById("button");
btn.addEventListener('click',fetchData);

function fetchData(event){
	var nameData = document.getElementById("name");
	var nameAttr = nameData.getAttribute("name");
	var yearData = document.getElementById("year");
	var yearAttr = yearData.getAttribute("name");
	var str = "";
	if(nameData.value && yearData){
		str = url + `?${nameAttr}=${nameData.value}&${yearAttr}=${yearData.value}`;
		document.querySelector("#url").innerHTML = str;
	}
	else if(nameData && !yearData){
		str = url + `?${nameAttr}=${nameData.value}`;
		document.querySelector("#url").innerHTML = str;
	}
	
	event.preventDefault()
	// alert(url);
	
	
}
