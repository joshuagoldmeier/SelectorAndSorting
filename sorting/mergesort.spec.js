describe('Split', function(){
  it('Splits an even Array', function(){
    var wholeArray = [1,2,3,4,5,6]
    expect(split(wholeArray)).toEqual([[1,2,3],[4,5,6]]);
  });

    it('Splits an odd Array', function(){
    var wholeArray = [1,2,3,4,5]
    expect(split(wholeArray)).toEqual([[1,2],[3,4,5]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var arr1 = [1,5,9]
    var arr2 = [2,6,7]
    expect(merge(arr1,arr2)).toEqual([1,2,5,6,7,9]);
  });
});

describe('Merge', function(){
  it('Should Merge Sort an unsorted Array', function(){
    var unsortedArray = [4,1,3,2]
    
    expect(mergeSort(unsortedArray)).toEqual([1,2,3,4]);
  });
});

describe('Merge', function(){
  it('Should Merge Sort an unsorted Array', function(){
    var unsortedArray = [4,1,5,3,2]
    
    expect(mergeSort(unsortedArray)).toEqual([1,2,3,4,5]);
  });
});

describe('Merge', function(){
  it('Should Merge Sort an unsorted Array', function(){
    var unsortedArray = [23, 5, 67, 55, 88, 32, 15, 2]
    
    expect(mergeSort(unsortedArray)).toEqual([2,5,15,23,32,55,67,88]);
  });
});