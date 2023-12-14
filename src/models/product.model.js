const { conn } = require("../config/conn");

const getAll = async () => {
  try {
    const [rows, info] = await conn.query(
      "SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;"
    );
    return rows;
  } catch (error) {
    return {
      error: true,
      message: "Hemos encontrao un error: " + error,
    };
  } finally {
    conn.releaseConnection;
  }
};

const getOne = async (id) => {
  try {
    const [rows, info] = await conn.query(
      "SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;",
      id
    );
    return rows;
  } catch (error) {
    return {
      error: true,
      message: "Hemos encontrao un error: " + error,
    };
  } finally {
    conn.releaseConnection;
  }
};

module.exports = {
  getAll,
  getOne,
};
