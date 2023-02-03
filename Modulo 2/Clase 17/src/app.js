import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import orderModel from "./models/order.model.js";
import studentModel from "./models/estudiantes.model.js";

import * as CONSTANTS from "./constants.js";
dotenv.config();

const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Iniciada aplicacion en puerto ${PORT}`);
});
//    enum: ["chica", "mediana", "grande"],

const randomNumberFromArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const environment = async () => {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  );

  console.log("Conectado a la base de datos");
  /* let studentsArray = [];
  const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const genderList = ["M", "F"];
  for (let x = 0; x <= 30; x++) {
    let name = CONSTANTS.names[randomNumberFromArray(CONSTANTS.names)];
    let lastname =
      CONSTANTS.lastNames[randomNumberFromArray(CONSTANTS.lastNames)];
    let email = `${name.toLowerCase()}.${lastname.toLowerCase()}@gmail.com`;
    let gender = genderList[randomNumberFromArray(genderList)];
    let grade = Math.floor(Math.random() * 10);
    let group = groups[randomNumberFromArray(groups)];
    let student = { name, lastname, email, gender, grade, group };
    studentsArray.push(student);
  }
 /* let result = await studentModel.insertMany(studentsArray);

  console.log(result);
  */
  /*{
    $group: {
      _id: "$grade",
      totalQuantity: { $sum: 1 },
      groupId
    },
  },
  */
  /* let order = await studentModel.aggregate([
    {
      $group: {
        _id: { group: "$group", gender: "$gender" },
        avgGrade: { $avg: "$grade" },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  console.log(order);
  */

  // let orders = await orderModel.find();
  //console.log(orders.length);

  /*let order = await orderModel.aggregate([
    {
      $match: { size: "mediana" },
    },
    {
      $group: {
        _id: "$name",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $sort: { totalQuantity: -1 },
    },
    {
      $merge: "reports",
    },
  ]);
  console.log(order);
  */

  /*let order = await orderModel.aggregate([
    {
      $match: { size: "grande" },
    },
    {
      $group: {
        _id: "$name",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $group: {
        _id: 1,
        orders: {
          $push: "$$ROOT",
        },
      },
    },
    {
      $project: {
        _id: 0,
        orders: "$orders",
      },
    },
    {
      $merge: {
        into: "reports",
      },
    },
  ]);
*/
  //console.log(order);

  let users = await studentModel.paginate(
    {
      gender: "F",
    },
    {
      page: 4,
      limit: 5,
    }
  );
  console.log(users);
};

const isEnvSetted = () => {
  if (DB_PASS && DB_USER) return true;
  else return false;
};

res.status().send()
isEnvSetted && environment();
