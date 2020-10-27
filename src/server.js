import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";

import routes from "./routes.js";

// configurar o app
const app = express();
env.config();
const port = process.env.PORT || 4000;
//configurar o cors
app.use(express.json());
app.use(cors());

//configurar o banco de dados (db)
mongoose.connect(process.env.CONNECTION_MONGO, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => console.log("db está conectado"));

// rotas de api

app.use(routes);

// listener
app.listen(port, () => console.log("Funcionando"));
