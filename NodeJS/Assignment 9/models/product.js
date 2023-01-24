const path = require('path');
const fs = require('fs');
const rootDir = path.dirname(require.main.filename);
const filePath = path.join(rootDir, 'data', 'products.json')

function readFile(){
    let data = fs.readFileSync(filePath);
    data =  JSON.parse(data);
    return data;
}

function saveFile(products){
    fs.writeFileSync(filePath, JSON.stringify(products));
}

module.exports = class Product{
    constructor(title, image, price){
        this.title = title;
        this.image = image;
        this.price = price;
    }
    save(){
       let products = readFile();
        let newProduct = {
            title : this.title,
            image : this.image,
            price : this.price
        };
        products.push(newProduct);
        saveFile(products);
    }
    static fetchProducts(){
        return readFile();
    }
    static deleteProduct(productID){
        let products = readFile();
        let proToDel = products.find(product => {
            product.title === productID;
        })
        products.splice(products.indexOf(proToDel), 1);
        saveFile(products);
    }
};