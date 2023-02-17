const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.getAllProducts);
router.post("/Add", productController.productAdd);

module.exports = router;
