import { Router } from "express";

import * as usersController from "../controllers/users.controller";

const userRouter = Router();

userRouter.get("/", usersController.listAllUsers);
userRouter.get("/:id", usersController.detailUser);
userRouter.post("/", usersController.addUser);
userRouter.patch("/:id", usersController.editUser);
userRouter.delete("/:id", usersController.removeUser);

export default userRouter;