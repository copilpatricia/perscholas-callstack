//GET METHOD
axios.get("https://reqres.in/api/users?page=2")
.then(response => handleData(response.data))
.catch(e => console.log(e))

function handleData(data){
    console.log(data)
}

// fetch("https://reqres.in/api/users?page=2")
// .then(response => response.json())
// .then(data => console.log(data))

// //POST METHOD
//  // if someone want to retrieve the data and they use data.first_name => the firstName is not going to work
// axios.post("https://reqres.in/api/users", {
//     firstName: 'Andy',
//     lastName: 'Warhol'
// })
// .then(function(response){
//     console.log(response.data)
// })

// // PUT aka UPDATE
// axios.put("https://reqres.in/api/users/201", {
//     firstName: 'Hannan',
//     lastName: 'Goolsby'
// })
// .then(function(response){
//     console.log(response)
// })
// .catch(function(response){
//     console.log(response)
// })


// //DELETE METHOD

// axios.delete("https://reqres.in/api/users/201")
// .then(function(response){
//     console.log(response)
// })
// .catch(function(response){
//     console.log(response)
// })


// Exercise

//POST
axios.post("https://reqres.in/api/users", {
    firstName: 'Patricia',
    lastName: 'Muresan',
    email: 'patriciamariamrsn@gmail.com'
})
.then(function(response){
    console.log(response.data)
})

//PUT
axios.put("https://reqres.in/api/users/55", {
    firstName: 'Maria',
    lastName: 'Copil',
    email: 'patriciamariamrsn@gmail.com'
})

.then(function(response){
  console.log(response)
})

//DELETE
axios.delete('https://reqres.in/api/users/55')
.then(function(response){
    console.log(response)
})
.catch(function(response){
    console.log(response)
})


//what if I want to delete only the firstName?
//If I want to display in the browser a specific user can I use their firstName in the searchbar?