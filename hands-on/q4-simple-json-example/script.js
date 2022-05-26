
let btn = document.querySelector('#load-image-btn');
btn.addEventListener('click', async function(){




        // document.querySelector('#artwork').innerHTML += `<h1>${movie.title}</h1>`;
        // document.querySelector('#artwork').innerHTML += `<img class="${movie.class}" src="${movie.image_url}">`

let response = await axios.get('artwork.json');
let movie = response.data;

let title = document.querySelector('#title')
    title.innerHTML = movie.title;
let image =  document.querySelector('#image')
    image.src=movie.image_url;


})



document.querySelector('#load-image-btn')
    .addEventListener("click", async ()=>{
       let response =  await axios.get('artwork.json');
       console.log(response.data);

        let h2Element = document.createElement('h2');
        h2Element.innerHTML = response.data.title;

        let imageElement = document.createElement('img')
        imageElement.src = response.data.image_url;
// for new element created to be show need to appendchild
        let artWorkDiv = document.querySelector('#artwork');
        artWorkDiv.appendChild(h2Element);
        artWorkDiv.appendChild(imageElement);

    })