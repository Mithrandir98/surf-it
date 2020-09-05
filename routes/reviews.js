const express = require("express");
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get("/", (req, res, next) => {
  res.send("INDEX /posts/:id/reviews");
});

/* POST reviews create /posts/:id/reviews */
router.post("/", (req, res, next) => {
  res.send("CREATE /reviews");
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get("/:review_id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/reviews/:id/edit");
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put("/:review_id", (req, res, next) => {
  res.send("UPDATE /posts/:id/reviews/:review_id");
});

/* DELETE reviews destory /posts/:id/reviews/:review_id */
router.delete("/:review_id", (req, res, next) => {
  res.send("DELETE /posts/:id/reviews/:review_id");
});

module.exports = router;

// RESTful Structure
// GET index       /reviews
// GET new         /reviews/new
// POST create     /reviews
// GET show        /reviews/:id
// GET edit        /reviews/:id/edit
// PUT update      /reviews/:id
// DELETE destroy  /reviews/:id
