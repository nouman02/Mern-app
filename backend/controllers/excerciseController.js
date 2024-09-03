let Excercise = require("../models/excercise.model");

const getExcercise = async (req, res) => {
  Excercise.find()
    .then(resp => res.json(resp))
    .catch(err => res.status(400).json("Error: " + err));
};

const addExcercise = async (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  newExcercise = new Excercise({
    username,
    description,
    duration,
    date
  });
  newExcercise
    .save()
    .then(() => res.json(newExcercise))
    .catch(err => res.status(400).json("Error: " + err));
};

const updateExcercise = async (req, res) => {
  Excercise.findById(req.params.id)
    .then(response => {
      response.username = req.body.username;
      response.description = req.body.description;
      response.duration = Number(req.body.duration);
      response.date = Date.parse(req.body.date);

      response
        .save()
        .then(() => res.json(response))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
};

const deleteExcercise = (req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(resp => res.json(resp))
    .catch(err => res.status(400).json("Error: " + err));
};
const getSingleExcercise = (req, res) => {
  Excercise.findById(req.params.id)
    .then(resp => res.json(resp))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  getExcercise,
  addExcercise,
  updateExcercise,
  deleteExcercise,
  getSingleExcercise
};
