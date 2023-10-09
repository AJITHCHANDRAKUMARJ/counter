let count = 0
let x = document.getElementById("increment-dis")
let y = document.getElementById("finish")

function incr(){                      //Incrrement button//

    count = count + 1  
    x.innerHTML = count 
}

function save(){                      //Save button//

  let Y = count + " -"
   y.innerHTML += Y                   // if you want to start the 
    count = 0                         // count from zero again then
}                                     //add the "count = 0" line



