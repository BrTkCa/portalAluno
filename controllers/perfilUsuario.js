module.exports = function (app) {

   var Usuario = app.models.usuario;
   var sequelize = require('./../libs/pg_db_connect');
   var _ = require('underscore');
   var formidable = require('formidable'),
      fs = require('fs');

   var PerfilUsuarioController = {

      index: function (req, res) {
         var user = req.session.usuario;
         var resultado;

         var query = "select * from acad.obter_cad_portal_aluno(" + req.session.usuario_id + ")";

         sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
         }).success(function (data) {
            resultado = {
               user: user,
               dados: data,
               session: req.session
            };
            res.render('home/perfil_usuario/index', resultado);
         });
      },

      upload: function (req, res) {

         var form = new formidable.IncomingForm();

         form.parse(req, function (err, fields, files) {

            var image = files.image,
               image_upload_path_old = image.path,
               image_upload_path_new = '/opt/fio/sigaac/images/imagesUsers/',
               image_upload_name = image.name,
               image_upload_path_name = image_upload_path_new + req.session.pessoa_id + ".png";

            if (fs.existsSync(image_upload_path_new)) {
              console.log(image_upload_path_old);
              console.log(image_upload_path_name);
               fs.rename(
               image_upload_path_old, image_upload_path_name, function (err) {
                  if (err) {
                     console.log('Err: ', err);
                  }

                  var query = "SELECT global.manter_img_perfil_portais(" + req.session.usuario_id + ",'" + image_upload_name + "')";

                  sequelize.query(query, {
                     type: sequelize.QueryTypes.SELECT
                  }).success(function (imagem) {
                     done = _.after(imagem.length, function () {
                        callback(imagem)
                     })
                     var user = req.session.usuario;
                     var resultado;

                     var query = "select * from acad.obter_cad_portal_aluno(" + req.session.usuario_id + ")";

                     sequelize.query(query, {
                        type: sequelize.QueryTypes.SELECT
                     }).success(function (data) {
                        resultado = {
                           user: user,
                           dados: data,
                           session: req.session
                        };
                        res.render('home/perfil_usuario/index', resultado);
                     });
                  });

               });
            }
         });
      }
   };
   return PerfilUsuarioController;
};