import express from "express";
const routes = express.Router();
import mongoose from "mongoose";
import Contents from "./model/contents.js";

const Content = mongoose.model("Content");

//rotas
routes.get("/", (req, res) => res.send("Nossa primeira API"));

routes.post("/upload", (req, res) => {
  const body = req.body;
  Content.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

routes.get("/view", (req, res) => {
  Content.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

routes.delete("/view/:id", (req, res) => {
  Content.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});


export default routes;
