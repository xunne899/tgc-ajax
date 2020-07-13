let btn = document.querySelector("#load-employee-btn");
let url = "https://anapioficeandfire.com/api/books/";
btn.addEventListener("click", target => {
  axios.get(url).then( response => {
    for (let book of response.data) {
      let requests = [];
      for (let characterURL of book.povCharacters) {
        // creating a promise that will be stored in the variable r
        let r = axios.get(characterURL);
        requests.push(r);
      }
      axios.all(requests).then(function(responses) {
        
        let characters = [];
        for (let eachResponse of responses) {
            characters.push(eachResponse.data.name);
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
      });
    }
  });
});
