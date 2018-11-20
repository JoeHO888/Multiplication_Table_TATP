

function multiplyOverRangeOfTwoIntegers (start, end) {
	if (start>end){
		return null;
	}
	let multiplicationTable = "";
	let tmp_text = "";
	for (i = start;i<=end;i++){
		for (j = start; j<=i;j++){
			tmp_text += j.toString()+"*"+i.toString()+"="+(i*j).toString();
			if (j!=i){
				tmp_text+="  ";
			}
		}
		if (i!=end){
			multiplicationTable+=tmp_text+"\n";
		}else{
			multiplicationTable+=tmp_text;
		}
		tmp_text = "";
		
	}

    return multiplicationTable;
}

module.exports = multiplyOverRangeOfTwoIntegers;