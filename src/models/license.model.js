const { conn } = require("../config/conn");

const getAll = async () => {
  try {
    const [rows, info] = await conn.query("SELECT * FROM licence;");
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
};
