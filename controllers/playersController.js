const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Player
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeAll: function(req, res) {
    db.Player
      .remove({}, function(err) {
        console.log('players collection removed')
      });
  },
  create: function(req, res) {
    db.Player
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Player
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Player
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
