import mongoose from "mongoose";

const operationsSchema = mongoose.Schema;

const operations = new operationsSchema({
  operation: String,
  a: Number,
  b: Number,
  result: Object,
  added: Date,
});

const operationsModel = mongoose.model("operations", operations);

export default operationsModel;
