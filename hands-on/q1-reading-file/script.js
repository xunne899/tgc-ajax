 let button = document.querySelector("#load-btn")
     button.addEventListener('click', async function(){
    // alert('click')
let response = await axios.get("contact.txt");
    console.log(response.data);
 let d = document.querySelector('div#content');
   d.innerHTML = response.data
console.log(response.data)

// d.innerText = response.data

//    let divElement = document.createElement('div');
//    divElement.innerText = response.data

   //appendChild can only append a HTML element

//    before we append child we must create new element(div,class, id)



})
