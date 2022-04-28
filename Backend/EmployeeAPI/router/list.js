const router = require("express").Router();
const Emp = require("../model/Users.model");

router.get("/", async (req, res) => {
  const users = await Emp.find();
  return res.status(200).json({ status: true, users });
});

router.get("/:UserId", async (req, res) => {
  const users = await Emp.find({ _id: req.params.UserId});
  return res.status(200).json({ status: true, users });
});
// {_id : ObjectId("60f532903ded77001064ae92")}

router.patch("/update/:UserId", async (req, res) => {
  try {
    const Updated = await Emp.findOneAndUpdate(
      { _id: req.params.UserId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          mobile: req.body.mobile,
          address: req.body.address,
        },
      },
      { new: true }
    );
    if (!Updated)
      return res
        .status(400)
        .json({ status: false, message: "User not exist!!" });

    return res
      .status(200)
      .json({ status: true, message: "One User Updtaed", Updated });
  } catch (err) {
    return res.status(400).json({ status: false, message: err });
  }
});


module.exports = router;

//  email: req.body.email,
// mobile: req.body.mobile,
// address: req.body.address,
// state: req.body.state,
// city: req.body.city,
// gender: req.body.gender,
// password: req.body.password,
// hobbies: req.body.hobbies,
// rate: req.body.rate,
