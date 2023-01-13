const api = require("anime-vostfr");
const asyncHandler = require("express-async-handler");

const getPopularAnime = asyncHandler(async (req, res) => {
  const dataVF = await api.loadAnimeVF();
  const result = api.popularAnime(dataVF);
  res.status(200).json(result.slice(0, 60));
});

const findAnime = asyncHandler(async (req, res) => {
  const { query } = req.params;
  const dataVF = await api.loadAnimeVF();
  const animeFound = api.searchAnime(dataVF, query);
  res.status(200).json(animeFound);
});

const getInfo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const animeUrl = `/anime/info/${id}`;
  const anime = await api.getMoreInformation(animeUrl);

  if (!anime) {
    res.status(500);
    throw new Error("Could not get anime info");
  }

  res.status(200).json(anime);
});

const getEpisode = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const episodeUrl = `/anime/episode/${id}`;
  const episode = await api.getEmbed(episodeUrl);

  if (!episode) {
    res.status(500);
    throw new Error("Could not get episode streaming link");
  }

  res.status(200).send(episode);
});

module.exports = {
  getPopularAnime,
  findAnime,
  getInfo,
  getEpisode,
};
