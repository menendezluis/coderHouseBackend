import express from "express";
import mongoose from "mongoose";
import userModel from "./models/usuarios.model.js";
import { studentModel } from "./models/students.model.js";
import { courseModel } from "./models/courses.model.js";
//import postModel from "./models/posts.model.js";
import * as dotenv from "dotenv";
dotenv.config();

//import Loader from "./loader.js";

const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor:", error);
});

const environment = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pnpufdn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Error de conexion");
      process.exit();
    });

  /* await studentModel.create({
    first_name: "Juan",
    last_name: "Perez",
    email: "juan.perez@gmail.com",
    gender: "M",
  });
  
  await courseModel.create({
    title: "Curso de Backend",
    description: "Curso de Backend con Node.js y MongoDB",
    difficulty: 5,
    topics: ["Node.js", "MongoDB", "Express"],
    professor: "Mauricio",
  });
*/
  //let student = await studentModel.find({ _id: "63dd1f8ab2644b6dd0ba334b" });
  //  student[0].courses.push({ course: "63dc468219cc0f23d80607ee" });

  /*let student = await studentModel.findOne({ _id: "63dd1f8ab2644b6dd0ba334b" });
  student.courses.push({ course: "63dd2038dfe3b9e3c408a3eb" });
  
  //console.log(student);

  let response = await studentModel.updateOne(
    { _id: "63dd1f8ab2644b6dd0ba334b" },
    student
  );
  console.log(response);
  */

  /*let student = await studentModel
    .findOne({ _id: "63dd1f8ab2644b6dd0ba334b" })
    .populate("courses.course");
  console.log(JSON.stringify(student, null, 2));
  */
  let student = await studentModel.findOne({ _id: "63dd1f8ab2644b6dd0ba334b" });

  //console.log(student);
  console.log(JSON.stringify(student, null, 2));

  //
  /* const users = [
    { name: "John Doe" },
    { name: "Jane Doe" },
    { name: "Bob Smith" },
    { name: "Alice Johnson" },
    { name: "Charlie Brown" },
  ];

  const posts = [
    { title: "A post", author: users[0]._id },
    { title: "Another post", author: users[1]._id },
    { title: "Yet another post", author: users[2]._id },
    { title: "A final post", author: users[3]._id },
    { title: "The last post", author: users[4]._id },
  ];
*/
  /*userModel.create(users, function (err, insertedUsers) {
    if (err) {
      console.log(err);
    } else {
      console.log("Users inserted:", insertedUsers);
    }
  });

  postModel.create(posts, function (err, insertedPosts) {
    if (err) {
      console.log(err);
    } else {
      console.log("Posts inserted:", insertedPosts);
    }
  });

  */
  /*postModel
    .findOne({ title: "A post" })
    .populate("author", "name")
    .exec(function (err, post) {
      if (err) {
        console.log(err);
      } else if (post) {
        const authorName = post.author ? post.author.name : "Author not found";
        console.log({
          message: "Post founded",
          post: {
            _id: post._id,
            title: post.title,
            author: authorName,
          },
        });
      } else {
        console.log("No post found");
      }
    });

    */
  //const user = new userModel({ name: "Franco Gordillo" });
  //await user.save();

  //const post = new postModel({ title: "buenas a todos!", author: user._id });
  //await post.save();

  /*const populatedPost = await postModel
    .find({ title: "A post" })
    .populate("author", "name")
    .exec();
  console.log(populatedPost);
  */
};

environment();
