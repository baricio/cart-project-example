var {connection} = require('../database/connection')
var products = require('./products.json')

let seeder = async() => {
    let client = await connection();
    console.log('created database Shopping');

    let db = client.db('Shopping')
    
    await db.collection('products').drop();
    await db.createCollection('products');
    console.log('created products collection');

    await db.collection('products').insertMany(products.data);
    console.log('fill products');

    await db.createCollection('checkout');
    console.log('created collection checkout');

    console.log('seeder done :)');
    client.close()
};

seeder();