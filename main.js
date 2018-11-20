
var multiplicationTable = "";
function multiplyOverRangeOfTwoIntegers (start, end) {
	let maxLength = createEachFieldValue(start,end).length;
	if(!isInputValid(start,end)){
		return null
	}
	for (i = start;i<=end;i++){
		let tmp_text = AddSpace(start,i,maxLength);
		multiplicationTable+=tmp_text;
		if(i!=end){
			multiplicationTable+="\n";
		}
		
	}
	return multiplicationTable
}

function isInputValid(start,end){
	return (start <= end && end<=1000)
}

function createEachFieldValue(i,j){
	return i.toString()+"*"+j.toString()+"="+(i*j).toString();
}

function AddSpace(rowStart,rowEnd,maxLength){
	let rowText = "";
	for (k = rowStart;k<=rowEnd;k++){
		let Fieldtext = createEachFieldValue(k,rowEnd);
		Fieldtext += " ".repeat((maxLength - Fieldtext.length)+2);
		rowText += Fieldtext;
		}
	return rowText
}



module.exports = multiplyOverRangeOfTwoIntegers;















