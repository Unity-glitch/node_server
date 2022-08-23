// using node to create a simple server 

// const http = require('http');
// const { text } = require('stream/consumers');
// const server = http.createServer((req, res) => {
    // i want my content type to be text.html
//     res.setHeader('Content-Type', 'text/html')
//     res.end("<h1>Unity</h1>")
//   console.log("unity running");
// });

// port

// server.listen( 3001, () => {
//   console.log("Server running on port '3001'");
// });




// const http = require('http');
// const server=http.createServer((req,res)=>{
//     // res.setHeader('Content-Type', 'text/html');
//     // res.end('<h1>Femisire is a fish</h1>')
//     // console.log('headers',req.headers);
//     const user={
//         name:'Femisire',
//         hobby:'sewing',
//     }
//     console.log('method',req.method);
//     console.log('url',req.url)
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user))
// })


// using expressjs 

// const express = require('express')
// const app = express()
// const port = 3001;

// how to use middlewear 
// using app.use means you want to use a middlewear 
// app.use((req, res, next) => {
//   console.log('Unity');
//   next()
// }) 
// using jsObject 
// const user ={
//   name: 'Unity',
//   password: 'password',
//   email: 'email'
// }

// app.get('/', (req, res) => {
//   res.send(user)
// })

// const User ={
//   name: 'Unity',
//   color: 'White'
// }



// app.post('/profile', (req, res) => {
//   res.send(User)
// })


// anytime you are making a request you have to get request 
// / means home route
// app.get('/', (req, res) => {
//   res.send('Hello Unity')
// } )
// how to create a server 
// app.listen(port, () => {
//   console.log("Server running on port 3000");
// })



//middlewear
// eg body-parser 



// const middlewear = (req, res) => {
//   res.send('Hello Unity')
// }

// app.get('/', (req, res) => {
//   res.send('Hello')

// })


// create a server 




