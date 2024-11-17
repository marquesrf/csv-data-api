const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

const router = express.Router();

const parseNumericFields = (data, numericFields) => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) =>
      numericFields.includes(key) ? [key, parseFloat(value)] : [key, value]
    )
  );
};

router.get("/", async (req, res) => {
  const result = [];
  const numericFields = [
    "﻿Soma de Matéria-prima (Kg)",
    "Ordem de Produção",
    "Ano",
    "Dia",
  ];
  fs.createReadStream("./data/soma-materia-prima.csv")
    .pipe(csv())
    .on("data", (data) => result.push(parseNumericFields(data, numericFields)))
    .on("end", () => {
      res.json(result);
    })
    .on("error", (err) => {
      console.error(err);
      res.status(500).json({ error: "Erro ao processar o arquivo CSV." });
    });
});

module.exports = router;
