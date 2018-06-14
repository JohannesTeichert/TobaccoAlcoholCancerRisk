M.AutoInit();

let resultTobacco = 0.0;
let resultAlc = 0.0;

function calcTobacco(value, rr){
	resultTobacco = 0.0;
	let inputs = document.getElementsByClassName("tobacco");
	for (i=0; i<inputs.length;i++){
		if (inputs[i].checked){
			resultTobacco+=parseFloat(inputs[i].dataset.rr);
		}
	}
	document.getElementById("tobaccoResult").innerHTML="Tobacco induced risk for oral cancer: "+resultTobacco.toFixed(1);
	checkCombined();
}


function calcAlcohol(){
	resultAlc = 0.0;
	let inputs = document.getElementsByClassName("alcohol");
	for (i=0; i<inputs.length;i++){
		if (inputs[i].checked){
			resultAlc = parseFloat(inputs[i].dataset.oral);
			document.getElementById("oral").innerHTML="Oral and pharyngeal cancer: "+parseFloat(inputs[i].dataset.oral)
			document.getElementById("laryngeal").innerHTML="Laryngeal cancer: "+parseFloat(inputs[i].dataset.laryngeal)
			document.getElementById("esophageal").innerHTML="Esophageal cancer: "+parseFloat(inputs[i].dataset.esophageal)
			document.getElementById("liver").innerHTML="Liver cancer: "+parseFloat(inputs[i].dataset.liver)
		}
	}
	checkCombined();
}

function checkCombined(){
	if (resultTobacco > 0 && resultAlc > 0){
		document.getElementById("oral").innerHTML="Oral and pharyngeal cancer: \nCombined risk of "+resultAlc+" x "+resultTobacco+" = "+(resultAlc*resultTobacco).toFixed(2);
	}
}