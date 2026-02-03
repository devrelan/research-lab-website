const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(200).send("Saved");
  } catch (err) {
    res.status(500).send("Error");
  }
});

module.exports = router;
