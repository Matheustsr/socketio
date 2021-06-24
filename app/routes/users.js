module.exports = function (app) {
    var controller = app.controller.users;
    app.get("/users", controller.index);
  };
  