import mongoose from "mongoose";
import { courseModel } from "./courses.model.js";

const useCollection = "estudiantes";

const studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  cursos: {
    type: [
      {
        curso: {
          type: mongoose.Schema.Types.ObjectId,
          ref: courseModel,
        },
      },
    ],
    default: [],
  },
});

export const studentModel = mongoose.model(useCollection, studentSchema);
