module.exports = function (app) {

  var model = app.model.user;
    return {
      index: function (req, res) {
        model.find(null, (err, result) => {
          if (err) {
            console.log(err);
            return ;
          }
          console.log(result)
          return res.render("index", { title: "Express" });
        });
      },
    };
  };
  