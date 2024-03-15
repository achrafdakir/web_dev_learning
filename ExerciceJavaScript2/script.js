function append(input){
    document.getElementById('display').value += input;
    console.log(input);
}

function cal(){
    document.getElementById('display').value = '';
}
function calculate(){
    document.getElementById('display').value = eval(display.value);
}
