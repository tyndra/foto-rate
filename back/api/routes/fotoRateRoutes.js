'use strict';
module.exports = function(app) {
  var ctrl = require('../controllers/fotoRateController');

  app.route('/fotos/:path')
    .post(ctrl.all_fotos)
    .put(ctrl.arrange)
    
  app.route('/foto/resize/:path')
    .get(ctrl.get_foto_resized)

  app.route('/config/cat/:path')
    .get(ctrl.get_categories)

  app.route('/foto/:path')
    .get(ctrl.get_foto)
    .put(ctrl.rate_foto)
    .delete(ctrl.delete_foto);
};
