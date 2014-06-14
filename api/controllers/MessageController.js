/**
 * MessageController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  // create: function(req, res) {
  //   var name = req.body.name;
  //   var text = req.body.text;
  //   var time = new Date();
  //   Message.create({
  //     time: time,
  //     text: text,
  //     name: name
  //   }).exec(function(err, message) {
  //     if (err) {
  //       console.log(err);
  //       return res.error();
  //     }

  //     req.flash('info', 'info: Create message success !!!');
  //     res.redirect("/chatroom");

  //   })
  // },

  // list: function(req, res) {
  //   Message
  //   .find({})
  //   .sort('time DESC')
  //   .exec(function (err, messages) {
  //     return res.view('home/message', {
  //       title: 'message',
  //       messages: messages
  //     })
  //   })
  // },

  
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MessageController)
   */
  _config: {}

  
};
