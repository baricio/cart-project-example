var {connection} = require('./database/connection');

const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {
    res.json({status: 'ok'})
})


app.get('/api/v2/products', async (req, res) => {
    let client = await connection()
    let db = client.db('Shopping')
    products = await db.collection('products').find({}).toArray()
    console.log(products)
    res.json(products)
})

app.listen(port, () => console.log(`App listening on port ${port}`))