const birdService = require("../services/BirdService");
const StatsD = require("hot-shots");

let dogstatsd = new StatsD();

exports.getAllBirds = async (req, res) => {
  try {
    dogstatsd.increment('api.birds.get.count')
    console.log("GET birds")
    const birds = await birdService.getAllBirds();
    res.json({ data: birds, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBird = async (req, res) => {
  try {
    dogstatsd.increment('api.birds.get.count')
    
    const bird = await birdService.createBird(req.body);
    res.json({ data: bird, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBirdById = async (req, res) => {
  try {
    const bird = await birdService.getBirdById(req.params.id);
    res.json({ data: bird, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBird = async (req, res) => {
  try {
    const bird = await birdService.updateBird(req.params.id, req.body);
    res.json({ data: bird, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBird = async (req, res) => {
  try {
    const bird = await birdService.deleteBird(req.params.id);
    res.json({ data: bird, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};