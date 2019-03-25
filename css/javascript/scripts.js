function triangleTracker(){
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  if (isNaN (a === true) || isNaN (b === true) || isNaN (c === true)){
    alert("Please enter a number in the field!");
  }
  else{
    if ((a + b)>= c && (a + c)>= b && (b + c)>= a) {
      alert("THIS IS  A TRIANGLE");

      if (a === b && b === c && c === a ){
        alert("Equilateral Triangle");
      }
      else if (a === b || a === c || b === c){
              alert("Isosceles Triangle");
      }
      else if (a !== b && b !== c && a != c) {
              alert("Scalene Triangle");
      }
  }
    else{
    alert("NOT A TRIANGLE")
    }

};
};
