const axios = require("axios");
const parent = require("../model/parent");
const parent_kid = require("../model/parent_kid_mapping");
const kid = require("../model/kid");
const users = require("../model/users");

const serachParentByLocation = async (postData) => {
  try {
    let parentInfo = await parent.findOne({
      where: { location: postData.location },
    });
    if (!parentInfo) throw "Could not find parent of that location!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const serachAllParentByLocation = async (postData) => {
  try {
    console.log("reached here123 ", postData);
    let parentInfo = await parent.findAll({
      where: { location: postData.location },
    });
    console.log("parentsInfo", parentInfo);
    if (!parentInfo) throw "Could not find parent of that location!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const lockKidAccount = async (kidId) => {
  console.log();
  try {
    let kidInfo = await kid.findOne({
      where: { parent_id: parentInfo.id },
    });
    kidInfo.flag = false;
    await kidInfo.save();
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const unlockKidAccount = async (kidId) => {
  console.log();
  try {
    let kidInfo = await kid.findAll({});
    kidInfo.flag = true;
    await kidInfo.save();
    return parentInfo;
  } catch (error) {
    return error;
  }
};

const submitKidDetails = async(postData)=>{
  console.log(postData);
  let user = await kid.findOne({ where: { username: postData.username } });
  console.log(user);

  user.school=postData.schoolname;
  user.street=postData.street;
  user.grade=postData.grade;
  user.ethnicity=postData.ethnicity;
  user.location=postData.location;
  user.flag=postData.profilevisibility;

  await user.save();

  return "Kid data submitted sucessfully";
};

const getParentProfiles = async (postData) => {
  try {
    let parentInfo = await parent.findAll({ });
    if (!parentInfo) throw "Could not find parents!";
    return parentInfo;
  } catch (error) {
    return error;
  }
};

module.exports = {
  serachParentByLocation,
  serachAllParentByLocation,
  submitKidDetails,
  getParentProfiles,
};
