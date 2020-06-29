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


module.exports = app