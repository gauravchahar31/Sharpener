const path = require('path');
const fs = require('fs');
const rootDir = path.dirname(require.main.filename);
const filePath = path.join(rootDir, 'data', 'products.json')

module.exports = class Product{
    constructor(title, image, price){
        this.title = title;
        this.image = image;
        this.price = price;
    }
    save(){
        console.log('Triggered');
        let products = [];
        let newProduct = {
            title : this.title,
            image : this.image,
            price : this.price
        }
        const filePath = path.join(rootDir, 'data', 'products.json')
        const data = fs.readFileSync(filePath);
        products =  JSON.parse(data);
        products.push(newProduct);
        fs.writeFileSync(filePath, JSON.stringify(products));
    }
    static fetchProducts(){
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
};