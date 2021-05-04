const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_, response) => response.json({ hello: "world" }));

const port = 3333;
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));
