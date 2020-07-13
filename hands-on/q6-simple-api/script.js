
let url = "https://programming-quotes-api.herokuapp.com/quotes/random"
let btn = document.querySelector("#load-quote-btn");
btn.addEventListener('click', async ()=>{
    // use await to wait for the response to be available
    let response = await axios.get(url);
    let quoteElement = document.querySelector("#quote");
    quoteElement.innerHTML = `
    <blockquote>${response.data.en}</blockquote>
    <span>${response.data.author}</span>
    `

})