document.addEventListener('DOMContentLoaded' , function(){
    var logic = document.getElementById('logik');

    logic.addEventListener('click',function(){
        logik();
    })
})
function logik(){
    document.getElementById("out0").innerHTML = "";
    document.getElementById("out1").innerHTML = "";
    document.getElementById("out2").innerHTML = "";
    let one = document.getElementById('val1').value;
    let two = document.getElementById('val2').value;
    one = parseInt(one);
    two = parseInt(two);
    document.getElementById("out0").innerHTML += `<p class="ex">AND result : ${one&two}</p>`;
    document.getElementById("out1").innerHTML += `<p class="ex">OR  result : ${one|two}</p>`;
    document.getElementById("out2").innerHTML += `<p class="ex">XOR result : ${one^two}</p>`; 
}