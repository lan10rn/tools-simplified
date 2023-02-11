let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            function evil(fn) {
                return new Function('return ' + fn)();
              }
            string = evil(string);
            console.log(string)
            // document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = ""
            console.log(string)
            // document.querySelector('input').value = string
        }
        else{
            string = string + e.target.innerHTML;
            console.log(e.target)
            // document.querySelector('input').value = string
        }
        document.querySelector('input').value = string
    })
})

