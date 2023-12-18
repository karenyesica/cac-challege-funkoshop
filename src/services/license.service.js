const licenseModel = require("../models/license.model");

const getAllLicense = async () => {
  return await licenseModel.getAll();
};

module.exports = {
  getAllLicense,
};
