import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27019/";

const connect = async () => {
  let connection = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );
  let db = connection.db("Users");
  return { connection, db };
};

export const findUsers = async () => {
  let usersDB = await connect();
  let users = await usersDB.db
    .collection("Users")
    .find()
    .toArray();
  usersDB.connection.close();
  return users;
};

export const getUser = async userId => {
  let usersDB = await connect();
  let oid = new ObjectId(userId);
  let user = await usersDB.db.collection("Users").findOne({ _id: oid });
  usersDB.connection.close();
  return user;
};

export const createUser = async user => {
  let usersDB = await connect();
  let newUser = await usersDB.db.collection("Users").insertOne(user);
  usersDB.connection.close();
  return newUser.ops[0];
};
