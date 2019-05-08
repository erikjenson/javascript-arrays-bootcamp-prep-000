var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  a=[b,...a];
  return a;
}

function destructivelyAddElementToBeginningOfArray(a, b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b){
  a=[...a, b];
  return a;
}

function destructivelyAddElementToEndOfArray(a, b){
  a.push(b);
  return a;
}

function accessElementInArray(a,b){
  var x= a[b];
  return x;
}

function destructivelyRemoveElementFromBeginningOfArray(a){
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  var x=a.slice(1);
  return x;
}

function destructivelyRemoveElementFromEndOfArray(){
  a.pop();
  return a;
}
