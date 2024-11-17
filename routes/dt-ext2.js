const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = [];
  fs.createReadStream("./data/soma-materia-prima.csv")
    .pipe(csv())
    .on("data", (data) => result.push(data))
    .on("end", () => {
      res.json(result);
    })
    .on("error", (err) => {
      console.error(err);
      res.status(500).json({ error: "Erro ao processar o arquivo CSV." });
    });
});

module.exports = router;
