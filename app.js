const express = require("express");
const dt_ext1Route = require("./routes/dt-ext1");
const dt_ext2Route = require("./routes/dt-ext2");

const app = express();
const PORT = 3000;

// Rotas
app.use("/api/dt-ext1", dt_ext1Route);
app.use("/api/dt-ext2", dt_ext2Route);

// Inicia servidor
app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:${PORT}");
});