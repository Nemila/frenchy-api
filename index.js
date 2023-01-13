const express = require("express");
const cors = require("cors");
require("dotenv").config();

const animeRouter = require("./routes/anime.router.js");
const errorHandler = require("./middlewares/errorHandler.js");
const loadAnimeData = require("./middlewares/loadAnimeData.js");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/anime", loadAnimeData, animeRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`Server listening on port ${port}`));
