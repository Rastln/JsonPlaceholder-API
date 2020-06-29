const express = require('express')
const app = express()
const fetch = require('node-fetch')

const url = "https://jsonplaceholder.typicode.com"
const testurl = 'https://jsonplaceholder.typicode.com/posts/1/comments'

app.use(express.json())
app.get('/posts', (req, res) => {
    fetch(url + '/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(data => {
        res.send(data)
      })
})

app.get('/posts/1/comments', (req, res) => {
    fetch(url + '/posts/1/comments')
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
})

app.get('/albums/1/photos', (req, res) => {
    fetch(url + '/albums/1/photos')
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
})
app.get('/users/1/:type', (req, res) => {
    const type = req.params.type
    if(type == "albums")
        fetch(url + '/users/1/albums')
            .then(response => response.json())
            .then(data => {
                res.send(data)
            })
    else if(type == "todos")
    fetch(url + '/users/1/todos')
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
    else if(type == "posts")
    fetch(url + '/users/1/posts')
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
})

app.post('/posts/1/comments', (req, res) => {
    const postIDtag = req.body.postId
    const idtag = req.body.id
    const nametag = req.body.name
    const emailtag = req.body.email
    const bodytag = req.body.body
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
    method: 'POST',
    body: JSON.stringify({
      postID: postIDtag,
      id: idtag,
      name: nametag,
      email: emailtag,
      body: bodytag
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(`These have been added: postID: ${postIDtag}, id: ${idtag}, name: ${nametag}, email: ${emailtag}, body: ${bodytag}`)
  })
})

module.exports = app