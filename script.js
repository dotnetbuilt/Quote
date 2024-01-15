const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuoteBtn = document.getElementById("newQuote")
const api_url = "https://api.quotable.io/random"

async function getQuote(url){
    const response = await fetch(url)
    let data = await response.json()
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

newQuoteBtn.addEventListener("click", ()=> {
    getQuote(api_url)
})

