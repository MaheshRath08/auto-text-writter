let text = "This is Mahesh Rath from Odisha, India..."
let mainEL = document.getElementById("main")
let index = 0
function writeText(){
    mainEL.innerHTML = text.slice(0,index)
    index++

    if(index>text.length-1){
        index=0
    }
}

setInterval(writeText, 100)