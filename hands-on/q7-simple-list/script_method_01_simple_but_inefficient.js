let btn = document.querySelector("#load-employee-btn");
let url = "https://anapioficeandfire.com/api/books/";
btn.addEventListener('click', (target)=>{
    axios.get(url).then(async (response)=>{
        for (let book of response.data) {
              let characters = [];
              for (let characterURL of book.povCharacters){
                  let result = await axios.get(characterURL);
                  characters.push(result.data.name)
              }  
              let template = `
                <div class="card">
                <div class="card-title">${book.name}</div>
                <div class="card-body">
                    <ul>
                    <li>ISBN: ${book.isbn}</li>
                    <li>Number of Pages: ${book.numberOfPages}</li>
                    <li>Characeters: ${characters.join()}</li>
                    </ul>
                </div>
                </div>
                `;
                document.querySelector("#book-list").innerHTML += template;

        }
      
    })
});