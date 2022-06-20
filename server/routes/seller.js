const Seller = require('../models/Seller.js');
const User = require('../models/User.js');
const auth = require('../utils/authCheck.js');

module.exports = router => {
  /** Create new Seller Product */
  router.post('/seller', auth, async (req, res) => {
    try {
      const product = req.body;
      if (product) await Seller.create(product);

      res.json({ message: 'Ürününüz başarıyla yayınlandı' });
    } catch (error) {
      console.log(error);
    }
  });

  // POPULAR SELLER
  router.get('/seller/popularseller',async(req,res)=> {
    try {
      const popularSeller = await User.find({popularPoint:{$gte:2000}})
      res.json(popularSeller);
    } catch (error) {
      console.log(error);
    }
  })

  /** Get All Seller Product */
  router.get('/seller', async (req, res) => {
    try {
      const sellerProduct = await Seller.find({}).limit(10);
      return res.json(sellerProduct);
    } catch (error) {
      console.log(error);
    }
  });

  /** Get By Id Seller Product */
  router.get('/seller/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const sellerProductById = await Seller.findById(id);
      return res.json(sellerProductById);
    } catch (error) {
      res.status(404).json({ message: 'No data' });
    }
  });

  /** Get by ID All Category Seller Product */
  router.get('/seller/categoryby/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const categoryByProduct = await Seller.find({ productId: id });
      if (!categoryByProduct.Count) return res.json({ errMessage: 'Ürün bulunamadı' });

      res.json(categoryByProduct);
    } catch (error) {
      res.status(404).json(error);
    }
  });
};
