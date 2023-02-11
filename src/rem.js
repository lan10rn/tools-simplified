document.addEventListener('DOMContentLoaded' , function(){
    var logic = document.getElementById('logik');

    logic.addEventListener('click',function(){
        logik();
    })
})

function logik(){
    document.getElementById("out0").innerHTML = "";
    let one = document.getElementById('val1').value;
    let two = document.getElementById('val2').value;
    one = parseInt(one);
    two = parseInt(two);
    let ans = one%two ;
    document.getElementById("out0").innerHTML += `<p class="ex">The remainder is : ${ans}</p>`;
}