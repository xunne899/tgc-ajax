let b = document.querySelector('#load-btn');
// b.addEventListener('click', function(){
//     axios.get('contact.txt').then(function(response){
//         let content = response.data;
//         // let select the div
//         let contentDiv = document.querySelector("#content");
//         contentDiv.innerHTML = content;
//     })
// })

// AWAIT/ASYNC
b.addEventListener('click', async function(){
    let response  = await axios.get('contact.txt');
    let contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = response.data;
})

