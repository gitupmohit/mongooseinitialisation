import mongoose from "mongoose";
import { type } from "os";
import { User } from "./user.model";

const todoSchema = new mongoose.Schema({
  content: {
    type :String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ]
})

export const Todo = mongoose.model('Todo',todoSchema)