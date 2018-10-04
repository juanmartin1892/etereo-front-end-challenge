const Mobiles = require('./../models/Mobile')
const fs = require('fs')

module.exports = {
  getAll: (req, res, next) => {
    setTimeout(function () {
      res.send(Mobiles.mobiles);
      next();
    }, 1000);
  }
}
