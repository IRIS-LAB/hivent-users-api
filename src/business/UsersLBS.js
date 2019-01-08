import * as usersDAO from "../data/UsersDAO";

export const findUsers = async () => {
  return await usersDAO.findUsers();
};

export const getUser = async userId => {
  return await usersDAO.getUser(userId);
};

export const createUser = async user => {
  return await usersDAO.createUser(user);
};
