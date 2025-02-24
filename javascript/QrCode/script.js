const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let btn = document.querySelector("button")
let inputBox = document.getElementById("input-box") 
let box = document.getElementById("qr-placeholder")
let qrImage = document.getElementById("qrImage")

async function generateQR(url){
    if(inputBox.value !== ""){
        qrImage.src = api_url + inputBox.value
        box.classList.add("show-img")

    }
    else {
        alert("Please insert some text or url")
    }
}

