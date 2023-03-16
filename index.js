const quoteEl = document.getElementById("quote");
const btnEl = document.getElementById("btn");
const authorEl = document.getElementById("author")
const apiURL = "http://api.quotable.io/random"

async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disable = true;
        quoteEl.innerText = "...";
        authorEl.innerText = "...";
        const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText =quoteContent;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.innerText = "Get a quote";
        btnEl.disable = false;
    console.log(data);
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later"
        authorEl.innerText = "An error happened"
    }
    
}
getQuote()

btnEl.addEventListener("click", getQuote);