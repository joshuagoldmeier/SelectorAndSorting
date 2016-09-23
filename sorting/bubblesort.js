function bubbleSort(array) {

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - (i+1); j++) {
			if (swapIsNeeded(array[j], array[j+1])){
				swap(array, j)
			}
		}	
	 } 

	 return array;
}

function swapIsNeeded(elementOne, elementTwo){
	return elementOne > elementTwo;
}

function swap(arr, firstPosition){
	var temp = arr[firstPosition];
	arr[firstPosition] = arr[firstPosition+1]
	arr[firstPosition+1] = temp;
}