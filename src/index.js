const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/posts");

require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DB_CONN, { useNewUrlParser: true })
  .then(() => console.log("Conectado ao banco de dados..."))
  .catch(err =>
    console.log("Não foi possível conectar ao banco de dados...", err)
  );

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}...`);
});
