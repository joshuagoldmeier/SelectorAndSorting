describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });
});


describe('Bubble Sort', function(){
  it('handles two elements', function(){
    expect( bubbleSort([51, 23]) ).toEqual( [23, 51] );
  });
});

describe('Bubble Sort', function(){
  it('handles multiple elements', function(){
    expect( bubbleSort([77, 2, 8, 4, 43]) ).toEqual( [2, 4, 8, 43, 77] );
  });
});

describe('Bubble Sort', function(){
  it('handles negative numbers', function(){
    expect( bubbleSort([8, -3, 5]) ).toEqual( [-3, 5, 8] );
  });
});

describe('Bubble Sort', function(){
  it('handles duplicate numbers', function(){
    expect( bubbleSort([9, 5, 3, 5, 7]) ).toEqual( [3, 5, 5, 7, 9] );
  });
});

