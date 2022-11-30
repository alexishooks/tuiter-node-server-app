import mongoose from "mongoose";

const schema = mongoose.schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'}); //collection name where tuits are stored

export default schema;