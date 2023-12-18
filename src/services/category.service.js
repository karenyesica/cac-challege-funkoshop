const categoryModel = require("../models/category.model");

const getAllCategories = async () => {
  return await categoryModel.getAll();
};

module.exports = {
  getAllCategories,
};
