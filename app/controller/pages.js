module.exports = function (app) {
  return {
    index: function (req, res) {
      return res.send("respond with a resource");
    },
  };
};
