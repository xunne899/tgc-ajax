let allUsers=[];
document.querySelector('#load-users-btn')
    .addEventListener('click', async function () {

        let response = await axios.get('users.json');
        let users = document.querySelector('#all-users');
        allUsers = response.data.users; // store the data in the global variable
                                            // for access later
        for (let u of response.data.users) {
            users.innerHTML += `<li>${u.firstName} ${u.lastName}
                (${u.emailAddress})</li>`
        }
    });

document.querySelector('#btnFind')
    .addEventListener('click', function () {
        let searchBy = document.querySelector('#search').value;
        let targetUser = [];
        for (let u of allUsers) {
            if (u.userId == searchBy) {
                targetUser = u;
            }
        }
        alert(targetUser.firstName + " " + targetUser.lastName);
    })