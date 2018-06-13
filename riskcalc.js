M.AutoInit();

function calcTobacco(value, rr){
	let result = 0;
	let inputs = document.getElementsByClassName("tobacco");
	for (i=0; i<inputs.length;i++){
		if (inputs[i].checked){
			result+=parseFloat(inputs[i].dataset.rr);
		}
	}
	document.getElementById("tobaccoResult").innerHTML="Tobacco induced risk for oral cancer: "+result.toFixed(1);
}