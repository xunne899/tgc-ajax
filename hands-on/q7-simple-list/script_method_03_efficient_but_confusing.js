let btn = document.querySelector("#load-employee-btn");
let url = "https://anapioficeandfire.com/api/books/";



btn.addEventListener("click", () => {
  let booksInfo = [];  

  // this store all the promises we are going to create
  // when we fetch each character
  let allPromises = [];

  // will fetch all the books
  axios.get(url).then( (response) =>  {

    // go through of the book
    // `[index, book]` extract out the index (position) and
    // the book object
    for (let [index, book] of response.data.entries()) {
     
      // this is to store all the character promises
      let requests = [];
      
      // will extract each URL for the character
      for (let characterURL of book.povCharacters) {
        // creating a promise that will be stored in the variable r
        let r = axios.get(characterURL);

        // add the promise to the requests
        requests.push(r);

        allPromises.push(r)
      }
      // when all the characters for the CURRENT book
      // has been fetched
      axios.all(requests).then(function(responses) {
        
        let characters = [];
        // extract out the name of each character from results
        for (let eachResponse of responses) {
            characters.push(eachResponse.data.name);
        }
        // store the names of the characters array
        book.characterNames = characters;

        //save into the booksInfo array by index
        booksInfo[index] = book;
      });
      
    }
    Promise.all(allPromises).then(function(){
        console.log("All promises loaded")
            console.log(booksInfo);
            for (let book of booksInfo) {
                 let template = `
                <div class="card">
                <div class="card-title">${book.name}</div>
                <div class="card-body">
                    <ul>
                    <li>ISBN: ${book.isbn}</li>
                    <li>Number of Pages: ${book.numberOfPages}</li>
                    <li>Characeters: ${book.characterNames.join()}</li>
                    </ul>
                </div>
                </div>
                `;
                document.querySelector("#book-list").innerHTML += template;
            }
        
    })

  });
});
