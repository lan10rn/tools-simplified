document.addEventListener('DOMContentLoaded' , function(){
    var logic = document.getElementById('logik');

    logic.addEventListener('click',function(){
        logik();
    })
})
function logik(){
    document.getElementById("out0").innerHTML = "";
    document.getElementById("out1").innerHTML = "";
    let one = document.getElementById('val1').value;
    let two = document.getElementById('val2').value;
    one = parseFloat(one);
    two = parseFloat(two);
    let ans = two/(one*one)
    ans = Math.floor(ans)
    document.getElementById("out0").innerHTML += `<p class="ex">Your BMI is : ${ans}</p>`; 
    if(ans <= 18)
    document.getElementById("out1").innerHTML += `<p class="ex">Your are <i style="color:blue;font-weight:400;">Underweight</i></p>`; 
    else if(ans < 25)
    document.getElementById("out1").innerHTML += `<p class="ex" >Your are <i style="color:green;font-weight:500;" >Healthy</i></p>`;
    else if(ans < 40)
    document.getElementById("out1").innerHTML += `<p class="ex">Your are <i style="color:orange;font-weight:700;">Overweight</i></p>`;
    else 
    document.getElementById("out1").innerHTML += `<p class="ex">Your are <i style="color:red;font-weight:800;">Extremly Obese</i></p>`;
}