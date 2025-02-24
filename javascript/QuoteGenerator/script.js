const api_url = "http://api.quotable.io/random"

let quoteContent = document.getElementById("quote-content")
let author = document.getElementById("author")

async function generateQuote(url) {
    const response = await fetch(url)
    const quote = await response.json()
    quoteContent.innerHTML = quote.content 
    author.innerHTML = quote.author

}

generateQuote(api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteContent.innerHTML + "--- by " + author.innerHTML, "Tweet Window" , "width=700, height=400")
}