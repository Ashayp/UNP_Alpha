const { Route } = require("express");
const express = require("express");
const router = express.Router();
const data = require("../data/index");

const parentsData = data.parents;
const kidsData = data.kidData;

router
  .route("/location")
  .get(async (req, res) => {
    try {
      let message = await parentsData.serachParentByLocation(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });

  router
  .route("/location/all")
  .post(async (req, res) => {
    try {
      console.log('reached here1')
      let message = await parentsData.serachAllParentByLocation(req.body);
      console.log("There is the message", message)
      res.send({ message: message });
    } catch (error) {
      res.send({error: error});
    }
  });
//  .get(async (req, res) => {
//    res.status(404).json(e);
//  });

router
  .route("/submitdetails")
  .post(async (req, res) => {
    try {
    console.log("submit details of kid")
      let message = await parentsData.submitKidDetails(req.body);
      res.send({ message: message });
    } catch (error) {
      console.log(error);
      res.send({error: error});
    }
  })
  .get(async (req, res) => {
    res.status(404).json(e);
  });

  router
  .route("/getparents")
  .get(async (req, res) => {
    try {
    console.log("View parents profiles")
      let message = await parentsData.getParentProfiles(req.body);
      res.send({ message: message });
    } catch (error) {
      console.log(error);
      res.send({error: error});
    }
  })
  .post(async (req, res) => {
    res.status(404).json(e);
  });


module.exports = router;
