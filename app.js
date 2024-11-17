const express = require("express");
const cors = require("cors");
const dt_ext1Route = require("./routes/dt-ext1");
const dt_ext2Route = require("./routes/dt-ext2");

const app = express();
const PORT = 3000;

app.use(cors());
// Rotas
app.use("/api/get_soma_concentrado", dt_ext1Route);
app.use("/api/get_soma_materia_prima", dt_ext2Route);

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
