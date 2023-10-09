let count = 0
let x = document.getElementById("increment-dis")
let y = document.getElementById("finish")

function incr(){                       //Incrrement button//

    count = count + 1  
    x.innerHTML = count 
}

function save(){                     //Save button//

  let Y = count + " -"
   y.innerHTML += Y   
}



