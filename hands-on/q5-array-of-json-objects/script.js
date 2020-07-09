document.querySelector("#load-users-btn").addEventListener('click', async function(){
    let response = await axios.get('users.json');
    let allUserDiv = document.querySelector('#all-users');
    for (let eachUser of response.data.users) {
        let HTMLfragment = ` <div class="user">
        <p>Name: ${eachUser.firstName} ${eachUser.lastName}</p>
        <p>Email: ${eachUser.emailAddress}</p>
      </div>`;

        allUserDiv.innerHTML += HTMLfragment;
    }
})