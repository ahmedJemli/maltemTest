///////////////////
//6)
var i;
    var fib = []; // Initialize array!
    var test = true;
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=100; i++)
    {
       
        fib[i] = fib[i-2] + fib[i-1];
			if (test){
				console.log(fib[0]);
				console.log(fib[1]);
			}
 	test = false;
        console.log(fib[i]);
   }


/////////////////////
//7)

function printFrame(arr) {
    function fill (str, length, char) {
      return (str.length < length) ? fill(str + char, length, char) : str;
    }
    
    let size = arr.map((str) => {
            return str.length;
        })
        .reduce((a, b) => {
            return Math.max(a, b);
        });
    
    let line = fill('', size + 4, '*');
    
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
        });
    arr.unshift(line);
    arr.push(line);
    
    return arr.join('\n\n');;
}

console.log(printFrame( ["November", "is", "the", "coolest", "month", "of", "the", "Year"]));

////////////////////
//5)

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}
var myString = "abcd";
permutations = permut(myString);
console.log(permutations);
///////////////////
// 1)
function getTimeDifference(d1, d2){
    
    return((d2 - d1) / 60000);
}
    var d1 = new Date(1029394901939);
    var d2 = new Date(1029394990284);
    console.log(getTimeDifference(d1, d2));

///////////////////
// 3)
  var x=0;
function compute(){
  for (var i=1; i<=1000000; i++){
  if (i%2 == 0){
    x -= 1/(2*i -1);
  }else {
    x += 1/(2*i -1);
  }
  }
  return x*4;
}
  console.log(compute());

  ///////////////////
  // 4
  var arrays  = [
    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
   [3,2,9,3,7,11,15,13,23,27,32,35,36,37],
   [1,3,5,7,11,13,15,17,19,21,23,27,35,37],
   [9,17,32,7,2,3,1,45,46,47,55,60,6,17]
];
function searchCommonElements(arrays){
  var currentElements = {};
  var commonElements = {};
  for (var i = arrays[0].length-1; i >=0; i--){
    currentElements[arrays[0][i]] = 0; // here we care only about the index
  }
  for (var i = arrays.length-1; i>0; i--){
    var currentArray = arrays[i];
    for (var j = currentArray.length-1; j >=0; j--){
      if (currentArray[j] in currentElements){
        commonElements[currentArray[j]] = 0; // here again we care only about the index
      }
    }
    currentElements = commonElements;
    commonElements = {};
  }
  return Object.keys(currentElements).map(function(value){
    return parseInt(value);
  });
}
console.log(searchCommonElements(arrays)); //result  [3, 7]

/////////
/// 2) we aasume that there is no division by 0 
var str = "5+4-2";
  var x = str.split(/[-+*/]/);
  
   var y = str.split(/[1234567890]/);
  var operator = [];
  for (var i=0; i<y.length; i++){
    if (y[i]== "+" || y[i]== "/" || y[i]== "-" || y[i]== "*"){
      operator.push( y[i]);
    }
  }
  for (var i=0; i<operator.length; i++){
    if (  operator[i]== "*"){
      var s = parseInt(x[i]) * parseInt(x[i+1]);
      x.splice(i,2,s);// remove 2 element and replace it by their arithmetic result
      operator.splice(i,1);// remove the operator used 
    }
    else  if (  operator[i]== "/"){
      var s = parseInt(x[i]) / parseInt(x[i+1]);
      
      x.splice(i,2,s);// remove 2 element and replace it by their arithmetic result
      operator.splice(i,1);// remove the operator used 
    }
  }
  for (var i=0; i<operator.length; i++){
    if (  operator[i]== "+"){
      var s = parseInt(x[i]) + parseInt(x[i+1]);
     
      x.splice(i,2,s);// remove 2 element and replace it by their arithmetic result
      operator.splice(i,1);// remove the operator used 
    }
    else  if (  operator[i]== "-"){
      var s = parseInt(x[i]) - parseInt(x[i+1]);
      
      x.splice(i,2,s);// remove 2 element and replace it by their arithmetic result
      operator.splice(i,1);// remove the operator used 
    }
  }
  var result = 0;
  if (  operator[0]== "+"){
       result = parseInt(x[0]) + parseInt(x[1]);
     
    }
    else  if (  operator[0]== "-"){
       result = parseInt(x[0]) - parseInt(x[1]);
   
    }
  console.log(x); //
  console.log(operator); 
  console.log(result);