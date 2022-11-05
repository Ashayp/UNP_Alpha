const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const relationsData = data.relation;

router.route("/getAllRequests/:id").get(async (req, res) => {
  try {
    let id = req.params.id;
    let requests = await relationsData.getAllRequests(id);
    res.json({ requests: requests });
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

router.route("/getParentsNearby/:location").get(async (req, res) => {
  try {
    let location = req.params.location;
    let parents = await relationsData.getAllParentsByLocation(location);
    res.json({ parents: parents });
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

router
.route("/sendRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.sendRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router
.route("/acceptRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.acceptRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router
.route("/rejectRequest").post(async (req, res) => {
  try {
    let requestInfo = await relationsData.rejectRequest(req.body);
    res.json({ message: requestInfo });
    return;
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

module.exports = router;
