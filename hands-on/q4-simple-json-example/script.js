
let btn = document.querySelector('#load-image-btn');
btn.addEventListener('click', async function(){



let response = await axios.get('artwork.json');
    let movie = response.data;
    // document.querySelector('#artwork').innerHTML += `<h1>${movie.title}</h1>`;
    // document.querySelector('#artwork').innerHTML += `<img class="${movie.class}" src="${movie.image_url}">`
let title = document.querySelector('#title')
    title.innerHTML = movie.title;
let image =  document.querySelector('#image')
    image.src=movie.image_url;


})