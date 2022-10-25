const router = require("express").Router();
const controller = require("../controllers/products");

router.get("/products", controller.getProducts);
router.post("/products", controller.createProduct);
router.patch("/products/:id", controller.patchProduct);
router.delete("/products/:id", controller.deleteProduct);
