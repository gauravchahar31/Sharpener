const database = require('../database/connection')

module.exports = class Product{
    constructor(title, image, price){
        this.title = title;
        this.image = image;
        this.price = price;
    }
    save(){

    }
    static async fetchProducts(){
        const products = await database.execute('Select * From Products')
        .then(data => {
            return data[0];
        })
        .catch(err => {
            console.log(err);
        })
        return products;
    }
    static async deleteProduct(productID){
        await database.execute(`Delete From Products Where title='${productID}'`);
    }
};