const express = require("express");
const {
  findAnime,
  getInfo,
  getEpisode,
  getPopularAnime,
} = require("../controllers/anime.controllers");

const router = express.Router();
router.get("/popular", getPopularAnime);
router.get("/search/:query", findAnime);
router.get("/info/:id", getInfo);
router.get("/episode/:id", getEpisode);

module.exports = router;
