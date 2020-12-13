const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(colOne, colTwo, valOne, valTwo, cb) {
    orm.insertOne("burgers", colOne, colTwo, valOne, valTwo, function(res) {
      cb(res);
    });
  },
  updateOne: function(colOne, valOne, id, cb) {
    orm.updateOne("burgers", colOne, valOne, id, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;