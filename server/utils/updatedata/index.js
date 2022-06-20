const Category = require('../../models/ProductCategory.js');
const Product = require('../../models/Product.js');

const categoryData = require('./categoryData.js');
const productData = require('./productData.js');


const ExampleDataFormation = async () => {
    const categoryCount = await Category.estimatedDocumentCount();
    if (categoryCount <= 0) {
        console.log("Writing Category Data");
        await Category.create(categoryData);
        console.log("Written Category Data");
    }

    const productCount= await Product.estimatedDocumentCount();
    if (productCount <= 0) {
        console.log('Writing Product Data');
        await Product.create(productData);
        console.log('Written Product Data');
    }
}

module.exports = ExampleDataFormation();