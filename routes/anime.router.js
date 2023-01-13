const express = require("express");
const {
  getAnime,
  getAnimeVF,
  findAnime,
  getInfo,
  getEpisode,
  getPopularAnime,
  getBestScore,
} = require("../controllers/anime.controllers");

const router = express.Router();

router.get("/vo", getAnime);
router.get("/vf", getAnimeVF);
router.get("/popular", getPopularAnime);
router.get("/bestScore", getBestScore);

router.get("/search/:query", findAnime);
router.get("/info/:id", getInfo);
router.get("/episode/:id", getEpisode);

module.exports = router;
