// function foo(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }

function getNum(num){
    result = document.getElementById("result")
  
    result.value += num;
}

function resultClear(){
    result = document.getElementById("result");
    result.value = ""
}
function getResult(){
    result = document.getElementById("result");
    result.value = eval(result.value);
}