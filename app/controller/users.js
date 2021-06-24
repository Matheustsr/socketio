module.exports = function (app) {
    return {
      index: function (req, res) {
        return res.render("index", { title: "Express" });
      },
    };
  };
  