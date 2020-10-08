document.ip1 = 0;
document.ip2 = 0;

function switch1() {
	if(document.ip1 == 0){
		document.ip1 = 1;
		// document.getElementById('1').style.backgroundColor = "green";
		document.getElementById('img1').src='img/on.png';

	}else{
		document.ip1 = 0;
		document.getElementById('img1').src='img/off.png';

	}
	// document.getElementById("A").innerText = document.ip1;
}

function switch2() {
	if(document.ip2 == 0){
		document.ip2 = 1;
		// document.getElementById('2').style.backgroundColor = "green";
		document.getElementById('img2').src='img/on.png';
	}else{
		document.ip2 = 0;
		// document.getElementById('2').style.backgroundColor = "red";	
		document.getElementById('img2').src='img/off.png';
	}
	// document.getElementById("B").innerText = document.ip2;
	
}

function and() {
	if(document.ip1 == 1 && document.ip2 == 1){
		document.res = 1;
	}else{
		document.res = 0;	
	}
	var table = document.getElementById("result").getElementsByTagName('tbody')[0];
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = document.ip1;
	cell2.innerHTML = document.ip2;
	cell3.innerHTML = document.res;
}


function or() {
	if(document.ip1 == 0 && document.ip2 == 0){
		document.res = 0;
	}else{
		document.res = 1;	
	}
	var table = document.getElementById("result").getElementsByTagName('tbody')[0];
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = document.ip1;
	cell2.innerHTML = document.ip2;
	cell3.innerHTML = document.res;
}


function not() {
	if(document.ip1 == 0){
		document.res = 1;
	}else{
		document.res = 0;	
	}
	var table = document.getElementById("result").getElementsByTagName('tbody')[0];
	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	// var cell3 = row.insertCell(2);
	cell1.innerHTML = document.ip1;
	// cell2.innerHTML = document.ip2;
	cell2.innerHTML = document.res;
}













