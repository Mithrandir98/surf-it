const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf It - Home" });
});

/* GET /register */
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* POST /register */
router.post("/register", (req, res, next) => {
  res.send("POST /register");
});

/* GET /login */
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST /login */
router.post("/login", (req, res, next) => {
  res.send("POST /login");
});

/* GET /profile */
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* PUT /profile/:user_id */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT /profile/:user_id");
});

/* GET /forgot-password */
router.get("/forgot-pw", (req, res, next) => {
  res.send("GET /forgot-pw");
});

/* PUT /forgot-password */
router.put("/forgot-pw", (req, res, next) => {
  res.send("PUT /forgot-pw");
});

/* GET /reset-password */
router.get("/reset-pw/:token", (req, res, next) => {
  res.send("GET /reset-pw/:token");
});

/* PUT /reset-password */
router.put("/reset-pw/:token", (req, res, next) => {
  res.send("PUT /reset-pw/:token");
});

module.exports = router;
