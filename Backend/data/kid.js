const axios = require("axios");
const kid = require('../model/kid');



const serachKidByFilters = async (postData) => {
  try {
    console.log("reached here 21")
    const parentInfolocation = await kid.findAll({ where: { location: postData.location } });
    // const parentInfograde = await kid.findOne({ where: { grade: postData.grade } });
    // const parentInfogender = await kid.findOne({ where: { location: postData.location } });
    // const parentInfoschool = await kid.findOne({ where: { location: postData.location } });
    // let finalresult = parentInfolocation + parentInfograde + parentInfogender + parentInfoschool
    if (!parentInfolocation) throw 'Could not find parent of that location!'
    // console.log("finalresult", [parentInfolocation.dataValues + parentInfograde.dataValues])
    return (parentInfolocation)
  } catch (error) {
    return error
  }
};


module.exports = {
    serachKidByFilters,
    
};
