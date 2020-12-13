const connection = require("../config/connection.js");

const orm = {
  selectAll: function(tableInput, cb) {
    let queryString = `SELECT * FROM ?`;
    connection.query(queryString, [tableInput], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  insertOne: function(tableInput, colOne, colTwo, valOne, valTwo) {
    let queryString = `INSERT INTO ? (?, ?)
    VALUES (?, ?)`
    connection.query(queryString, [tableInput, colOne, colTwo, valOne, valTwo], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableInput, colOne, valOne, id, cb) {
    let queryString = `UPDATE ?
    SET ? = ?
    WHERE id = ?`
    connection.query(queryString, [tableInput, colOne, valOne, id], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;