let output = document.getElementById("output");

function show(data) {
    output.value += data;  

}

function del() {
  output.value=output.value.slice(0,-1)
  
}
function clearOutput() {
  output.value = "";
}

function sum() {
try{
  output.value=eval(output.value)
}
catch (error){
   alert("invalid value")

}

  
}
