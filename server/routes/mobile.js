const mobilesController = require('./../controllers/mobiles.ctrl');

module.exports = (router) => {
  /**
   * get all mobiles
   */
  router
    .route('/mobiles')
    .get(mobilesController.getAll);
}
