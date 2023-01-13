const api = require("anime-vostfr");
const asyncHandler = require("express-async-handler");

// const getAnime = (req, res) => res.status(200).json(req.data.slice(0, 60));
// const getAnimeVF = (req, res) => res.status(200).json(req.dataVF.slice(0, 60));

const getPopularAnime = (req, res) => {
  const result = api.popularAnime(req.dataVF);
  res.status(200).json(result.slice(0, 60));
};

// const getBestScore = (req, res) => {
//   const { vf } = req.body;
//   const result = api.bestScoreAnime(vf ? req.dataVF : req.data);
//   res.status(200).json(result.slice(0, 60));
// };

const findAnime = (req, res) => {
  const { query } = req.params;

  const data = req.dataVF;
  const animeFound = api.searchAnime(data, query);
  res.status(200).json(animeFound);
};

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
