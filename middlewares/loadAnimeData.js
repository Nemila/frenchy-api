const asyncHandler = require("express-async-handler");
const api = require("anime-vostfr");

const loadAnimeData = asyncHandler(async (req, res, next) => {
  const data = await api.loadAnime();
  const dataVF = await api.loadAnimeVF();

  req.data = data;
  req.dataVF = dataVF;

  next();
});

module.exports = loadAnimeData;
