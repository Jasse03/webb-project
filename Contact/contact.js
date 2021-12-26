


let btnSubbmit = document.getElementById('subbmitButton')
btnSubbmit.addEventListener('click', ()=> {
    if(document.getElementById("email" || "fnamn" ||  "enamn" || "meddelandet").value.length == 0 )
    {
        alert("Please fill the empty boxes")
    } else {
        alert("Thank you for contacting us!")
    }
});