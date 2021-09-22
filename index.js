
// Insert year in copyright claim
function upDate(){
	var copyDate = document.getElementById('copyright');
	var copyDate_Eng = document.getElementById('copyright_Eng');
	var d = new Date();
	var thisYear = d.getFullYear();
	if (copyDate !== null) {copyDate.innerHTML = "<p id=\"copyright\"><em>Cóipcheart © " + thisYear + " Institiúid na hEolaíochta Sonraí, OÉ Gaillimh</em></p>";}
	if (copyDate_Eng !== null) {copyDate_Eng.innerHTML = "<p id=\"copyright_Eng\"><em>Copyright © " + thisYear + " Data Science Institute, NUI Galway</em></p>";}
}

window.onload = upDate
