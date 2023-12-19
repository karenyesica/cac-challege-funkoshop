const path = require("path");
const {
  getAll,
  getOne,
  create,
  deleteOne,
  edit,
} = require("../models/product.model");
const categoryService = require("../services/category.service");
const licenseService = require("../services/license.service");

const adminControllers = {
  adminView: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      isLogged: true,
      data,
    });
  },
  createView: async (req, res) => {
    const categories = await categoryService.getAllCategories();
    const licenses = await licenseService.getAllLicense();
    // const allProducts = await getAll();
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"), {
      isLogged: true,
      categories,
      licenses,
      // allProducts,
    });
  },
  createItem: async (req, res) => {
    // console.log(req.body);
    //console.log(req.files);

    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      discount: req.body.discount,
      sku: req.body.sku,
      dues: req.body.dues,
      image_front: "/newProducts/" + req.files[0].filename,
      image_back: "/newProducts/" + req.files[1].filename,
      category_id: Number(req.body.category),
      licence_id: Number(req.body.license),
    };

    await create([Object.values(product_schema)]);

    res.redirect("/admin");
  },
  editView: async (req, res) => {
    const { id } = req.params;
    const categories = await categoryService.getAllCategories();
    const licenses = await licenseService.getAllLicense();
    const [product] = await getOne({ product_id: id });
    // console.log(categories);
    // console.log(product);
    // console.log(licenses);

    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      isLogged: true,
      product,
      categories,
      licenses,
    });
  },
  editItem: async (req, res) => {
    // console.log("Id: ", req.params);
    // console.log("Body: ", req.body);
    // console.log("File: ", req.files);
    const { id } = req.params;
    const haveImages = req.files.length !== 0;

    const product_schema = haveImages
      ? {
          product_name: req.body.name,
          product_description: req.body.description,
          price: req.body.price,
          stock: req.body.stock,
          discount: req.body.discount,
          sku: req.body.sku,
          dues: req.body.dues,
          image_front: "/newProducts/" + req.files[0].filename,
          image_back: "/newProducts/" + req.files[1].filename,
          category_id: Number(req.body.category),
          licence_id: Number(req.body.license),
        }
      : {
          product_name: req.body.name,
          product_description: req.body.description,
          price: req.body.price,
          stock: req.body.stock,
          discount: req.body.discount,
          sku: req.body.sku,
          dues: req.body.dues,
          category_id: Number(req.body.category),
          licence_id: Number(req.body.license),
        };

    await edit(product_schema, { product_id: id });

    res.redirect("/shop");
  },
  deleteItem: async (req, res) => {
    const { id } = req.params;

    await deleteOne({ product_id: id });

    res.redirect("/admin");
  },
};

module.exports = adminControllers;
