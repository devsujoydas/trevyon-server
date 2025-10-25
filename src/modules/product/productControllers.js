const productModel = require("./productModel");

const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discountPrice,
      category,
      brand,
      stock,
      images,
      isFeatured
    } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "Title, description, price & category are required!" });
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      discountPrice,
      category,
      brand,
      stock,
      images,
      isFeatured
    });

    res.status(201).json({
      message: "Product created successfully!",
      product: newProduct
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
  const products = await productModel.find()
  res.send(products)
}

const getProduct = async (req, res) => {
  const paramsId = req.params.id
  const product = await productModel.findOne({ _id: paramsId })
  res.send(product)
}


module.exports = { createProduct, getProducts, getProduct };
