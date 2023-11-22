var express = require("express");
var router = express.Router();
const userController = require("../userControll/userController");
const categoryController = require("../categoryControll/categoryController");
const productController = require("../productControll/productController");
const cartController = require("../cartControll/cartController");
/* GET users listing. */
router.get("/", userController.getUsers);
router.post("/adduser", userController.createUser);
router.delete("/deleteuser/:userId", userController.deleteUser);
router.put("/updateuser/:userId", userController.updateUser);
router.get("/category", categoryController.getCategory);
router.post("/addcategory", categoryController.createCategory);
router.get("/product", productController.getProduct);
router.post("/addproduct", productController.createProduct);
router.put("/updateproduct/:productID", productController.updateProduct);
router.delete("/deleteproduct/:productID", productController.deleteProduct);
router.get("/product/:productID", productController.getProductByID);
router.get("/cart", cartController.getCart);
router.post("/addtocart/:productID", cartController.addToCart);
router.put("/updatecart/:cartID", cartController.updateCart);
router.delete("/deletecart/:cartID", cartController.deleteCart);
module.exports = router;
