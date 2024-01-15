const express = require("express");
const serverResponses = require("../utils/helpers/responses");
const messages = require("../config/messages");
const { Post } = require("../models/posts/post");
const authController = require('../controllers/authController');

const routes = (app) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    Post.find({}, { __v: 0 })
      .then((posts) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, posts);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.post("/posts", (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });

    post
      .save()
      .then((result) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.post('/auth/register', authController.register);

  app.use("/api", router);
};
module.exports = routes;
