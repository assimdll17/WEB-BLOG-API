var express = require("express");
var router = express.Router();
var tagRepo = require("../repositories/tag");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  var data = await tagRepo.getAllTags();
  //console.log(data);
  res.json(data);
  //res.send(data);
});
router.get("/:id", async function (req, res, next) {
  var data = await tagRepo.getTag(req.params.id);
  res.send(data);
  
});
router.post("/", async function (req, res, next) {
  var tag = req.body;
  const addedTag = await tagRepo.addTag(tag);
  
  res.send('Tag added');
 
});

router.put("/", async function (req, res, next) {
  var tag = req.body;
  var result = await tagRepo.updateTag(tag.id, tag);
  res.json('Tag updated')
});

router.delete("/:id", async function (req, res, next) {
  await tagRepo.deleteTag(req.params.id);
  res.send("deleted!");
});
module.exports = router;
