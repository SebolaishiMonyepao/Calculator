// cancels all the values on the display
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // display values of operands and operators
   function display(value) {
    document.getElementById("result").value += value;
   }
   // assesses the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }