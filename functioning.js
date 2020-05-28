function solve()
{
	let s = document.getElementById("display").value
	let b = eval(s)
	document.getElementById("display").value=b
}
function valval(val)
{
	document.getElementById("display").value+=val
}
function cls()
{
	document.getElementById("display").value=""
}