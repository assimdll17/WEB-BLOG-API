var express = require("express");
var router = express.Router();
var articleRepo = require("../repositories/articles");

router.get("/", async function (req, res, next) {

  var data = await articleRepo.getArticlesAll();
   res.send(data);
});
router.get("/:id", async function (req, res, next) {
  var data = await articleRepo.getArticle(req.params.id);
  
  res.send(data);
});
router.post("/", async function (req, res, next) {
  var article = req.body;
 
  const addedArticle = await articleRepo.addArticle(article);
  
  res.send(addedArticle);
 ;
});

router.put("/", async function (req, res, next) {
  var article = req.body;
  var result = await articleRepo.updateArticle(article.id, article);
  res.send("Modifications effectuées")   
});

router.delete("/:id", async function (req, res, next) {
  await articleRepo.deleteArticle(req.params.id);
  
  res.send({ message: "deleted!" });
});
module.exports = router;
