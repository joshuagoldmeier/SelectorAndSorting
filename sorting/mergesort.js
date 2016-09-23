function split(wholeArray) {
	var middle = Math.trunc(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0, middle)
	var secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}



function merge(firstArr, secondArr){
	var mergedArray = [];
	while(firstArr.length!==0 && secondArr.length!==0){

		if (firstArr[0] < secondArr[0])
			mergedArray.push(firstArr.shift());
		else
			mergedArray.push(secondArr.shift());
		}

	if(firstArr.length!==0)
		return mergedArray.concat(firstArr);
	else
		return mergedArray.concat(secondArr);

}

function mergeSort(array) {

	if (array.length <= 2){
		if (array.length === 2)
			return merge([array[0]], [array[1]]);
		else
			return array;
	}
	else {
		return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));
	}

}