const { axios } = require("../q2-read-file-as-items/axios.min");

// let allUsers=[];
// document.querySelector('#load-users-btn')
//     .addEventListener('click', async function () {

//         let response = await axios.get('users.json');
//         let users = document.querySelector('#all-users');
//         allUsers = response.data.users; // store the data in the global variable
//                                             // for access later
//         for (let u of response.data.users) {
//             users.innerHTML += `<li>${u.firstName} ${u.lastName}
//                 (${u.emailAddress})</li>`
//         }
//     });

// document.querySelector('#btnFind')
//     .addEventListener('click', function () {
//         let searchBy = document.querySelector('#search').value;
//         let targetUser = [];
//         for (let u of allUsers) {
//             if (u.userId == searchBy) {
//                 targetUser = u;
//             }
//         }
//         alert(targetUser.firstName + " " + targetUser.lastName);
//     })


// normal innerHTML way
    // document.querySelector("#load-users-btn")
    // .addEventListener('click',async function(){
    //     let response = await axios.get('users.json')
    //     let allUsers = document.querySelector ('#all-user')
    //     let users = response.data.users
    //     for (let u of users){
    //         allUsers.innerHTML += 
            
    //         `<ul>
    //         <li>First Name: ${u.firstName}</li>
    //         <li>Last Name: ${u.lastName}</li>
    //         <li>Email: ${u.emailAddress}</li>
    //         </ul> 
    //         `    
    //     }

    // })




    // using function
//     function createFirstNameElement(firstName){
//         let li = document.createElement('li')
//         li.innerHTML = 'Email'+ email;
//         return li;
//     }

//     function createFirstNameElement(lastName){
//         let li = document.createElement('li')
//         li.innerHTML = 'Email'+ email;
//         return li;
//     }
//     function createFirstNameElement(email){
//         let li = document.createElement('li')
//         li.innerHTML = 'Email'+ email;
//         return li;
//     }



// // using create element 
//     document.querySelector("#load-users-btn").addEventListener('click',async function(){
//      alert()
//         let r = await axios.get('user.json')


//     })






// solution

// document.querySelector('#load-users-btn')
//     .addEventListener('click', async function(){
//         let r = await axios.get('users.json');
//         let users = r.data.users;
//         let allUsers = document.querySelector('#all-users');
//         for (let u of users) {
//             allUsers.innerHTML += `
//                 <ul>
//                      <li>First Name: ${u.firstName}</li>
//                      <li>Last name: ${u.lastName}</li>
//                      <li>Email: ${u.emailAddress}</li>
//                 <ul>
//             `
//         }
//     })

// function createFirstNameElement(firstName) {
//     let li = document.createElement('li');
//     li.innerHTML = "First Name: " + firstName;
//     return li;
// }

// function createLastNameElement(lastName) {
//     let li = document.createElement('li');
//     li.innerHTML = "Last Name: " + lastName;
//     return li;
// }

// function createEmailElement(email) {
//     let li = document.createElement('li');
//     li.innerHTML = "Email: " + email;
//     return li;
// }

// document.querySelector('#load-users-btn').addEventListener('click', async function(){
//     let r = await axios.get('users.json');
//         let users = r.data.users;
//         let allUsers = document.querySelector('#all-users');
//         for (let u of users) {
//             let ulElement = document.createElement('ul');
            
//             let firstNameElement = createFirstNameElement(u.firstName);
//             ulElement.appendChild(firstNameElement);

//             let lastNameElement = createLastNameElement(u.lastName);
//             ulElement.appendChild(lastNameElement);

//             let emailElement  = createEmailElement(u.emailAddress);
//             ulElement.appendChild(emailElement);

//             allUsers.appendChild(ulElement);
//         }
// })

document.querySelector('#load-users-btn').addEventListener('click', async function(){
    let response = await axios.get('users.json');  
    let allUsers = document.querySelector('#all-users');
    for (let u of response.data.users) {
        let ul = document.createElement('ul');
        ul.innerHTML = `
        <li>First Name: ${u.firstName} </li>
        <li>Last Name:  ${u.lastName}</li>
        <li class="email" data-email=${u.emailAddress}>Email: ${u.emailAddress} </li>`

        ul.addEventListener("click", function(){
            alert("Selected " + u.firstName + " " + u.lastName)
        })

        ul.querySelector('.email').addEventListener('click', function(e){
            e.stopPropagation();
            alert("email = " + u.emailAddress);

            console.log(e.target.dataset.email)
        }) 

        allUsers.appendChild(ul);
    }
})

