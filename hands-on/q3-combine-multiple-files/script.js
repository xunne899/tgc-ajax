const { axios } = require("../q2-read-file-as-items/axios.min")

document.querySelector('#load-btn')
.addEventListener('click',function(){
let request1 = axios.get('file1.txt')
let request2 = axios.get('file2.txt')

axios.all (request1, request2).then(function(res1,res2){
    console.log(res1.data)
    console.log(res2.data)
})


})



document.querySelector("#load-btn")
.addEventListener('click', async function(){
    let request1 = axios.get('file1.txt')
    let request2 = axios.get('file2.txt')

    let response1 = await request1
    let response2 = await request2

    console.log(response1.data)
    console.log(response2.data)

    document.querySelector("#content")
    .innerHTML = response1.data + response2.data
// if  txt not json format it is a string 
})



document.querySelector('#load-btn').addEventListener('click',function(){
    // let response = await axios.all(request1, request2)

    let response = await axios.all([axios.get('file1.txt'),axios.get('file2.txt')])
 console.log(response)

})