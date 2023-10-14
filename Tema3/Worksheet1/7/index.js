function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

for (var i = 1; i <= 10; i++) {
	document.write("<tr>");
	document.write("<td>" + i + "</td>");
	document.write("<td>" + factorial(i) + "</td>");
	document.write("</tr><br>");
}