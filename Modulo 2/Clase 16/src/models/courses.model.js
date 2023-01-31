import mongoose from "mongoose";

const useCollection = "cursos";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
  topics: {
    type: Array,
    default: [],
  },
  profesor: String,
  students: {
    type: Array,
    default: [],
  },
});

export const courseModel = mongoose.model(useCollection, courseSchema);
