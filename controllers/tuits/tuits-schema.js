import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'}); //collection name where tuits are stored

export default schema;