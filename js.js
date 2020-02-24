function plus(){
	var a = document.getElementById("ac").value;
		a = parseInt(a)
	var b = document.getElementById("bc").value;
		b = parseInt(b)
        var c =document.getElementById("e").innerHTML = "+";
	var c =document.getElementById("q").innerHTML = a+b;
}
function minus(){
	var a = document.getElementById("ac").value;
		a = parseInt(a)
	var b = document.getElementById("bc").value;
		b = parseInt(b)
        var c =document.getElementById("e").innerHTML = "-";
	var c =document.getElementById("q").innerHTML = a-b;
}
function um(){
	var a = document.getElementById("ac").value;
		a = parseInt(a)
	var b = document.getElementById("bc").value;
		b = parseInt(b)
        var c =document.getElementById("e").innerHTML = "x";
	var c =document.getElementById("q").innerHTML = a*b;
}
function de(){
	var a = document.getElementById("ac").value;
		a = parseInt(a)
	var b = document.getElementById("bc").value;
		b = parseInt(b)
        var c =document.getElementById("e").innerHTML = "/";
	var c =document.getElementById("q").innerHTML = a/b;
}

