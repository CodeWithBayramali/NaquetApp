const SellerRouterFn = require('./seller.js');
const ProductRouterFn = require('./product.js');
const UserRouterFn = require('./user.js');
const CategoryRouterFn = require('./category.js')


const RouterArrFns = [
    UserRouterFn,
    ProductRouterFn,
    SellerRouterFn,
    CategoryRouterFn
]

module.exports = RouterArrFns;