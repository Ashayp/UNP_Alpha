const axios = require("axios");
const hash = require("crypto-js");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const sequelize = require('../util/database');

const userData = require("../data/registration");

const helper = require('../util/helper');
const validation = require('../util/validation');

const users = require("../model/users");
const kid = require("../model/kid");
const Parent = require("../model/parent");
const Relation = require("../model/relation");
const config = require("../config/settings.json");
//const { post } = require("../routes/serach");

const { QueryTypes } = require('sequelize');

const sendRequest = async (request) => {
  await Relation.create({
    from: request.fromId,
    to: request.toId,
    status: "P",
    since: null
  });

  let requestCreated = await Relation.findOne({
    where: { from: request.fromId, to: request.toId },
  });
  if (!requestCreated) throw "Problem sending the friend request";
  return "Friend request sent successfully";
};

const acceptRequest = async (req) => {
  // await Relation.create({
  //   from: fromId,
  //   to: toId,
  //   status: "A",
  //   since: helper.getCurrentDate(),
  // });

  let request = await Relation.findOne({where: { from: req.fromId, to: req.toId }});
  request.status = 'A';
  request.since = helper.getCurrentDate();
  await request.save();
  return "Friend request accepted";
};

const rejectRequest = async (req) => {
  let request = await Relation.findOne({where: { from: req.fromId, to: req.toId }});
  request.status = 'R';
  request.since = null;
  await request.save();
  return "Friend request accepted";
};

const getAllRequests = async (id) => {
  //id = helper.decryptAES(id);
  let requests = await sequelize.query(
    `SELECT r.from, r.to, r.status, p.first_name, p.last_name, p.location FROM relation r, parent p where r.to = ${id} and p.id=r.from`,
    { type: QueryTypes.SELECT }
  );
  return requests;
};

const getAllFriends = async (email) => {
  const parentInfo = await userData.viewParentById(email);
  let requests = await Relation.findAll({ where: { location: location } });
  return requests;
};

const getAllParentsByLocation = async (location) => {
  let parents = await Parent.findAll({ where: { location: location } });
  return parents;
};

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getAllRequests,
  getAllFriends,
  getAllParentsByLocation,
};
