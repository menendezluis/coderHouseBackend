import express from "express";
import mongoose from "mongoose";
import userModel from "./models/usuarios.model.js";
//import { studentModel } from "./models/students.model.js";
//import { courseModel } from "./models/courses.model.js";
import postModel from "./models/posts.model.js";
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

  //let student = await studentModel.findOne({ _id: "63d2945dfdc54c546083a7c6" });
  /*.populate({
      path: "cursos.curso",
      select: "title description difficulty profesor",
    });

 // console.log("pupulate", student);
  */
  /* student.cursos.push({
    curso: "63d291626513ea34c3eef256",
  });

  //console.log("despues", student);

  let result = await studentModel.updateOne(
    { _id: "63d28e33cab0d2bde34515b6" },
    student
  );

  console.log(result);
*/
  const users = [
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

  const populatedPost = await postModel
    .find({ title: "A post" })
    .populate("author", "name")
    .exec();
  console.log(populatedPost);
};
environment();
