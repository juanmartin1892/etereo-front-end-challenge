// server/routes/index.js
const mobile = require('./mobile')
module.exports = (router) => {
    mobile(router)
}
