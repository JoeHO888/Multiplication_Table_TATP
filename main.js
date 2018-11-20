function multiplyOverRangeOfTwoIntegers (start, end) {
	if (start>end){
		return null;
	}
	let text = "";
	let tmp_text = "";
	for (i = start;i<=end;i++){
		for (j = start; j<=i;j++){
			tmp_text += j.toString()+"*"+i.toString()+"="+(i*j).toString();
			if (j!=i){
				tmp_text+="  ";
			}
		}
		if (i!=end){
			text+=tmp_text+"\n";
		}else{
			text+=tmp_text;
		}
		tmp_text = "";
		
	}
	//console.log(text);
    return text;
}

module.exports = multiplyOverRangeOfTwoIntegers;