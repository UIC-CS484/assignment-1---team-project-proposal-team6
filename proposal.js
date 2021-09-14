function updateFontSize(){
    let value = document.getElementById("fontInput").value; 
    reponses = document.getElementsByClassName("allValues");

    for(let i =0;i< responses.length;i++){
        responses[i].style.fontSize = value + "px";
    }
}