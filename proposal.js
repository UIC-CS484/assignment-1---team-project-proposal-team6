function recursiveFontUpdate(element, size){
    element.style.fontSize = size;
    for(let i=0;i<element.children.length;i++){
        recursiveFontUpdate(element.children[i], size)
    }
}
function updateFontSize(){
    let value = document.getElementById("fontInput").value + "px"; 
    console.log(value)
    let body = document.getElementById("body");
    recursiveFontUpdate(body, value);
}

