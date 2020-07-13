let btn = document.querySelector("#load-employee-btn");
let url = "https://anapioficeandfire.com/api/books/";
btn.addEventListener('click', async ()=>{

    // load in all the books
    let response = await axios.get(url);

    // array to store ALL the promises to load in the characters
    let allPromises = [];
    let allBooks = [];

    // for each book, load in all the characters
    for (let [index, book] of response.data.entries()){
        // load in the character names for each book
        let characterPromises = [];
        for (let characterURL of book.povCharacters) {
            let a = axios.get(characterURL)
            characterPromises.push(a);
            allPromises.push(a);
        }

        let characterResponses = [];
        for (let p of characterPromises) {
            // call all the await at one go
            characterResponses.push( (await p) );
        }

       let characterNames = [];
       for (let r of characterResponses) {
           characterNames.push(r.data.name)
       }

       book.characterNames = characterNames;
       allBooks[index] = book;
    }

    await Promise.all(allPromises);
    console.log(allBooks);

});