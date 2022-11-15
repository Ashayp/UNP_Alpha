const { Route } = require("express");
const express = require("express");
const session = require("express-session");
const router = express.Router();
const data = require("../data/index");

const registrationData = data.registration;

router
  .route("/signup/parent")
  .post(async (req, res) => {
    try {
      let message = await registrationData.registerParent(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({ error: error });
    }
  })
  .get(async (req, res) => {
    res.status(404).json({"Error": "Not found"});

  });


router
  .route("/signup/kid")
  .post(async (req, res) => {
    try {
      let message = await registrationData.registerKid(req.body);
      res.send({ message: message });
    } catch (error) {
      res.send({ error: error });
    }
  })
  .get(async (req, res) => {
    res.status(404).json({"Error": "Not found"});


  });


router
  .route("/login")
  .post(async (req, res) => {
    try {
      let message = await registrationData.login(req.body);
      // req.session.loggedin = true;
      // req.session.username = req.body.username;
      res.send(message);
    } catch (error) {
      res.send({ error: error });
    }
  })
  .get(async (req, res) => {
    res.status(404).json({"Error": "Not found"});
  });

router.route("/getAllUsers").get(async (req, res) => {
  let data = await registrationData.viewAllUsers();
  res.send(data);
});

router.route("/getParentById/:id").get(async (req, res) => {
  let data = await registrationData.viewParentById(req.params.id);
  res.send(data);
});

router.delete('/deleteKid/:username', (req, res) => {
  function (req,res) {    
    model.destroy({
        where: {
            id: req.params.id
        }
    }}})
    .then(function (deletedKid) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    });


    router.route("/deleteKid/:id").get(async (req, res) => {
      let data = await parent.findOne({ where:{ id: req.params.id}});
      res.deletedRecord(parent.kid.data);
    });    
//Creates a new post
router.post("/login", async (req, res) => {});

module.exports = router;
