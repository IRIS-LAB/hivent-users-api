import express from "express";
import * as usersLBS from "../business/UsersLBS";

export const getRouter = () => {
  let usersRouter = express.Router();

  /** get all users */
  usersRouter.get("/", async (req, res) => {
    try {
      res.send(await usersLBS.findUsers());
    } catch (error) {
      console.log("An error occured", error);
      res.status(500).send("An error occured");
    }
  });

  usersRouter.get("/:userId", async (req, res) => {
    try {
      res.send(await usersLBS.getUser(req.params.userId));
    } catch (error) {
      console.log("An error occured", error);
      res.status(500).send("An error occured");
    }
  });

  usersRouter.post("/", async (req, res) => {
    try {
      res.send(await usersLBS.createUser(req.body));
    } catch (error) {
      console.log("An error occured", error);
      res.status(500).send("An error occured");
    }
  });

  return usersRouter;
};
