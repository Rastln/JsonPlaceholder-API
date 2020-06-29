const request = require('supertest')

const address = `https://jsonplaceholder.typicode.com`

const app = require(address)

describe('GET /users/1/posts', () => {
    it('Gets list of things', (done) => {
        request(app)
            .get('/users/1/posts')
            .expect(200, done)
    })
})