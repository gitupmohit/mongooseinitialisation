import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
    type:  String,
    required:true,
    
  },
  email: {
    type:  String,
    required:true,
    unique:true,
    lowercase: true
  },
  blood:{
    type:String,
    required:true
  },
  gender:{
    enum:["M","F","T"],
    default:"M"
  },
  hospitalAdmitted:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
},{timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)