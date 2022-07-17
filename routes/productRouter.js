 const productController  =require('../controllers/productController.js');
 const reviewController  =require('../controllers/reviewController');

 const router  = require('express').Router()
// product router
 router.post('/addproduct', productController.addProduct)
 router.get('/allproducts', productController.getAllProducts)
 router.get('/published', productController.getPublishedProduct)
 router.get('/singleproduct/:id', productController.getOneProduct)
 router.put('/updateproudct/:id', productController.updateProduct)
 router.delete('/deleteproduct/:id', productController.deleteProduct)



//  review router
router.post('/addReview/:productid',reviewController.addReview)
router.get('/allReviews',reviewController.getAllReviews)

router.get('/getProductReviews/:id',productController.getProuductReviews) 



 module.exports =  router