const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
    console.log('GET @ /');
    res.status(200).end();
})

router.get("/product/:id", (req, res) => {
  console.log("GET @ product/:id");
  controller.getProduct(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.post("/message", (req, res) => {
  console.log("POST @ /message");
  res.status(200).send("POST new message!");
});

module.exports = router;
