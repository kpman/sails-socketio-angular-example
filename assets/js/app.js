/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */


(function (io) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {



    ///////////////////////////////////////////////////////////
    // Here's where you'll want to add any custom logic for
    // when the browser establishes its socket connection to 
    // the Sails.js server.
    ///////////////////////////////////////////////////////////
    log(
        'Socket is now connected and globally accessible as `socket`.\n' + 
        'e.g. to send a GET request to Sails, try \n' + 
        '`socket.get("/", function (response) ' +
        '{ console.log(response); })`'
    );
    ///////////////////////////////////////////////////////////


  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;


  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }
  function scrollToBottom(id) {
    var elem = document.getElementById(id);
    elem.scrollTop = elem.scrollHeight;
    console.log("scrollToBottom");
  }
  
  var app = angular.module("myapp", []);

  app.controller("mainController", function($scope) {
    
    // Listen for Comet messages from Sails
    socket.on('message', function messageReceived(message) {

      console.log(message);

      if (message.verb == "create") {
        $scope.messages.push(message.data);
        $scope.$apply();
        scrollToBottom("messages");
        console.log("do in verb create");
      }

      if (message.verb == "destroy") {
        $scope.messages.forEach(function(msg, idx) {
          if (msg.id == message.id) {
            $scope.messages.splice(idx, 1);
            $scope.$apply();
          }
        });
      }

    });

    socket.get("/message", function(msgs) {
      // use sails api to get messages json
      $scope.messages = msgs;
      $scope.$apply(); // make sure angular to change
      // [reference] http://ngmodules.org/modules/angular-sails
      scrollToBottom("messages");
    });

    $scope.submit = function() {
      // [reference] http://sailsjs.org/#!documentation/sockets
      socket.post("/message", 
        {
          time: new Date(),
          name: $scope.user_id,
          text: $scope.text
        }, 
        function(data) {
        // push callback data in $scope.messages
          $scope.text = "";
        }
      );
    };
    
  })

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);
