const Seller = require('../models/Seller')

module.exports = router => {
  router.get('/product', async (reg, res) => {
    try {
      const product = await Product.find({}).limit(10);
      res.json(product);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  router.post('/product',async (req,res)=> {
    try {
      const data = req.body;
      await Seller.create(data);
      if(data)
          res.json({message:'Ürününüz başarıyla yayınlandı'})
    } catch (error) {
      console.log(error)
    }
  })
};
