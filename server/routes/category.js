const Category = require('../models/ProductCategory.js');
const Seller = require('../models/Seller.js')

module.exports = (router) => {
    router.get('/category',async(req,res)=> {
      try {
          const categories = await Category.find({});
          res.json(categories)
      } catch (error) {
          return res.status(404).json({errMessage:'No data'})
      }
    });

    router.get('/category/:id',async(req,res)=> {
        const {id} = req.params
        try {
            const categoryIdBySeller = await Seller.find({categoryId:id})
            res.json(categoryIdBySeller);
        } catch (error) {
            console.log(error);
        }
    })
}