import { Request, Response } from "express";
import { createUser, deleteUser, findAllUsers, findOneUser, updateUser } from "../models/users.model";

export const listAllUsers = async (req: Request, res: Response) => {
  const users = await findAllUsers();
  return res.json(users);
};

export const detailUser = async (req: Request, res: Response) => {
  const user = await findOneUser(parseInt(req.params.id));
  return res.json(user);
};

export const addUser = async (req: Request, res: Response) => {
  const user = await createUser(req.body.name);
  return res.json(user);
};

export const editUser = async (req: Request, res: Response) => {
  const user = await updateUser(parseInt(req.params.id), req.body.name);
  return res.json(user);
};

export const removeUser = async (req: Request, res: Response) => {
  const user = await deleteUser(parseInt(req.params.id));
  return res.json(user);
};