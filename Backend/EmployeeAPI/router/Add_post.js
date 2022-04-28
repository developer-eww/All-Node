const router = require("express").Router();
const Emp = require("../model/Users.model");
// Add router
router.post("/add", async (req, res) => {
  try {
    const user = new Emp({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      gender: req.body.gender,
      password: req.body.password,
      hobbies: req.body.hobbies,
      rate: req.body.rate,
    });
    // // Save data
    const SavedUser = await user.save();
    return res.status(200).json({
      status: true,
      message: "User added successfully",
      newUser: SavedUser,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ status: false, message: err.details[0].message });
  }
});

router.delete("/:UserId", async (req, res) => {
  try {
    const DeletedUser = await Emp.findOneAndRemove({ _id: req.params.UserId });
    if (!DeletedUser)
      return res
        .status(400)
        .json({ status: false, message: "User not exist!!" });

    return res.status(200).json({
      status: true,
      message: "User Deleted successfully",
      DeletedUser,
    });
  } catch (err) {
    return res.status(400).json({ status: false, message: err.message });
  }
});

module.exports = router;
