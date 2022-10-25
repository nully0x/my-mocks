const Products = require("../models/products");

export const createProduct = (req, res) => {
  const product = new Products(req.body);
  product.isPublished = false;
  product
    .save()
    .then(() => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

export const getProducts = (req, res) => {
  Products.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

export const patchProduct = (req, res) => {
  const id = req.params.id;
  const { isPublished } = req.body;
  Products.findById(id)
    .then((product) => {
      if (product) {
        if (product.mrp >= product.price) {
          if (product.stock > 0) {
            product.isPublished = isPublished;
            product
              .save()
              .then(() => {
                res.status(204).json();
              })
              .catch((err) => {
                res.status(400).json({ message: err });
              });
          } else {
            res.status(422).json(["Stock count is 0"]);
          }
        } else {
          res.status(422).json(["MRP should be less than equal to the Price"]);
        }
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

export const deleteProduct = (req, res) => {
  const id = req.params.id;
  Products.findById(id)
    .then((product) => {
      if (product) {
        res.status(404).json({ message: "Method not allowed" });
      } else {
        res.status(405).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      res.status(405).json({ message: err });
    });
};
