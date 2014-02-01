function loadDesign(design_id) {
if (design_id === "a")
    pageToDisplay = "1.html";
else if (design_id === "b")
    pageToDisplay = "2.html";
else if (design_id === "c")
    pageToDisplay = "3.html";
var xmlhttp;
if (window.XMLHttpRequest) {
xmlhttp = new XMLHttpRequest();
} else {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
document.getElementById("contentArea").innerHTML = xmlhttp.responseText;
}
}
xmlhttp.open("GET", pageToDisplay, true);
xmlhttp.send();
}
